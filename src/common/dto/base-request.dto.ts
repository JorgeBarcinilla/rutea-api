import { IsDate, IsInt, IsOptional } from 'class-validator';

/**
 * Propiedades comunes de los parámetros de consulta.
 */
export class BaseQueryParameters {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsDate()
  created_at?: Date;

  @IsOptional()
  @IsDate()
  updated_at?: Date;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;
}
