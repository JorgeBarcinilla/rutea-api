import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/user/create-user.dto';
import { UpdateUserDto } from './dto/user/update-user.dto';
import { User } from './entities/user.entity';

/**
 *
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  /**
   * Metodo para crear un usuario
   * @param {CreateUserDto} createUserDto - Datos para crear un usuario
   * @returns {Promise<number>} - Retorna el id del usuario creado
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(this.userRepository.create(createUserDto));
  }

  /**
   * Metodo para obtener todos los usuarios
   * @returns {Promise<User[]>} - Retorna un array de usuarios
   */
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Metodo para obtener un usuario por id
   * @param {FindOptionsWhere<User> | FindOptionsWhere<User>[]} where - Condiciones para buscar un usuario
   * @returns {Promise<User | null>} - Retorna un usuario
   */
  findOne(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User | null> {
    return this.userRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varios usuarios
   * @param {FindOptionsWhere<User> | FindOptionsWhere<User>[]} where - Condiciones para buscar varios usuarios
   * @returns {Promise<User[]>} - Retorna un array de usuarios
   */
  find(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User[]> {
    return this.userRepository.find({ where });
  }

  /**
   * Metodo para actualizar un usuario
   * @param {FindOptionsWhere<User>} where - Condiciones para actualizar un usuario
   * @param {UpdateUserDto} updateUserDto - Datos para actualizar un usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizo el usuario
   */
  async update(where: FindOptionsWhere<User>, updateUserDto: UpdateUserDto): Promise<boolean> {
    const res = await this.userRepository.update(where, updateUserDto);
    return res.affected > 0;
  }

  /**
   * Metodo para eliminar un usuario
   * @param {FindOptionsWhere<User>} where - Condiciones para eliminar un usuario
   * @returns {Promise<boolean>} - Retorna true si se elimino el usuario
   */
  async remove(where: FindOptionsWhere<User>): Promise<boolean> {
    const res = await this.userRepository.delete(where);
    return res.affected > 0;
  }
}
