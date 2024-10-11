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
import { CreateCityDto } from 'src/modules/location/dto/city/create-city.dto';
import { CreateCountryDto } from 'src/modules/location/dto/country/create-country.dto';
import { CreateStateCountryDto } from 'src/modules/location/dto/state-country/create-state-country.dto';
import { CreateEventDto } from './create-event.dto';

/**
 * DTO para la actualización de un evento
 */
export class UpdateEventDto implements Partial<CreateEventDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  @MinDate(new Date())
  startDate?: Date;

  @IsOptional()
  @IsDate()
  @MinDate(new Date())
  endDate?: Date | null;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsNumber()
  latitude?: number | null;

  @IsOptional()
  @IsNumber()
  longitude?: number | null;

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  price?: number | null;

  @IsOptional()
  @IsInt()
  maxParticipants?: number | null;

  @IsOptional()
  @IsInt()
  minParticipants?: number | null;

  @IsOptional()
  @IsInt()
  maxAge?: number | null;

  @IsOptional()
  @IsInt()
  minAge?: number | null;

  @IsOptional()
  @IsUrl()
  image?: string | null;

  @IsOptional()
  @IsInt()
  cityId?: number | null;

  @IsOptional()
  @IsInt()
  stateCountryId?: number | null;

  @IsOptional()
  @IsInt()
  countryId?: number | null;

  @IsOptional()
  @IsInt()
  eventTypeId?: number;

  @IsOptional()
  @IsInt()
  organizerId?: number;

  @IsOptional()
  @IsInt()
  eventStatusId?: number;

  @IsOptional()
  @ValidateNested()
  country?: CreateCountryDto | null;

  @IsOptional()
  @ValidateNested()
  stateCountry?: CreateStateCountryDto | null;

  @IsOptional()
  @ValidateNested()
  city?: CreateCityDto | null;
}
