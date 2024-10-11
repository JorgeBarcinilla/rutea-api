import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEventParticipantProductDto } from './create-event-participant-product.dto';

/**
 * DTO para la actualización de un participante de un evento
 */
export class UpdateEventParticipantProductDto implements Partial<CreateEventParticipantProductDto> {
  @IsOptional()
  @IsInt()
  eventParticipantId?: number;

  @IsOptional()
  @IsInt()
  eventProductId?: number;

  @IsOptional()
  @IsInt()
  eventParticipantProductStatusId?: number;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  comment?: string | null;

  @IsOptional()
  @IsString()
  description?: string | null;
}
