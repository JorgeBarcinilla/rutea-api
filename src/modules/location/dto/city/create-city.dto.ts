import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { CityTable } from '../../entities/city.entity';

/**
 * DTO para la creación de una ciudad
 */
export class CreateCityDto implements Omit<CityTable, keyof Omit<BaseTable, 'id'>> {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  stateCountryId: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  latitude: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longitude: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  wikiDataId: string | null;
}
