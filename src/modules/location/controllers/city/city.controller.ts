import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { City } from '../../entities/cities.entity';
import { LocationService } from '../../location.service';

/**
 *
 */
@Controller('cities')
export class CityController {
  constructor(private readonly locationService: LocationService) {}

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
   * Endpoint para obtener una ciudad por id
   * @param {string} id - Id de la ciudad
   * @returns {Promise<City>} - Ciudad encontrada
   */
  @Get(':id')
  findOneCity(@Param('id') id: string): Promise<City> {
    return this.locationService.findOneCity({ id: +id });
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
}
