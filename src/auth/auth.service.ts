import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TrainersService } from '../trainers/trainers.service';
import { Trainer } from '../trainers/entities/trainer.entity';
import { AuthLoginDTO } from './dto/auth.login.dto';
import { CheckPassword } from './middleware/check.middleware.pass';
import { CreateTrainerDTO } from '../trainers/dto/create.trainer.dto';
import * as bcrypt from 'bcryptjs';
import { JwtInterface } from './interface/Ijwt.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly trainerService: TrainersService,
    private readonly jwtService: JwtService,
    private readonly checkPassword: CheckPassword,
  ) {}

  async loginCredentials(dto: AuthLoginDTO): Promise<any> {
    let user: any;
    try {
      user = await this.trainerService.findOneByEmail({
        email: dto.email,
        password: dto.password,
      });
      const token = await this.verifyToken(dto.email, dto.password, user.id);
      const wrongPassword = await this.checkPassword.hashPassword(
        dto.password,
        10,
      );
      if (!wrongPassword) {
        throw new NotFoundException('As senhas não saão iguais');
      }
      delete user.password;
      return { access_token: token };
    } catch (error) {
      throw new NotFoundException('Login ou senha não batem');
    }
  }

  async registerCredentials(dto: CreateTrainerDTO) {
    const hasPassword = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.trainerService.createTrainer({
        ...dto,
        password: hasPassword,
      });
      user.password = undefined;
      return user;
    } catch (error) {
      if (error) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async verifyPayload(payload: JwtInterface): Promise<Trainer> {
    let user: Trainer;
    try {
      user = await this.trainerService.findOne({
        where: { email: payload.email },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${payload.email}`,
      );
    }
  }

  async verifyToken(
    email: string,
    password: string,
    id: number,
  ): Promise<string> {
    const payload = {
      email,
      password,
      id,
    };

    if (!payload) {
      return null;
    }

    return this.jwtService.sign(payload);
  }
}
