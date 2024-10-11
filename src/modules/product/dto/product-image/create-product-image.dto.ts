import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { ProductImageTable } from '../../entities/product-image.entity';

/**
 * DTO para la creación de una imagen de producto
 */
export class CreateProductImageDto implements Omit<ProductImageTable, keyof BaseTable> {
  @IsInt()
  productId: number;

  @IsInt()
  imageId: number;

  @IsOptional()
  @IsString()
  description: string | null;

  @IsInt()
  position: number;

  @IsBoolean()
  isMain: boolean;
}
