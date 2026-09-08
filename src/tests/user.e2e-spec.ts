import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app/app.module';
import { INestApplicationContext } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '../user/user.module';

describe('User E2E', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/POST users', () => {
    const createUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
      birthDate: new Date('1990-01-01'),
      role: 'user',
    };
    return request(app.getHttpServer())
     .post('/users')
     .send(createUserDto)
     .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});