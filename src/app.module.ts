import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [TrainersModule, PokemonsModule],
})
export class AppModule {}
