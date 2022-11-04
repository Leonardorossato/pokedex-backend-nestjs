import {
  Injectable,
  HttpException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateTrainerDTO } from './dto/create.trainer.dto';
import { Trainer } from './entities/trainer.entity';
import { AuthLoginDTO } from '../auth/dto/auth.login.dto';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer) private trainerRepository: Repository<Trainer>,
  ) {}

  async getAllTrainers(): Promise<Trainer[]> {
    try {
      const trainer = this.trainerRepository.find();
      return trainer;
    } catch (error) {
      throw new HttpException('Erro to find trainer', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(where: FindOneOptions<Trainer>): Promise<Trainer> {
    const trainer = this.trainerRepository.findOne(where);

    if (!trainer) {
      throw new NotFoundException(
        `There isn't any trainer with identifier: ${where}`,
      );
    }

    return trainer;
  }

  async createTrainer(dto: CreateTrainerDTO) {
    try {
      const trainer = this.trainerRepository.save(dto);
      return trainer;
    } catch (error) {
      throw new HttpException('Erro to create trainer', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByEmail(dto: AuthLoginDTO) {
    try {
      const user = await this.trainerRepository.findOneBy({ email: dto.email });

      return user;
    } catch (error) {
      throw new NotFoundException('Email não encontrado');
    }
  }

  async remove(id: number) {
    try {
      const user = await this.trainerRepository.delete({ id: id });
      return user;
    } catch (error) {
      throw new NotFoundException('Id não foi encontrado');
    }
  }
}
