import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateEventParticipantStatusDto } from './create-event-participant-status.dto';

/**
 * DTO para la actualización de un estado de participante de evento
 */
export class UpdateEventParticipantStatusDto implements Partial<CreateEventParticipantStatusDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
