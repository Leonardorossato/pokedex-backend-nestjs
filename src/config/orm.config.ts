/* eslint-disable prettier/prettier */
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      port: +process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: ['./dist/**/**.entity.js'],
      migrations: ['./dist/migrations/**.js'],
      synchronize: false,
      logging: 'all',
      migrationsRun: true,
    };
  },
};
