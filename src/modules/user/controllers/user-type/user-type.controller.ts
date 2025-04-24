import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { CreateUserTypeDto } from '../../dto/user-type/create-user-type.dto';
import { UpdateUserTypeDto } from '../../dto/user-type/update-user-type.dto';
import { UserType } from '../../entities/user-type.entity';
import { UserTypeService } from '../../services/user-type/user-type.service';

/**
 * Controlador para la entidad UserType
 */
@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  /**
   * Endpoint para crear un tipo de usuario
   * @param {CreateUserTypeDto} createUserTypeDto - Datos para crear un tipo de usuario
   * @returns {Promise<UserType>} - Retorna el tipo de usuario creado
   */
  @Post()
  create(@Body() createUserTypeDto: CreateUserTypeDto): Promise<UserType> {
    return this.userTypeService.create(createUserTypeDto);
  }

  /**
   * Endpoint para obtener todos los tipos de usuario
   * @returns {Promise<UserType[]>} - Retorna un arreglo de tipos de usuario
   */
  @Get('all')
  findAll(): Promise<UserType[]> {
    return this.userTypeService.findAll();
  }

  /**
   * Endpoint para obtener un tipo de usuario por id
   * @param {string} id - Id del tipo de usuario
   * @returns {Promise<UserType | null>} - Retorna un tipo de usuario
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserType | null> {
    return this.userTypeService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios tipos de usuario
   * @param {FindOptionsWhere<UserType>} query - Query params para buscar varios tipos de usuario
   * @returns {Promise<UserType[]>} - Retorna un arreglo de tipos de usuario
   */
  @Get()
  find(@Query() query: FindOptionsWhere<UserType>): Promise<UserType[]> {
    return this.userTypeService.find(query);
  }

  /**
   * Endpoint para actualizar un tipo de usuario
   * @param {string} id - Id del tipo de usuario
   * @param {UpdateUserTypeDto} updateUserTypeDto - Datos para actualizar un tipo de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizó el tipo de usuario
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTypeDto: UpdateUserTypeDto): Promise<boolean> {
    return this.userTypeService.update({ id: +id }, updateUserTypeDto);
  }

  /**
   * Endpoint para eliminar un tipo de usuario
   * @param {string} id - Id del tipo de usuario
   * @returns {Promise<boolean>} - Retorna true si se eliminó el tipo de usuario
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userTypeService.remove({ id: +id });
  }
}
