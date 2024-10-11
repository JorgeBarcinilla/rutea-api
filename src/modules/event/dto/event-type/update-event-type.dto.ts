import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateEventTypeDto } from './create-event-type.dto';

/**
 *
 */
export class UpdateEventTypeDto implements Partial<CreateEventTypeDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
