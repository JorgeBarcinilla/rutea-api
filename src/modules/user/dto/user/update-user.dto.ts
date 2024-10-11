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
import { City } from 'src/modules/location/entities/city.entity';
import { Country } from 'src/modules/location/entities/country.entity';
import { StateCountry } from 'src/modules/location/entities/state-country.entity';
import { UserTable } from '../../entities/user.entity';

/**
 * DTO para la actualización de un usuario
 */
export class UpdateUserDto implements Partial<Omit<UserTable, keyof BaseTable | 'uuid'>> {
  @IsOptional()
  @IsInt()
  userTypeId?: number | null;

  @IsOptional()
  @IsInt()
  userStatusId?: number | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string | null;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password?: string | null;

  @IsOptional()
  @IsNotEmpty()
  phone?: string | null;

  @IsOptional()
  @IsDate()
  @MaxDate(new Date())
  birhtday?: Date | null;

  @IsOptional()
  @IsNumber()
  weight?: number | null;

  @IsOptional()
  @IsNumber()
  height?: number | null;

  @IsOptional()
  @IsUrl()
  avatar?: string | null;

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  postalCode?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  genderId?: number | null;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  countryId?: number | null;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  stateCountryId?: number | null;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  cityId?: number | null;

  @IsOptional()
  @ValidateNested()
  country?: Country | null;

  @IsOptional()
  @ValidateNested()
  stateCountry?: StateCountry | null;

  @IsOptional()
  @ValidateNested()
  city?: City | null;
}
