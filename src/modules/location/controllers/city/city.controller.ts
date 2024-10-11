import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { CreateCityDto } from '../../dto/city/create-city.dto';
import { UpdateCityDto } from '../../dto/city/update-city.dto';
import { CreateCountryDto } from '../../dto/country/create-country.dto';
import { UpdateCountryDto } from '../../dto/country/update-country.dto';
import { CreateStateCountryDto } from '../../dto/state-country/create-state-country.dto';
import { UpdateStateCountryDto } from '../../dto/state-country/update-state-country.dto';
import { CreateTimezoneDto } from '../../dto/timezone/create-timezone.dto';
import { UpdateTimezoneDto } from '../../dto/timezone/update-timezone.dto';
import { City } from '../../entities/city.entity';
import { Country } from '../../entities/country.entity';
import { StateCountry } from '../../entities/state-country.entity';
import { Timezone } from '../../entities/timezone.entity';
import { LocationService } from '../../location.service';

/**
 *
 */
@Controller('city')
export class CityController {
  constructor(private readonly locationService: LocationService) {}

  /**
   * Endpoint para crear una ciudad
   * @param {CreateCityDto} createCityDto - Datos de la ciudad a crear
   * @returns {Promise<City>} - Ciudad creada
   */
  @Post()
  createCity(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.locationService.createCity(createCityDto);
  }

  /**
   * Endpoint para obtener todas las ciudades
   * @returns {Promise<City[]>} - Lista de ciudades
   */
  @Get()
  findAllCities(): Promise<City[]> {
    return this.locationService.findAllCity();
  }

  /**
   * Endpoint para obtener una ciudad por id
   * @param {string} id - Id de la ciudad
   * @returns {Promise<City>} - Ciudad encontrada
   */
  @Get(':id')
  findOneCity(@Param('id') id: string): Promise<City> {
    return this.locationService.findOneCity({ id: +id });
  }

  /**
   * Endpoint para obtener varias ciudades
   * @param {FindOptionsWhere<City> | FindOptionsWhere<City>[]} query - Query params para buscar varias ciudades
   * @returns {Promise<City[]>} - Lista de ciudades encontradas
   */
  @Get('find')
  findCities(@Query() query: FindOptionsWhere<City> | FindOptionsWhere<City>[]): Promise<City[]> {
    return this.locationService.findCity(query);
  }

  /**
   * Endpoint para actualizar una ciudad
   * @param {number} id - Id de la ciudad
   * @param {UpdateCityDto} updateCityDto - Datos de la ciudad a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó la ciudad
   */
  @Patch(':id')
  updateCity(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto): Promise<boolean> {
    return this.locationService.updateCity({ id: +id }, updateCityDto);
  }

  /**
   * Endpoint para eliminar una ciudad
   * @param {number} id - Id de la ciudad
   * @returns {Promise<boolean>} - Retorna true si se eliminó la ciudad
   */
  @Delete(':id')
  removeCity(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeCity({ id: +id });
  }

  /**
   * Endpoint para crear un país
   * @param {CreateCountryDto} createCountryDto - Datos del país a crear
   * @returns {Promise<Country>} - País creado
   */
  @Post()
  createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.locationService.createCountry(createCountryDto);
  }

  /**
   * Endpoint para obtener todos los países
   * @returns {Promise<Country[]>} - Lista de países
   */
  @Get()
  findAllCountries(): Promise<Country[]> {
    return this.locationService.findAllCountry();
  }

  /**
   * Endpoint para obtener un país por id
   * @param {string} id - Id del país
   * @returns {Promise<Country>} - País encontrado
   */
  @Get(':id')
  findOneCountry(@Param('id') id: string): Promise<Country> {
    return this.locationService.findOneCountry({ id: +id });
  }

  /**
   * Endpoint para obtener varios países
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} query - Query params para buscar varios países
   * @returns {Promise<Country[]>} - Lista de países encontrados
   */
  @Get('find')
  findCountries(@Query() query: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country[]> {
    return this.locationService.findCountry(query);
  }

  /**
   * Endpoint para actualizar un país
   * @param {number} id - Id del país
   * @param {UpdateCountryDto} updateCountryDto - Datos del país a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el país
   */
  @Patch(':id')
  updateCountry(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto): Promise<boolean> {
    return this.locationService.updateCountry({ id: +id }, updateCountryDto);
  }

  /**
   * Endpoint para eliminar un país
   * @param {number} id - Id del país
   * @returns {Promise<boolean>} - Retorna true si se eliminó el país
   */
  @Delete(':id')
  removeCountry(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeCountry({ id: +id });
  }

  /**
   * Endpoint para crear un estado/país
   * @param {CreateStateCountryDto} createStateCountryDto - Datos del estado/país a crear
   * @returns {Promise<StateCountry>} - Estado/país creado
   */
  @Post()
  createStateCountry(@Body() createStateCountryDto: CreateStateCountryDto): Promise<StateCountry> {
    return this.locationService.createStateCountry(createStateCountryDto);
  }

  /**
   * Endpoint para obtener todos los estados/países
   * @returns {Promise<StateCountry[]>} - Lista de estados/países
   */
  @Get()
  findAllStateCountries(): Promise<StateCountry[]> {
    return this.locationService.findAllStateCountry();
  }

  /**
   * Endpoint para obtener un estado/país por id
   * @param {string} id - Id del estado/país
   * @returns {Promise<StateCountry>} - Estado/país encontrado
   */
  @Get(':id')
  findOneStateCountry(@Param('id') id: string): Promise<StateCountry> {
    return this.locationService.findOneStateCountry({ id: +id });
  }

  /**
   * Endpoint para obtener varios estados/países
   * @param {FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]} query - Query params para buscar varios estados/países
   * @returns {Promise<StateCountry[]>} - Lista de estados/países encontrados
   */
  @Get('find')
  findStateCountries(
    @Query() query: FindOptionsWhere<StateCountry> | FindOptionsWhere<StateCountry>[]
  ): Promise<StateCountry[]> {
    return this.locationService.findStateCountry(query);
  }

  /**
   * Endpoint para actualizar un estado/país
   * @param {number} id - Id del estado/país
   * @param {UpdateStateCountryDto} updateStateCountryDto - Datos del estado/país a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó el estado/país
   */
  @Patch(':id')
  updateStateCountry(@Param('id') id: string, @Body() updateStateCountryDto: UpdateStateCountryDto): Promise<boolean> {
    return this.locationService.updateStateCountry({ id: +id }, updateStateCountryDto);
  }

  /**
   * Endpoint para eliminar un estado/país
   * @param {number} id - Id del estado/país
   * @returns {Promise<boolean>} - Retorna true si se eliminó el estado/país
   */
  @Delete(':id')
  removeStateCountry(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeStateCountry({ id: +id });
  }

  /**
   * Endpoint para crear una zona horaria
   * @param {CreateTimezoneDto} createTimezoneDto - Datos de la zona horaria a crear
   * @returns {Promise<Timezone>} - Zona horaria creada
   */
  @Post()
  createTimezone(@Body() createTimezoneDto: CreateTimezoneDto): Promise<Timezone> {
    return this.locationService.createTimezone(createTimezoneDto);
  }

  /**
   * Endpoint para obtener todas las zonas horarias
   * @returns {Promise<Timezone[]>} - Lista de zonas horarias
   */
  @Get()
  findAllTimezones(): Promise<Timezone[]> {
    return this.locationService.findAllTimezone();
  }

  /**
   * Endpoint para obtener una zona horaria por id
   * @param {string} id - Id de la zona horaria
   * @returns {Promise<Timezone>} - Zona horaria encontrada
   */
  @Get(':id')
  findOneTimezone(@Param('id') id: string): Promise<Timezone> {
    return this.locationService.findOneTimezone({ id: +id });
  }

  /**
   * Endpoint para obtener varias zonas horarias
   * @param {FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]} query - Query params para buscar varias zonas horarias
   * @returns {Promise<Timezone[]>} - Lista de zonas horarias encontradas
   */
  @Get('find')
  findTimezones(@Query() query: FindOptionsWhere<Timezone> | FindOptionsWhere<Timezone>[]): Promise<Timezone[]> {
    return this.locationService.findTimezone(query);
  }

  /**
   * Endpoint para actualizar una zona horaria
   * @param {number} id - Id de la zona horaria
   * @param {UpdateTimezoneDto} updateTimezoneDto - Datos de la zona horaria a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizó la zona horaria
   */
  @Patch(':id')
  updateTimezone(@Param('id') id: string, @Body() updateTimezoneDto: UpdateTimezoneDto): Promise<boolean> {
    return this.locationService.updateTimezone({ id: +id }, updateTimezoneDto);
  }

  /**
   * Endpoint para eliminar una zona horaria
   * @param {number} id - Id de la zona horaria
   * @returns {Promise<boolean>} - Retorna true si se eliminó la zona horaria
   */
  @Delete(':id')
  removeTimezone(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeTimezone({ id: +id });
  }
}
