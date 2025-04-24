import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { Country } from '../../entities/countries.entity';
import { LocationService } from '../../location.service';

/**
 * Controlador para los endpoints de los países
 */
@Controller('countries')
export class CountryController {
  constructor(private readonly locationService: LocationService) {}

  /**
   * Endpoint para obtener todos los países
   * @returns {Promise<Country[]>} - Lista de países
   */
  @Get()
  findAllCountries(): Promise<Country[]> {
    return this.locationService.findAllCountries();
  }

  /**
   * Endpoint para obtener varios países
   * @param {FindOptionsWhere<Country> | FindOptionsWhere<Country>[]} query - Query params para buscar varios países
   * @returns {Promise<Country[]>} - Lista de países encontrados
   */
  @Get('find')
  findCountries(@Query() query: FindOptionsWhere<Country> | FindOptionsWhere<Country>[]): Promise<Country[]> {
    return this.locationService.findCountries(query);
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
   * Endpoint para eliminar un país
   * @param {number} id - Id del país
   * @returns {Promise<boolean>} - Retorna true si se eliminó el país
   */
  @Delete(':id')
  removeCountry(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeCountry({ id: +id });
  }
}
