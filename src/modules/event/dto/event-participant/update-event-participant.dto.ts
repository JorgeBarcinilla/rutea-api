import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEventParticipantDto } from './create-event-participant.dto';

/**
 * DTO para la actualización de un participante de un evento
 */
export class UpdateEventParticipantDto implements Partial<Omit<CreateEventParticipantDto, 'uuid'>> {
  @IsOptional()
  @IsInt()
  eventId?: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  eventParticipantStatusId?: number;

  @IsOptional()
  @IsInt()
  participantNumber?: number | null;

  @IsOptional()
  @IsString()
  comment?: string | null;

  @IsOptional()
  @IsDate()
  startDate?: Date | null;

  @IsOptional()
  @IsDate()
  endDate?: Date | null;

  @IsOptional()
  @IsNumber()
  time?: number | null;

  @IsOptional()
  @IsNumber()
  distance?: number | null;

  @IsOptional()
  @IsNumber()
  weight?: number | null;

  @IsOptional()
  @IsNumber()
  height?: number | null;
}
