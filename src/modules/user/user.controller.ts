import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/user/create-user.dto';
import { UpdateUserDto } from './dto/user/update-user.dto';
import { UserQueryParamsRequestDto } from './dto/user/user-request.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

/**
 *
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Endpoint para crear un usuario
   * @param {CreateUserDto} createUserDto - Datos para crear un usuario
   * @returns {Promise<User>} - Retorna el id del usuario creado
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  /**
   * Endpoint para obtener todos los usuarios
   * @returns {Promise<User[]>} - Retorna un arreglo de usuarios
   */
  @Get('all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /**
   * Endpoint para obtener un usuario por id
   * @param {string} id - Id del usuario
   * @returns {Promise<User | null>} - Retorna un usuario
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios usuarios
   * @param {UserQueryParamsRequestDto} query - Query params para buscar varios usuarios
   * @returns {Promise<User[]>} - Retorna un arreglo de usuarios
   */
  @Get()
  find(@Query() query: UserQueryParamsRequestDto): Promise<User[]> {
    return this.userService.find(query);
  }

  /**
   * Endpoint para actualizar un usuario
   * @param {string} id - Id del usuario
   * @param {UpdateUserDto} updateUserDto - Datos para actualizar un usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizo el usuario
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userService.update({ id: +id }, updateUserDto);
  }

  /**
   * Endpoint para actualizar varios usuarios
   */

  /**
   * Endpoint para eliminar un usuario
   * @param {string} id - Id del usuario
   * @returns {Promise<boolean>} - Retorna true si se elimino el usuario
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userService.remove({ id: +id });
  }
}
