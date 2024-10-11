import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageQueryParamsRequestDto } from './dto/image-request.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { ImageService } from './image.service';

/**
 *
 */
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  /**
   * Endpoint para crear una imagen
   * @param {CreateImageDto} createImageDto - Datos de la imagen a crear
   * @returns {Promise<Image>} - Imagen creada
   */
  @Post()
  create(@Body() createImageDto: CreateImageDto): Promise<Image> {
    return this.imageService.create(createImageDto);
  }

  /**
   * Endpoint para obtener todas las imagenes
   * @returns {Promise<Image[]>} - Lista de imagenes
   */
  @Get()
  findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  /**
   * Endpoint para obtener una imagen
   * @param {string} id - Id de la imagen
   * @returns {Promise<Image>} - Imagen encontrada
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Image> {
    return this.imageService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varias imagenes
   * @param {ImageQueryParamsRequestDto} query - Query params para buscar varias imagenes
   * @returns {Promise<Image[]>} - Lista de imagenes encontradas
   */
  @Get('find')
  find(@Query() query: ImageQueryParamsRequestDto): Promise<Image[]> {
    return this.imageService.find(query);
  }

  /**
   * Endpoint para actualizar una imagen
   * @param {string} id - Id de la imagen
   * @param {UpdateImageDto} updateImageDto - Datos de la imagen a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizo la imagen
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto): Promise<boolean> {
    return this.imageService.update({ id: +id }, updateImageDto);
  }

  /**
   * Endpoint para eliminar una imagen
   * @param {string} id - Id de la imagen
   * @returns {Promise<boolean>} - Retorna true si se elimino la imagen
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.imageService.remove({ id: +id });
  }
}
