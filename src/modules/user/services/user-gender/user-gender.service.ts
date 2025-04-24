import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserGenderDto } from '../../dto/user-gender/create-user-gender.dto';
import { UpdateUserGenderDto } from '../../dto/user-gender/update-user-gender.dto';
import { UserGender } from '../../entities/user-gender.entity';

/**
 * Servicio para gestionar las acciones de la entidad UserGender
 */
@Injectable()
export class UserGenderService {
  constructor(
    @InjectRepository(UserGender)
    private userGenderRepository: Repository<UserGender>
  ) {}

  /**
   * Metodo para crear un género de usuario
   * @param {CreateUserGenderDto} createUserGenderDto - Datos para crear un género de usuario
   * @returns {Promise<UserGender>} - Retorna el género de usuario creado
   */
  async create(createUserGenderDto: CreateUserGenderDto): Promise<UserGender> {
    return this.userGenderRepository.save(this.userGenderRepository.create(createUserGenderDto));
  }

  /**
   * Metodo para obtener todos los géneros de usuario
   * @returns {Promise<UserGender[]>} - Retorna un array de géneros de usuario
   */
  findAll(): Promise<UserGender[]> {
    return this.userGenderRepository.find();
  }

  /**
   * Metodo para obtener un género de usuario por id
   * @param {FindOptionsWhere<UserGender> | FindOptionsWhere<UserGender>[]} where - Condiciones para buscar un género de usuario
   * @returns {Promise<UserGender | null>} - Retorna un género de usuario
   */
  findOne(where: FindOptionsWhere<UserGender> | FindOptionsWhere<UserGender>[]): Promise<UserGender | null> {
    return this.userGenderRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varios géneros de usuario
   * @param {FindOptionsWhere<UserGender> | FindOptionsWhere<UserGender>[]} where - Condiciones para buscar varios géneros de usuario
   * @returns {Promise<UserGender[]>} - Retorna un array de géneros de usuario
   */
  find(where: FindOptionsWhere<UserGender> | FindOptionsWhere<UserGender>[]): Promise<UserGender[]> {
    return this.userGenderRepository.find({ where });
  }

  /**
   * Metodo para actualizar un género de usuario
   * @param {FindOptionsWhere<UserGender>} where - Condiciones para actualizar un género de usuario
   * @param {UpdateUserGenderDto} updateUserGenderDto - Datos para actualizar un género de usuario
   * @returns {Promise<boolean>} - Retorna true si se actualizo el género de usuario
   */
  async update(where: FindOptionsWhere<UserGender>, updateUserGenderDto: UpdateUserGenderDto): Promise<boolean> {
    const res = await this.userGenderRepository.update(where, updateUserGenderDto);
    return res.affected > 0;
  }

  /**
   * Metodo para eliminar un género de usuario
   * @param {FindOptionsWhere<UserGender>} where - Condiciones para eliminar un género de usuario
   * @returns {Promise<boolean>} - Retorna true si se elimino el género de usuario
   */
  async remove(where: FindOptionsWhere<UserGender>): Promise<boolean> {
    const res = await this.userGenderRepository.delete(where);
    return res.affected > 0;
  }
}
