import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthModule } from './auth/auth.module';
import { GymModule } from './gym/gym.module';
import { GymLidersModule } from './gym-liders/gym-liders.module';
import { LeagueModule } from './league/league.module';
import { typeOrmAsyncConfig } from './config/orm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    TrainersModule,
    PokemonsModule,
    AuthModule,
    GymModule,
    GymLidersModule,
    LeagueModule,
  ],
})
export class AppModule {}
