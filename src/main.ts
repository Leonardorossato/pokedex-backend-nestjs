/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { json } from 'express';
import { AppModule } from './app.module';
import { PostgresSource } from './../data.source.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Spotify Backend Clone in NestJs')
    .setDescription('Rotas da aplicação do back-end')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });
  PostgresSource.initialize();
  await app.listen(3000);
}
bootstrap();
