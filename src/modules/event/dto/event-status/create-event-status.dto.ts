import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventStatus } from '../../entities/event-status.entity';

/**
 *
 */
export class CreateEventStatusDto implements Omit<EventStatus, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
