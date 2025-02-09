import { CreateSuperheroDto } from './dto';
import { SuperheroService } from './superhero.service';
import { BadRequestException } from '@nestjs/common';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
  });

  it('should add a superhero successfully', () => {
    const superhero: CreateSuperheroDto = {
      name: 'Superman',
      superpower: 'Flying',
      humilityScore: 8,
    };
    service.addSuperhero(superhero);
    expect(service.getSuperheroes()).toHaveLength(1);
  });

  it('should not allow adding a superhero with the same name', () => {
    const superhero: CreateSuperheroDto = {
      name: 'Superman',
      superpower: 'Flying',
      humilityScore: 8,
    };
    service.addSuperhero(superhero);
    expect(() => service.addSuperhero(superhero)).toThrow(BadRequestException);
  });
});
