import { Test, TestingModule } from '@nestjs/testing';
import { UserGenderService } from './user-gender.service';

describe('UserGenderService', () => {
  let service: UserGenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGenderService]
    }).compile();

    service = module.get<UserGenderService>(UserGenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
