import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TrainersModule, PokemonsModule, AuthModule],
})
export class AppModule {}
