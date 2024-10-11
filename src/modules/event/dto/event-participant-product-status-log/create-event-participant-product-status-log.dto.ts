import { IsInt, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventParticipantProductStatusLogTable } from '../../entities/event-participant-product-status-log.entity';

/**
 * DTO para la creación de un registro de estado de un producto de un participante de un eventow
 */
export class CreateEventParticipantProductStatusLogDto
  implements Omit<EventParticipantProductStatusLogTable, keyof BaseTable>
{
  @IsInt()
  eventParticipantProductStatusId: number;

  @IsInt()
  eventParticipantProductId: number;

  @IsInt()
  userId: number;

  @IsOptional()
  @IsString()
  comment: string | null;
}
