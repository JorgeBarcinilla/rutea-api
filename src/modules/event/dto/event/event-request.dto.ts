import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { BaseQueryParameters } from 'src/common/dto/base-request.dto';
import { EventTable } from '../../entities/event.entity';

/**
 * DTO con las propiedades que se pueden enviar para hacer una consulta de eventos
 */
export class EventQueryParamsRequestDto
  extends BaseQueryParameters
  implements Partial<Omit<EventTable, 'description'>>
{
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsDate()
  endDate?: Date | null;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsNumber()
  latitude?: number | null;

  @IsOptional()
  @IsNumber()
  longitude?: number | null;

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  @IsNumber()
  price?: number | null;

  @IsOptional()
  @IsInt()
  maxParticipants?: number | null;

  @IsOptional()
  @IsInt()
  minParticipants?: number | null;

  @IsOptional()
  @IsInt()
  maxAge?: number | null;

  @IsOptional()
  @IsInt()
  minAge?: number | null;

  @IsOptional()
  @IsUrl()
  image?: string | null;

  @IsOptional()
  @IsInt()
  cityId?: number | null;

  @IsOptional()
  @IsInt()
  stateCountryId?: number | null;

  @IsOptional()
  @IsInt()
  countryId?: number | null;

  @IsOptional()
  @IsInt()
  eventTypeId?: number;

  @IsOptional()
  @IsInt()
  organizerId?: number;

  @IsOptional()
  @IsInt()
  eventStatusId?: number;
}
