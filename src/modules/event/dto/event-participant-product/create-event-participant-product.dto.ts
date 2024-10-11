import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventParticipantProductTable } from '../../entities/event-participant-product.entity';

/**
 * DTO para la creación de un participante de un evento
 */
export class CreateEventParticipantProductDto implements Omit<EventParticipantProductTable, keyof BaseTable> {
  @IsInt()
  eventParticipantId: number;

  @IsInt()
  eventProductId: number;

  @IsInt()
  eventParticipantProductStatusId: number;

  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  comment: string | null;

  @IsOptional()
  @IsString()
  description: string | null;
}
