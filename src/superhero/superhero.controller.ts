import { Controller, Get } from '@nestjs/common';
import { SuperheroService } from './superhero.service';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Get('superheroes')
  getSuperheroes(): string {
    return this.superheroService.getSuperheroes();
  }
}
