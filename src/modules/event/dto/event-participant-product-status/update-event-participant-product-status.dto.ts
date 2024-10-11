import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateEventParticipantProductStatusDto } from './create-event-participant-product-status.dto';

/**
 * DTO para la actualización de un estado de participante de evento
 */
export class UpdateEventParticipantProductStatusDto implements Partial<CreateEventParticipantProductStatusDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
