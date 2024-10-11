import { IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { CountryTable } from '../../entities/country.entity';
import { CreateTimezoneDto } from '../timezone/create-timezone.dto';

/**
 * DTO para la creación de un país
 */
export class CreateCountryDto implements Omit<CountryTable, keyof Omit<BaseTable, 'id'>> {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  latitude: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longitude: string | null;

  @IsNotEmpty()
  @IsString()
  iso3: string;

  @IsNotEmpty()
  @IsString()
  iso2: string;

  @IsNotEmpty()
  @IsString()
  numericCode: string;

  @IsNotEmpty()
  @IsString()
  phoneCode: string;

  @IsNotEmpty()
  @IsString()
  capital: string;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsString()
  currencyName: string;

  @IsNotEmpty()
  @IsString()
  currencySymbol: string;

  @IsNotEmpty()
  @IsString()
  tld: string;

  @IsNotEmpty()
  @IsString()
  native: string;

  @IsNotEmpty()
  @IsString()
  region: string;

  @IsNotEmpty()
  @IsString()
  subregion: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  emoji: string;

  @IsNotEmpty()
  @IsString()
  emojiU: string;

  @ValidateNested()
  timezone: CreateTimezoneDto;
}
