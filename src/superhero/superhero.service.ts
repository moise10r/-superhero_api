import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroService {
  getSuperheroes(): string {
    return 'Superheroes';
  }
}
