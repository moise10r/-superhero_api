import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from '../dto';

@Injectable()
export class SuperheroService {
  private superheroes = [];

  addSuperhero(superhero: CreateSuperheroDto) {
    this.superheroes.push(superhero);
  }

}
