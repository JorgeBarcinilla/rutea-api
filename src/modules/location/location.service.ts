import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateCityDto } from './dto/city/create-city.dto';
import { UpdateCityDto } from './dto/city/update-city.dto';
import { CreateCountryDto } from './dto/country/create-country.dto';
import { UpdateCountryDto } from './dto/country/update-country.dto';
import { CreateStateCountryDto } from './dto/state-country/create-state-country.dto';
import { UpdateStateCountryDto } from './dto/state-country/update-state-country.dto';
import { CreateTimezoneDto } from './dto/timezone/create-timezone.dto';
import { UpdateTimezoneDto } from './dto/timezone/update-timezone.dto';
import { City } from './entities/city.entity';
import { Country } from './entities/country.entity';
import { StateCountry } from './entities/state-country.entity';
import { Timezone } from './entities/timezone.entity';

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
    private stateCountryRepository: Repository<StateCountry>,
    @InjectRepository(Timezone)
    private timezoneRepository: Repository<Timezone>
  ) {}

  /**
   * Método para crear una ciudad
   * @param {CreateCityDto} createCityDto - Datos de la ciudad a crear
   * @returns {Promise<City>} - Ciudad creada
   */
  createCity(createCityDto: CreateCityDto): Promise<City> {
    return this.cityRepository.save(createCityDto);
  }

  /**
   * Método para obtener todas las ciudades
   * @returns {Promise<City[]>} - Lista de ciudades
   */
  findAllCity(): Promise<City[]> {
    return this.cityRepository.find();
  }

  /**
   * Método para obtener una ciudad
   * @param {FindOptionsWhere<City> | FindOptionsWhere<City>[]} where - Id de la ciudad
   * @returns {Promise<City>} - Ciudad encontrada
   */
  findOneCity(where: FindOptionsWhere<City> | FindOptionsWhere<City>[]): Promise<City> {
    return this.cityRepository.findOne({ where });
  }

  /**
   * Método para obtener varias ciudades
   * @param {FindOptionsWhere<City> | FindOptionsWhere<City>[]} where - Condiciones de búsqueda
   * @returns {Promise<City[]>} - Lista de ciudades encontradas
   */
  findCity(where: FindOptionsWhere<City> | FindOptionsWhere<City>[]): Promise<City[]> {
    return this.cityRepository.find({ where });
  }

  /**
   * Método para actualizar una ciudad
   * @param {FindOptionsWhere<City>} where - Id de la ciudad
   * @param {UpdateCityDto} updateCityDto - Datos de la ciudad a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó la ciudad
   */
  async updateCity(where: FindOptionsWhere<City>, updateCityDto: UpdateCityDto): Promise<boolean> {
    const result = await this.cityRepository.update(where, updateCityDto);
    return result.affected > 0;
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
   * Método para crear un país
   * @param {CreateCountryDto} createCountryDto - Datos del país a crear
   * @returns {Promise<Country>} - País creado
   */
  createCountry(createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countryRepository.save(createCountryDto);
  }

  /**
   * Método para obtener todos los países
   * @returns {Promise<Country[]>} - Lista de países
   */
  findAllCountry(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  /**
   * Método para obtener un país
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} where - Id del país
   * @returns {Promise<Country>} - País encontrado
   */
  findOneCountry(where: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country> {
    return this.countryRepository.findOne({ where });
  }

  /**
   * Método para obtener varios países
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} where - Condiciones de búsqueda
   * @returns {Promise<Country[]>} - Lista de países encontrados
   */
  findCountry(where: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country[]> {
    return this.countryRepository.find({ where });
  }

  /**
   * Método para actualizar un país
   * @param {FindOptionsWhere<Country>} where - Id del país
   * @param {UpdateCountryDto} updateCountryDto - Datos del país a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el país
   */
  async updateCountry(where: FindOptionsWhere<Country>, updateCountryDto: UpdateCountryDto): Promise<boolean> {
    const result = await this.countryRepository.update(where, updateCountryDto);
    return result.affected > 0;
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
   * Método para crear un estado/provincia
   * @param {CreateStateCountryDto} createStateCountryDto - Datos del estado/provincia a crear
   * @returns {Promise<StateCountry>} - Estado/provincia creado
   */
  createStateCountry(createStateCountryDto: CreateStateCountryDto): Promise<StateCountry> {
    return this.stateCountryRepository.save(createStateCountryDto);
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
    return this.stateCountryRepository.findOne({ where });
  }

  /**
   * Método para obtener varios estados/provincias
   * @param {FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]} where - Condiciones de búsqueda
   * @returns {Promise<StateCountry[]>} - Lista de estados/provincias encontrados
   */
  findStateCountry(where: FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]): Promise<StateCountry[]> {
    return this.stateCountryRepository.find({ where });
  }

  /**
   * Método para actualizar un estado/provincia
   * @param {FindOptionsWhere<StateCountry>} where - Id del estado/provincia
   * @param {UpdateStateCountryDto} updateStateCountryDto - Datos del estado/provincia a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el estado/provincia
   */
  async updateStateCountry(
    where: FindOptionsWhere<StateCountry>,
    updateStateCountryDto: UpdateStateCountryDto
  ): Promise<boolean> {
    const result = await this.stateCountryRepository.update(where, updateStateCountryDto);
    return result.affected > 0;
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

  /**
   * Método para crear una zona horaria
   * @param {CreateTimezoneDto} createTimezoneDto - Datos de la zona horaria a crear
   * @returns {Promise<Timezone>} - Zona horaria creada
   */
  createTimezone(createTimezoneDto: CreateTimezoneDto): Promise<Timezone> {
    return this.timezoneRepository.save(createTimezoneDto);
  }

  /**
   * Método para obtener todas las zonas horarias
   * @returns {Promise<Timezone[]>} - Lista de zonas horarias
   */
  findAllTimezone(): Promise<Timezone[]> {
    return this.timezoneRepository.find();
  }

  /**
   * Método para obtener una zona horaria
   * @param {FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]} where - Id de la zona horaria
   * @returns {Promise<Timezone>} - Zona horaria encontrada
   */
  findOneTimezone(where: FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]): Promise<Timezone> {
    return this.timezoneRepository.findOne({ where });
  }

  /**
   * Método para obtener varias zonas horarias
   * @param {FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]} where - Condiciones de búsqueda
   * @returns {Promise<Timezone[]>} - Lista de zonas horarias encontradas
   */
  findTimezone(where: FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]): Promise<Timezone[]> {
    return this.timezoneRepository.find({ where });
  }

  /**
   * Método para actualizar una zona horaria
   * @param {FindOptionsWhere<Timezone>} where - Id de la zona horaria
   * @param {UpdateTimezoneDto} updateTimezoneDto - Datos de la zona horaria a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó la zona horaria
   */
  async updateTimezone(where: FindOptionsWhere<Timezone>, updateTimezoneDto: UpdateTimezoneDto): Promise<boolean> {
    const result = await this.timezoneRepository.update(where, updateTimezoneDto);
    return result.affected > 0;
  }

  /**
   * Método para eliminar una zona horaria
   * @param {FindOptionsWhere<Timezone>} where - Id de la zona horaria
   * @returns {Promise<boolean>} - Retorna true si se eliminó la zona horaria
   */
  async removeTimezone(where: FindOptionsWhere<Timezone>): Promise<boolean> {
    const result = await this.timezoneRepository.delete(where);
    return result.affected > 0;
  }
}
