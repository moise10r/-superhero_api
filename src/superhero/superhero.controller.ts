import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from '../dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post('new')
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    this.superheroService.addSuperhero(createSuperheroDto);
    return { message: 'Superhero added successfully' };
  }
}
