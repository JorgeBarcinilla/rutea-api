import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserStatusDto } from '../../dto/user-status/create-user-status.dto';
import { UpdateUserStatusDto } from '../../dto/user-status/update-user-status.dto';
import { UserStatus } from '../../entities/user-status.entity';

/**
 * Servicio para gestionar las acciones de la entidad UserStatus
 */
@Injectable()
export class UserStatusService {
  constructor(
    @InjectRepository(UserStatus)
    private userStatusRepository: Repository<UserStatus>
  ) {}

  /**
   * Metodo para crear un estado de usuario
   * @param {CreateUserStatusDto} createUserStatusDto - Datos para crear un estado de usuario
   * @returns {Promise<UserStatus>} - Retorna el estado de usuario creado
   */
  async create(createUserStatusDto: CreateUserStatusDto): Promise<UserStatus> {
    return this.userStatusRepository.save(this.userStatusRepository.create(createUserStatusDto));
  }

  /**
   * Metodo para obtener todos los estados de usuario
   * @returns {Promise<UserStatus[]>} - Retorna un array de estados de usuario
   */
  findAll(): Promise<UserStatus[]> {
    return this.userStatusRepository.find();
  }

  /**
   * Metodo para obtener un estado de usuario por id
   * @param {FindOptionsWhere<UserStatus> | FindOptionsWhere<UserStatus>[]} where - Condiciones para buscar un estado de usuario
   * @returns {Promise<UserStatus | null>} - Retorna un estado de usuario
   */
  findOne(where: FindOptionsWhere<UserStatus> | FindOptionsWhere<UserStatus>[]): Promise<UserStatus | null> {
    return this.userStatusRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varios estados de usuario
   * @param {FindOptionsWhere<UserStatus> | FindOptionsWhere<UserStatus>[]} where - Condiciones para buscar varios estados de usuario
   * @returns {Promise<UserStatus[]>} - Retorna un array de estados de usuario
   */
  find(where: FindOptionsWhere<UserStatus> | FindOptionsWhere<UserStatus>[]): Promise<UserStatus[]> {
    return this.userStatusRepository.find({ where });
  }

  /**
   * Metodo para actualizar un estado de usuario
   * @param {FindOptionsWhere<UserStatus>} where - Condiciones para actualizar un estado de usuario
   * @param {UpdateUserStatusDto} updateUserStatusDto - Datos para actualizar un estado de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizo el estado de usuario
   */
  async update(where: FindOptionsWhere<UserStatus>, updateUserStatusDto: UpdateUserStatusDto): Promise<boolean> {
    const res = await this.userStatusRepository.update(where, updateUserStatusDto);
    return res.affected > 0;
  }

  /**
   * Metodo para eliminar un estado de usuario
   * @param {FindOptionsWhere<UserStatus>} where - Condiciones para eliminar un estado de usuario
   * @returns {Promise<boolean>} - Retorna true si se elimino el estado de usuario
   */
  async remove(where: FindOptionsWhere<UserStatus>): Promise<boolean> {
    const res = await this.userStatusRepository.delete(where);
    return res.affected > 0;
  }
}
