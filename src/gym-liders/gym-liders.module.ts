import { Module } from '@nestjs/common';
import { GymLidersService } from './gym-liders.service';
import { GymLidersController } from './gym-liders.controller';

@Module({
  controllers: [GymLidersController],
  providers: [GymLidersService]
})
export class GymLidersModule {}
