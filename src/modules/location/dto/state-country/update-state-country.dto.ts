import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateStateCountryDto } from './create-state-country.dto';

/**
 * DTO para la actualización de un estado(Departamento) de un país
 */
export class UpdateStateCountryDto implements Partial<Omit<CreateStateCountryDto, 'id'>> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  stateCode?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  latitude?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  longitude?: string | null;
}
