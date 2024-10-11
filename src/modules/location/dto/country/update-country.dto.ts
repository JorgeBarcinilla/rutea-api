import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateStateCountryDto } from '../state-country/create-state-country.dto';

/**
 * DTO para la actualización de un país
 */
export class UpdateCountryDto implements Partial<Omit<CreateStateCountryDto, 'id'>> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  latitude?: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longitude?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  iso3?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  iso2?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  numericCode?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phoneCode?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  capital?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  currencyName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  currencySymbol?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  tld?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  native?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  region?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  subregion?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  emoji?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  emojiU?: string;
}
