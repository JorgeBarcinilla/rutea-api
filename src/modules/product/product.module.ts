import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/product-category.entity';
import { ProductImage } from './entities/product-image.entity';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, ProductCategory])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
