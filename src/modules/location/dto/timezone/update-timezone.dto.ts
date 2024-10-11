import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateTimezoneDto } from './create-timezone.dto';

/**
 * DTO para actualizar una zona horaria
 */
export class UpdateTimezoneDto implements Partial<Omit<CreateTimezoneDto, 'id'>> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  zoneName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  gmtOffset?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  gmtOffsetName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  abbreviation?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  tzName?: string;
}
