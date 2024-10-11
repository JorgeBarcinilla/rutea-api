import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxDate,
  MinLength,
  ValidateNested
} from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { CreateCityDto } from 'src/modules/location/dto/city/create-city.dto';
import { CreateCountryDto } from 'src/modules/location/dto/country/create-country.dto';
import { CreateStateCountryDto } from 'src/modules/location/dto/state-country/create-state-country.dto';
import { UserTable } from '../../entities/user.entity';

/**
 * DTO para la creación de un usuario
 */
export class CreateUserDto implements Omit<UserTable, keyof BaseTable | 'uuid' | 'userTypeId' | 'userStatusId'> {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: string;

  @IsDate()
  @MaxDate(new Date())
  birhtday: Date;

  @IsOptional()
  @IsNumber()
  weight: number | null;

  @IsOptional()
  @IsNumber()
  height: number | null;

  @IsOptional()
  @IsUrl()
  avatar: string | null;

  @IsOptional()
  @IsString()
  address: string | null;

  @IsOptional()
  postalCode: string | null;

  @IsNotEmpty()
  @IsInt()
  genderId: number;

  @IsNotEmpty()
  @IsInt()
  countryId: number;

  @IsNotEmpty()
  @IsInt()
  stateCountryId: number;

  @IsNotEmpty()
  @IsInt()
  cityId: number;

  @ValidateNested()
  country: CreateCountryDto;

  @ValidateNested()
  stateCountry: CreateStateCountryDto;

  @ValidateNested()
  city: CreateCityDto;
}
