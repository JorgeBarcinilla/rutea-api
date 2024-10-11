import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateEventStatusDto } from './create-event-status.dto';

/**
 *
 */
export class UpdateEventStatusDto implements Partial<CreateEventStatusDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
