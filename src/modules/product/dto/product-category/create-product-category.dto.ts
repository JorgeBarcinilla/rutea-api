import { IsHexColor, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { ProductCategoryTable } from '../../entities/product-category.entity';

/**
 * DTO para la creación de una categoría de producto
 */
export class CreateProductCategoryDto implements Omit<ProductCategoryTable, keyof BaseTable> {
  @IsOptional()
  @IsHexColor()
  color: string | null;

  @IsOptional()
  @IsInt()
  parentId: number | null;

  @IsOptional()
  @IsInt()
  creatorId: number | null;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
