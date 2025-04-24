import { Test, TestingModule } from '@nestjs/testing';
import { UserGenderController } from './user-gender.controller';

describe('UserGenderController', () => {
  let controller: UserGenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGenderController]
    }).compile();

    controller = module.get<UserGenderController>(UserGenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
