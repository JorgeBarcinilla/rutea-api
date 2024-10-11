import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProductImageDto } from './create-product-image.dto';

/**
 * DTO para la actualización de una imagen de producto
 */
export class UpdateProductImageDto implements Partial<CreateProductImageDto> {
  @IsOptional()
  @IsInt()
  productId?: number;

  @IsOptional()
  @IsInt()
  imageId?: number;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsInt()
  position?: number;

  @IsOptional()
  @IsBoolean()
  isMain?: boolean;
}
