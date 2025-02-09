import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from '../dto';

@Injectable()
export class SuperheroService {
  private superheroes: Record<string, CreateSuperheroDto> = {};

  addSuperhero(superhero: CreateSuperheroDto) {
    if (this.superheroes[superhero.name]) {
      throw new BadRequestException('Superhero with this name already exists');
    }
    this.superheroes[superhero.name] = superhero;
  }

  getSuperheroes() {
    return Object.values(this.superheroes).sort(
      (a, b) => b.humilityScore - a.humilityScore,
    );
  }
}
