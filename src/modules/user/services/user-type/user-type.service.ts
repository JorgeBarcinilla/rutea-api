import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserTypeDto } from '../../dto/user-type/create-user-type.dto';
import { UpdateUserTypeDto } from '../../dto/user-type/update-user-type.dto';
import { UserType } from '../../entities/user-type.entity';

/**
 * Servicio para gestionar las acciones de la entidad UserType
 */
@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>
  ) {}

  /**
   * Metodo para crear un tipo de usuario
   * @param {CreateUserTypeDto} createUserTypeDto - Datos para crear un tipo de usuario
   * @returns {Promise<number>} - Retorna el id del tipo de usuario creado
   */
  async create(createUserTypeDto: CreateUserTypeDto): Promise<UserType> {
    return this.userTypeRepository.save(this.userTypeRepository.create(createUserTypeDto));
  }

  /**
   * Metodo para obtener todos los tipos de usuario
   * @returns {Promise<UserType[]>} - Retorna un array de tipos de usuario
   */
  findAll(): Promise<UserType[]> {
    return this.userTypeRepository.find();
  }

  /**
   * Metodo para obtener un tipo de usuario por id
   * @param {FindOptionsWhere<UserType> | FindOptionsWhere<UserType>[]} where - Condiciones para buscar un tipo de usuario
   * @returns {Promise<UserType | null>} - Retorna un tipo de usuario
   */
  findOne(where: FindOptionsWhere<UserType> | FindOptionsWhere<UserType>[]): Promise<UserType | null> {
    return this.userTypeRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varios tipos de usuario
   * @param {FindOptionsWhere<UserType> | FindOptionsWhere<UserType>[]} where - Condiciones para buscar varios tipos de usuario
   * @returns {Promise<UserType[]>} - Retorna un array de tipos de usuario
   */
  find(where: FindOptionsWhere<UserType> | FindOptionsWhere<UserType>[]): Promise<UserType[]> {
    return this.userTypeRepository.find({ where });
  }

  /**
   * Metodo para actualizar un tipo de usuario
   * @param {FindOptionsWhere<UserType>} where - Condiciones para actualizar un tipo de usuario
   * @param {UpdateUserTypeDto} updateUserTypeDto - Datos para actualizar un tipo de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizo el tipo de usuario
   */
  async update(where: FindOptionsWhere<UserType>, updateUserTypeDto: UpdateUserTypeDto): Promise<boolean> {
    const res = await this.userTypeRepository.update(where, updateUserTypeDto);
    return res.affected > 0;
  }

  /**
   * Metodo para eliminar un tipo de usuario
   * @param {FindOptionsWhere<UserType>} where - Condiciones para eliminar un tipo de usuario
   * @returns {Promise<boolean>} - Retorna true si se elimino el tipo de usuario
   */
  async remove(where: FindOptionsWhere<UserType>): Promise<boolean> {
    const res = await this.userTypeRepository.delete(where);
    return res.affected > 0;
  }
}
