import { IsHexColor, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateProductCategoryDto } from './create-product-category.dto';

/**
 * DTO para la actualización de una categoría de producto
 */
export class UpdateProductCategoryDto implements Partial<CreateProductCategoryDto> {
  @IsOptional()
  @IsHexColor()
  color?: string | null;

  @IsOptional()
  @IsInt()
  parentId?: number | null;

  @IsOptional()
  @IsInt()
  creatorId?: number | null;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
