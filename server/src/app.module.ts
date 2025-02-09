import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SuperheroController } from './superhero/superhero.controller';
import { SuperheroService } from './superhero/superhero.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class AppModule {}
