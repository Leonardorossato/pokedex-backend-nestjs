import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrainerDTO } from './dto/create.trainer.dto';
import { Trainer } from './entities/trainer.entity';

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

  async createTrainer(dto: CreateTrainerDTO) {
    try {
      const trainer = this.trainerRepository.create(dto);
      return trainer;
    } catch (error) {
      throw new HttpException('Erro to create trainer', HttpStatus.BAD_REQUEST);
    }
  }
}
