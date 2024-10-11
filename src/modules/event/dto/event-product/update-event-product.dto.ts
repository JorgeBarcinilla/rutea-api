import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEventProductDto } from './create-event-product.dto';

/**
 * DTO para la actualización de un producto de evento
 */
export class UpdateEventProductDto implements Partial<CreateEventProductDto> {
  @IsOptional()
  @IsInt()
  eventId?: number;

  @IsOptional()
  @IsInt()
  productId?: number;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsString()
  comment?: string | null;
}
