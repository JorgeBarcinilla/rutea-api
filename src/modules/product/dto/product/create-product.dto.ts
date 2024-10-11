import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { ProductTable } from '../../entities/product.entity';

/**
 * DTO para la creación de un producto
 */
export class CreateProductDto implements Omit<ProductTable, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  barcode: string | null;

  @IsInt()
  categoryId: number;

  @IsInt()
  sellerId: number;

  @IsOptional()
  @IsInt()
  stock: number | null;
}
