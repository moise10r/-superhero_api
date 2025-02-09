import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication;
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
    controller = new SuperheroController(service);
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET superheroes (should return empty array initially)', async () => {
    return request(app.getHttpServer())
      .get('/superheroes')
      .expect(200)
      .expect([]);
  });

  it('should add a superhero successfully', () => {
    const superhero: CreateSuperheroDto = {
      name: 'Batman',
      superpower: 'Stealth',
      humilityScore: 7,
    };
    expect(controller.addSuperhero(superhero)).toEqual({
      message: 'Superhero added successfully',
    });
  });

  it('should return superheroes sorted by humility score', () => {
    controller.addSuperhero({
      name: 'A',
      superpower: 'Power',
      humilityScore: 5,
    });
    controller.addSuperhero({
      name: 'B',
      superpower: 'Strength',
      humilityScore: 9,
    });
    controller.addSuperhero({
      name: 'C',
      superpower: 'Speed',
      humilityScore: 7,
    });
    expect(controller.getSuperheroes()).toEqual([
      { name: 'B', superpower: 'Strength', humilityScore: 9 },
      { name: 'C', superpower: 'Speed', humilityScore: 7 },
      { name: 'A', superpower: 'Power', humilityScore: 5 },
    ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
