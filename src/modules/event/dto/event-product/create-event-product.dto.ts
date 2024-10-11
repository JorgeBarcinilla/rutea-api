import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { EventProductTable } from '../../entities/event-product.entity';

/**
 * DTO para la creación de un producto de evento
 */
export class CreateEventProductDto implements Omit<EventProductTable, keyof BaseTable> {
  @IsInt()
  eventId: number;

  @IsInt()
  productId: number;

  @IsNumber()
  price: number;

  @IsBoolean()
  required: boolean;

  @IsOptional()
  @IsString()
  comment: string | null;
}
