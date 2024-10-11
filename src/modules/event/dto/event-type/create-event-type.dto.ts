import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventType } from '../../entities/event-type.entity';

/**
 *
 */
export class CreateEventTypeDto implements Omit<EventType, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
