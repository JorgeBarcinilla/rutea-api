import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { CreateUserStatusDto } from '../../dto/user-status/create-user-status.dto';
import { UpdateUserStatusDto } from '../../dto/user-status/update-user-status.dto';
import { UserStatus } from '../../entities/user-status.entity';
import { UserStatusService } from '../../services/user-status/user-status.service';

/**
 * Controlador para la entidad UserStatus
 */
@Controller('user-status')
export class UserStatusController {
  constructor(private readonly userStatusService: UserStatusService) {}

  /**
   * Endpoint para crear un estado de usuario
   * @param {CreateUserStatusDto} createUserStatusDto - Datos para crear un estado de usuario
   * @returns {Promise<UserStatus>} - Retorna el estado de usuario creado
   */
  @Post()
  create(@Body() createUserStatusDto: CreateUserStatusDto): Promise<UserStatus> {
    return this.userStatusService.create(createUserStatusDto);
  }

  /**
   * Endpoint para obtener todos los estados de usuario
   * @returns {Promise<UserStatus[]>} - Retorna un arreglo de estados de usuario
   */
  @Get('all')
  findAll(): Promise<UserStatus[]> {
    return this.userStatusService.findAll();
  }

  /**
   * Endpoint para obtener un estado de usuario por id
   * @param {string} id - Id del estado de usuario
   * @returns {Promise<UserStatus | null>} - Retorna un estado de usuario
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserStatus | null> {
    return this.userStatusService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios estados de usuario
   * @param {FindOptionsWhere<UserStatus>} query - Query params para buscar varios estados de usuario
   * @returns {Promise<UserStatus[]>} - Retorna un arreglo de estados de usuario
   */
  @Get()
  find(@Query() query: FindOptionsWhere<UserStatus>): Promise<UserStatus[]> {
    return this.userStatusService.find(query);
  }

  /**
   * Endpoint para actualizar un estado de usuario
   * @param {string} id - Id del estado de usuario
   * @param {UpdateUserStatusDto} updateUserStatusDto - Datos para actualizar un estado de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizó el estado de usuario
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserStatusDto: UpdateUserStatusDto): Promise<boolean> {
    return this.userStatusService.update({ id: +id }, updateUserStatusDto);
  }

  /**
   * Endpoint para eliminar un estado de usuario
   * @param {string} id - Id del estado de usuario
   * @returns {Promise<boolean>} - Retorna true si se eliminó el estado de usuario
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userStatusService.remove({ id: +id });
  }
}
