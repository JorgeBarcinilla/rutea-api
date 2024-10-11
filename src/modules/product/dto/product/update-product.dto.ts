import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

/**
 * DTO para la actualización de un producto
 */
export class UpdateProductDto implements Partial<CreateProductDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  barcode?: string | null;

  @IsOptional()
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @IsInt()
  sellerId?: number;

  @IsOptional()
  @IsInt()
  stock?: number | null;
}
