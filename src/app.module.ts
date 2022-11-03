import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthModule } from './auth/auth.module';
import { GymModule } from './gym/gym.module';
import { GymLidersModule } from './gym-liders/gym-liders.module';
import { LeagueModule } from './league/league.module';

@Module({
  imports: [TrainersModule, PokemonsModule, AuthModule, GymModule, GymLidersModule, LeagueModule],
})
export class AppModule {}
