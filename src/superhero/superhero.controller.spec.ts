import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication;
  let service: SuperheroService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    service = moduleFixture.get<SuperheroService>(SuperheroService);
  });

  it('/GET superheroes (should return empty array initially)', async () => {
    return request(app.getHttpServer())
      .get('/superheroes')
      .expect(200)
      .expect([]);
  });

  afterAll(async () => {
    await app.close();
  });
});
