import { IsInt, IsOptional, IsString } from 'class-validator';
import { CreateEventParticipantProductStatusLogDto } from './create-event-participant-product-status-log.dto';

/**
 *
 */
export class UpdateEventParticipantProductStatusLogDto implements Partial<CreateEventParticipantProductStatusLogDto> {
  @IsOptional()
  @IsInt()
  eventParticipantProductStatusId?: number;

  @IsOptional()
  @IsInt()
  eventParticipantProductId?: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsString()
  comment?: string | null;
}
