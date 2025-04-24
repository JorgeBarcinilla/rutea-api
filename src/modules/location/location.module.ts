import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './controllers/city/city.controller';
import { CountryController } from './controllers/country/country.controller';
import { StateCountryController } from './controllers/state-country/state-country.controller';
import { City } from './entities/cities.entity';
import { Country } from './entities/countries.entity';
import { StateCountry } from './entities/states.entity';
import { LocationService } from './location.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Country, StateCountry, City])],
  controllers: [CityController, CountryController, StateCountryController],
  providers: [LocationService]
})
export class LocationModule {}
