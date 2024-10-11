import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { StateCountryTable } from '../../entities/state-country.entity';

/**
 * DTO para la creación de un estado(Departamento) de un país
 */
export class CreateStateCountryDto implements Omit<StateCountryTable, keyof Omit<BaseTable, 'id'>> {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  countryId: number;

  @IsNotEmpty()
  @IsString()
  stateCode: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  latitude: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  longitude: string | null;
}
