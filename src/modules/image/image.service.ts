import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';

/**
 * Servicio de la entidad Image
 */
@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>
  ) {}

  /**
   * Metodo para crear una imagen
   * @param {CreateImageDto} createImageDto - Datos de la imagen a crear
   * @returns {Promise<Image>} - Imagen creada
   */
  create(createImageDto: CreateImageDto): Promise<Image> {
    return this.imageRepository.save(createImageDto);
  }

  /**
   * Metodo para obtener todas las imagenes
   * @returns {Promise<Image[]>} - Lista de imagenes
   */
  findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  /**
   * Metodo para obtener una imagen
   * @param {FindOptionsWhere<Image> | FindOptionsWhere<Image>[]} where - Id de la imagen
   * @returns {Promise<Image>} - Imagen encontrada
   */
  findOne(where: FindOptionsWhere<Image> | FindOptionsWhere<Image>[]): Promise<Image> {
    return this.imageRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varias imagenes
   * @param {FindOptionsWhere<Image> | FindOptionsWhere<Image>[]} where - Condiciones de busqueda
   * @returns {Promise<Image[]>} - Lista de imagenes encontradas
   */
  find(where: FindOptionsWhere<Image> | FindOptionsWhere<Image>[]): Promise<Image[]> {
    return this.imageRepository.find({ where });
  }

  /**
   * Metodo para actualizar una imagen
   * @param {FindOptionsWhere<Image>} where - Id de la imagen
   * @param {CreateImageDto} createImageDto - Datos de la imagen a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizo la imagen
   */
  async update(where: FindOptionsWhere<Image>, createImageDto: CreateImageDto): Promise<boolean> {
    const result = await this.imageRepository.update(where, createImageDto);
    return result.affected > 0;
  }

  /**
   * Metodo para eliminar una imagen
   * @param {FindOptionsWhere<Image>} where - Id de la imagen
   * @returns {Promise<boolean>} - Retorna true si se elimino la imagen
   */
  async remove(where: FindOptionsWhere<Image>): Promise<boolean> {
    const result = await this.imageRepository.delete(where);
    return result.affected > 0;
  }
}
