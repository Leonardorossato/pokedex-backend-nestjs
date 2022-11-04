import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { CreatePokemonDTO } from './dto/create.pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) {}

  async getAllPokemons(): Promise<Pokemon[]> {
    try {
      const pokemon = await this.pokemonRepository.find();
      return pokemon;
    } catch (error) {
      throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
    }
  }

  async createPokemon(dto: CreatePokemonDTO): Promise<any> {
    try {
      const pokemon = await this.pokemonRepository.save({
        name: dto.name,
        type: dto[0].type,
      });
      if (pokemon.type == null) {
        throw new HttpException(
          'Type of the pokemon cant be empyt',
          HttpStatus.BAD_REQUEST,
        );
      }
      return pokemon;
    } catch (error) {
      throw new HttpException(
        'Erro to create a pokemon',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
