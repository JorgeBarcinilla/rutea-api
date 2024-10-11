import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MinDate,
  ValidateNested
} from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { CreateCityDto } from 'src/modules/location/dto/city/create-city.dto';
import { CreateCountryDto } from 'src/modules/location/dto/country/create-country.dto';
import { CreateStateCountryDto } from 'src/modules/location/dto/state-country/create-state-country.dto';
import { EventTable } from '../../entities/event.entity';

/**
 * DTO para la creación de un evento
 */
export class CreateEventDto implements Omit<EventTable, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsDate()
  @MinDate(new Date())
  startDate: Date;

  @IsOptional()
  @IsDate()
  @MinDate(new Date())
  endDate: Date | null;

  @IsBoolean()
  published: boolean;

  @IsOptional()
  @IsNumber()
  latitude: number | null;

  @IsOptional()
  @IsNumber()
  longitude: number | null;

  @IsOptional()
  @IsString()
  address: string | null;

  @IsOptional()
  price: number | null;

  @IsOptional()
  @IsInt()
  maxParticipants: number | null;

  @IsOptional()
  @IsInt()
  minParticipants: number | null;

  @IsOptional()
  @IsInt()
  maxAge: number | null;

  @IsOptional()
  @IsInt()
  minAge: number | null;

  @IsOptional()
  @IsUrl()
  image: string | null;

  @IsOptional()
  @IsInt()
  cityId: number | null;

  @IsOptional()
  @IsInt()
  stateCountryId: number | null;

  @IsOptional()
  @IsInt()
  countryId: number | null;

  @IsOptional()
  @IsInt()
  eventTypeId: number;

  @IsOptional()
  @IsInt()
  organizerId: number;

  @IsOptional()
  @IsInt()
  eventStatusId: number;

  @IsOptional()
  @ValidateNested()
  country: CreateCountryDto | null;

  @IsOptional()
  @ValidateNested()
  stateCountry: CreateStateCountryDto | null;

  @IsOptional()
  @ValidateNested()
  city: CreateCityDto | null;
}
