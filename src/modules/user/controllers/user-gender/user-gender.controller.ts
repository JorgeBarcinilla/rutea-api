import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { CreateUserGenderDto } from '../../dto/user-gender/create-user-gender.dto';
import { UpdateUserGenderDto } from '../../dto/user-gender/update-user-gender.dto';
import { UserGender } from '../../entities/user-gender.entity';
import { UserGenderService } from '../../services/user-gender/user-gender.service';

/**
 * Controlador para la entidad UserGender
 */
@Controller('user-gender')
export class UserGenderController {
  constructor(private readonly userGenderService: UserGenderService) {}

  /**
   * Endpoint para crear un género de usuario
   * @param {CreateUserGenderDto} createUserGenderDto - Datos para crear un género de usuario
   * @returns {Promise<UserGender>} - Retorna el género de usuario creado
   */
  @Post()
  create(@Body() createUserGenderDto: CreateUserGenderDto): Promise<UserGender> {
    return this.userGenderService.create(createUserGenderDto);
  }

  /**
   * Endpoint para obtener todos los géneros de usuario
   * @returns {Promise<UserGender[]>} - Retorna un arreglo de géneros de usuario
   */
  @Get('all')
  findAll(): Promise<UserGender[]> {
    return this.userGenderService.findAll();
  }

  /**
   * Endpoint para obtener un género de usuario por id
   * @param {string} id - Id del género de usuario
   * @returns {Promise<UserGender | null>} - Retorna un género de usuario
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserGender | null> {
    return this.userGenderService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios géneros de usuario
   * @param {FindOptionsWhere<UserGender>} query - Query params para buscar varios géneros de usuario
   * @returns {Promise<UserGender[]>} - Retorna un arreglo de géneros de usuario
   */
  @Get()
  find(@Query() query: FindOptionsWhere<UserGender>): Promise<UserGender[]> {
    return this.userGenderService.find(query);
  }

  /**
   * Endpoint para actualizar un género de usuario
   * @param {string} id - Id del género de usuario
   * @param {UpdateUserGenderDto} updateUserGenderDto - Datos para actualizar un género de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizó el género de usuario
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserGenderDto: UpdateUserGenderDto): Promise<boolean> {
    return this.userGenderService.update({ id: +id }, updateUserGenderDto);
  }

  /**
   * Endpoint para eliminar un género de usuario
   * @param {string} id - Id del género de usuario
   * @returns {Promise<boolean>} - Retorna true si se eliminó el género de usuario
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userGenderService.remove({ id: +id });
  }
}
