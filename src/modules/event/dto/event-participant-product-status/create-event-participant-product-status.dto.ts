import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventParticipantProductStatus } from '../../entities/event-participant-product-status.entity';

/**
 * DTO para la creación de un estado de participante de evento
 */
export class CreateEventParticipantProductStatusDto implements Omit<EventParticipantProductStatus, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
