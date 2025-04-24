import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { StateCountry } from '../../entities/states.entity';
import { LocationService } from '../../location.service';

/**
 * Controlador para los endpoints de los países
 */
@Controller('states')
export class StateCountryController {
  constructor(private readonly locationService: LocationService) {}

  /**
   * Endpoint para obtener varios estados/países
   * @param {FindOptionsWhere<StateCountry>} query - Query params para buscar varios estados/países
   * @returns {Promise<StateCountry[]>} - Lista de estados/países encontrados
   */
  @Get('find')
  findStateCountries(@Query() query: FindOptionsWhere<StateCountry>): Promise<StateCountry[]> {
    return this.locationService.findStateCountry(query);
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
   * Endpoint para eliminar un estado/país
   * @param {number} id - Id del estado/país
   * @returns {Promise<boolean>} - Retorna true si se eliminó el estado/país
   */
  @Delete(':id')
  removeStateCountry(@Param('id') id: string): Promise<boolean> {
    return this.locationService.removeStateCountry({ id: +id });
  }
}
