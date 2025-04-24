import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { City } from './entities/cities.entity';
import { Country } from './entities/countries.entity';
import { StateCountry } from './entities/states.entity';

/**
 *
 */
@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
    @InjectRepository(StateCountry)
    private stateCountryRepository: Repository<StateCountry>
  ) {}

  /**
   * Método para obtener todas las ciudades
   * @returns {Promise<City[]>} - Lista de ciudades
   */
  findAllCity(): Promise<City[]> {
    return this.cityRepository.find({ relations: { stateCountry: { country: true } } });
  }

  /**
   * Método para obtener una ciudad
   * @param {FindOptionsWhere<City> | FindOptionsWhere<City>[]} where - Id de la ciudad
   * @returns {Promise<City>} - Ciudad encontrada
   */
  findOneCity(where: FindOptionsWhere<City> | FindOptionsWhere<City>[]): Promise<City> {
    return this.cityRepository.findOne({ where, relations: { stateCountry: { country: true } } });
  }

  /**
   * Método para obtener varias ciudades
   * @param {FindOptionsWhere<City> | FindOptionsWhere<City>[]} where - Condiciones de búsqueda
   * @returns {Promise<City[]>} - Lista de ciudades encontradas
   */
  findCity(where: FindOptionsWhere<City> | FindOptionsWhere<City>[]): Promise<City[]> {
    return this.cityRepository.find({ where, relations: { stateCountry: { country: true } } });
  }

  /**
   * Método para eliminar una ciudad
   * @param {FindOptionsWhere<City>} where - Id de la ciudad
   * @returns {Promise<boolean>} - Retorna true si se eliminó la ciudad
   */
  async removeCity(where: FindOptionsWhere<City>): Promise<boolean> {
    const result = await this.cityRepository.delete(where);
    return result.affected > 0;
  }

  /**
   * Método para obtener todos los países
   * @returns {Promise<Country[]>} - Lista de países
   */
  findAllCountries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  /**
   * Método para obtener un país
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} where - Id del país
   * @returns {Promise<Country>} - País encontrado
   */
  findOneCountry(where: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country> {
    return this.countryRepository.findOne({ where, relations: { statesCountry: true } });
  }

  /**
   * Método para obtener varios países
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} where - Condiciones de búsqueda
   * @returns {Promise<Country[]>} - Lista de países encontrados
   */
  findCountries(where: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country[]> {
    return this.countryRepository.find({ where, relations: { statesCountry: true } });
  }

  /**
   * Método para eliminar un país
   * @param {FindOptionsWhere<Country>} where - Id del país
   * @returns {Promise<boolean>} - Retorna true si se eliminó el país
   */
  async removeCountry(where: FindOptionsWhere<Country>): Promise<boolean> {
    const result = await this.countryRepository.delete(where);
    return result.affected > 0;
  }

  /**
   * Método para obtener todos los estados/provincias
   * @returns {Promise<StateCountry[]>} - Lista de estados/provincias
   */
  findAllStateCountry(): Promise<StateCountry[]> {
    return this.stateCountryRepository.find();
  }

  /**
   * Método para obtener un estado/provincia
   * @param {FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]} where - Id del estado/provincia
   * @returns {Promise<StateCountry>} - Estado/provincia encontrado
   */
  findOneStateCountry(where: FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]): Promise<StateCountry> {
    return this.stateCountryRepository.findOne({ where, relations: { country: true, cities: true } });
  }

  /**
   * Método para obtener varios estados/provincias
   * @param {FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]} where - Condiciones de búsqueda
   * @returns {Promise<StateCountry[]>} - Lista de estados/provincias encontrados
   */
  findStateCountry(where: FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]): Promise<StateCountry[]> {
    return this.stateCountryRepository.find({ where, relations: { country: true, cities: true } });
  }

  /**
   * Método para eliminar un estado/provincia
   * @param {FindOptionsWhere<StateCountry>} where - Id del estado/provincia
   * @returns {Promise<boolean>} - Retorna true si se eliminó el estado/provincia
   */
  async removeStateCountry(where: FindOptionsWhere<StateCountry>): Promise<boolean> {
    const result = await this.stateCountryRepository.delete(where);
    return result.affected > 0;
  }
}
