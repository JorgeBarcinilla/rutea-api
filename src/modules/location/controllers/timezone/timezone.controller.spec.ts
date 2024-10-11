import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from '../../location.service';
import { TimeZoneController } from './timezone.controller';

describe('TimeZoneController', () => {
  let controller: TimeZoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeZoneController],
      providers: [LocationService]
    }).compile();

    controller = module.get<TimeZoneController>(TimeZoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
