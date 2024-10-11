import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { CreateProductDto } from './dto/product/create-product.dto';
import { UpdateProductDto } from './dto/product/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

/**
 *
 */
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Endpoint para crear un producto
   * @param {CreateProductDto} createProductDto - Datos del producto a crear
   * @returns {Promise<Product>} - Producto creado
   */
  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  /**
   * Endpoint para obtener todos los productos
   * @returns {Promise<Product[]>} - Lista de productos
   */
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  /**
   * Endpoint para obtener un producto por id
   * @param {string} id - Id del producto
   * @returns {Promise<Product>} - Producto encontrado
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios productos
   * @param {FindOptionsWhere<Product> } query - Query params para buscar varios productos
   * @returns {Promise<Product[]>} - Lista de productos encontrados
   */
  @Get('find')
  find(@Query() query: FindOptionsWhere<Product>): Promise<Product[]> {
    return this.productService.find(query);
  }

  /**
   * Endpoint para actualizar un producto
   * @param {number} id - Id del producto
   * @param {UpdateProductDto} updateProductDto - Datos del producto a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el producto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<boolean> {
    return this.productService.update({ id: +id }, updateProductDto);
  }

  /**
   * Endpoint para eliminar un producto
   * @param {number} id - Id del producto
   * @returns {Promise<boolean>} - Retorna true si se eliminó el producto
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.productService.remove({ id: +id });
  }
}
