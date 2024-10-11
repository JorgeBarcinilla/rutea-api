import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from '../../location.service';
import { StateCountryController } from './state-country.controller';

describe('StateCountryController', () => {
  let controller: StateCountryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StateCountryController],
      providers: [LocationService]
    }).compile();

    controller = module.get<StateCountryController>(StateCountryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
