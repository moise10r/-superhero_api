import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero/superhero.controller';
import { SuperheroService } from './superhero/superhero.service';

@Module({
  imports: [],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class AppModule {}
