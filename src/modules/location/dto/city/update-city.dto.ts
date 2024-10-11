import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateCityDto } from './create-city.dto';

/**
 * DTO para actualizar una ciudad
 */
export class UpdateCityDto implements Partial<Omit<CreateCityDto, 'id'>> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  stateCountryId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  latitude?: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longitude?: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  wikiDataId?: string | null;
}
