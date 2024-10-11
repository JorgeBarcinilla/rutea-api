import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './controllers/city/city.controller';
import { CountryController } from './controllers/country/country.controller';
import { StateCountryController } from './controllers/state-country/state-country.controller';
import { TimeZoneController } from './controllers/timezone/timezone.controller';
import { City } from './entities/city.entity';
import { Country } from './entities/country.entity';
import { StateCountry } from './entities/state-country.entity';
import { Timezone } from './entities/timezone.entity';
import { LocationService } from './location.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Country, StateCountry, City, Timezone])],
  controllers: [CityController, CountryController, StateCountryController, TimeZoneController],
  providers: [LocationService]
})
export class LocationModule {}
