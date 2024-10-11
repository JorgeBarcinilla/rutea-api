import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { TimezoneTable } from '../../entities/timezone.entity';

/**
 * DTO para la creación de una zona horaria
 */
export class CreateTimezoneDto implements Omit<TimezoneTable, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  zoneName: string;

  @IsNotEmpty()
  @IsInt()
  gmtOffset: number;

  @IsNotEmpty()
  @IsString()
  gmtOffsetName: string;

  @IsNotEmpty()
  @IsString()
  abbreviation: string;

  @IsNotEmpty()
  @IsString()
  tzName: string;
}
