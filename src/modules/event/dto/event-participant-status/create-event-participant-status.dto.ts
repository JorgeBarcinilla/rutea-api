import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventParticipantStatus } from '../../entities/event-participant-status.entity';

/**
 * DTO para la creación de un estado de participante de evento
 */
export class CreateEventParticipantStatusDto implements Omit<EventParticipantStatus, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
