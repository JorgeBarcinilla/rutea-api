import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { Generated } from 'typeorm';
import { EventParticipantTable } from '../../entities/event-participant.entity';

/**
 * DTO para la creación de un participante de un evento
 */
export class CreateEventParticipantDto implements Omit<EventParticipantTable, keyof BaseTable> {
  @Generated('uuid')
  uuid: string;

  @IsInt()
  eventId: number;

  @IsInt()
  userId: number;

  @IsInt()
  eventParticipantStatusId: number;

  @IsOptional()
  @IsInt()
  participantNumber: number | null;

  @IsOptional()
  @IsString()
  comment: string | null;

  @IsOptional()
  @IsDate()
  startDate: Date | null;

  @IsOptional()
  @IsDate()
  endDate: Date | null;

  @IsOptional()
  @IsNumber()
  time: number | null;

  @IsOptional()
  @IsNumber()
  distance: number | null;

  @IsOptional()
  @IsNumber()
  weight: number | null;

  @IsOptional()
  @IsNumber()
  height: number | null;
}
