/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export enum TypePokemonEnum {
  Normal = 'normal',
  Fogo = 'fogo',
  Agua = 'agua',
  Grama = 'grama',
  Voador = 'voador',
  Lutador = 'lutador',
  Veneno = 'veneno',
  Eletrico = 'eletrico',
  Terra = 'terra',
  Pedra = 'pedra',
  Psiquico = 'psiquico',
  Gelo = 'gelo',
  Inseto = 'inseto',
  Fantasma = 'fantasma',
  Ferro = 'ferro',
  Dragao = 'dragao',
  Sombrio = 'sombrio',
  Fada = 'fada',
}

export class CreatePokemonDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: false })
  @IsEnum(TypePokemonEnum)
  type: TypePokemonEnum;
}
