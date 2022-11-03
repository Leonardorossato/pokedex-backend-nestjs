import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthModule } from './auth/auth.module';
import { GymModule } from './gym/gym.module';
import { GymLidersModule } from './gym-liders/gym-liders.module';

@Module({
  imports: [TrainersModule, PokemonsModule, AuthModule, GymModule, GymLidersModule],
})
export class AppModule {}
