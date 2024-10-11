import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateProductDto } from './dto/product/create-product.dto';
import { UpdateProductDto } from './dto/product/update-product.dto';
import { Product } from './entities/product.entity';

/**
 *
 */
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  /**
   * Método para crear un producto
   * @param {CreateProductDto} createProductDto - Datos del producto a crear
   * @returns {Promise<Product>} - Producto creado
   */
  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.save(createProductDto);
  }

  /**
   * Método para obtener todos los productos
   * @returns {Promise<Product[]>} - Lista de productos
   */
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  /**
   * Método para obtener un producto
   * @param {FindOptionsWhere<Product>} where - Id del producto
   * @returns {Promise<Product>} - Producto encontrado
   */
  findOne(where: FindOptionsWhere<Product>): Promise<Product> {
    return this.productRepository.findOne({ where });
  }

  /**
   * Método para obtener varios productos
   * @param {FindOptionsWhere<Product> } query - Query params para buscar varios productos
   * @returns {Promise<Product[]>} - Lista de productos encontrados
   */
  find(query: FindOptionsWhere<Product> | FindOptionsWhere<Product>[]): Promise<Product[]> {
    return this.productRepository.find({ where: query });
  }

  /**
   * Método para actualizar un producto
   * @param {FindOptionsWhere<Product>} where - Id del producto
   * @param {UpdateProductDto} updateProductDto - Datos del producto a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el producto
   */
  async update(where: FindOptionsWhere<Product>, updateProductDto: UpdateProductDto): Promise<boolean> {
    const result = await this.productRepository.update(where, updateProductDto);
    return result.affected > 0;
  }

  /**
   * Método para eliminar un producto
   * @param {FindOptionsWhere<Product>} where - Id del producto
   * @returns {Promise<boolean>} - Retorna true si se eliminó el producto
   */
  async remove(where: FindOptionsWhere<Product>): Promise<boolean> {
    const result = await this.productRepository.delete(where);
    return result.affected > 0;
  }
}
