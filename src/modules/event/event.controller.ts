import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateEventDto } from './dto/event/create-event.dto';
import { EventQueryParamsRequestDto } from './dto/event/event-request.dto';
import { UpdateEventDto } from './dto/event/update-event.dto';
import { Event } from './entities/event.entity';
import { EventService } from './event.service';

/**
 * Controlador de eventos
 */
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  /**
   * Endpoint para crear un evento
   * @param {CreateEventDto} createEventDto - Datos del evento a crear
   * @returns {Promise<Event>} - Evento creado
   */
  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  /**
   * Endpoint para obtener todos los eventos
   * @returns {Promise<Event[]>} - Lista de eventos
   */
  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  /**
   * Endpoint para obtener un evento por id
   * @param {string} id - Id del evento
   * @returns {Promise<Event>} - Evento encontrado
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Event> {
    return this.eventService.findOne({ id: +id });
  }

  /**
   * Endpoint para obtener varios eventos
   * @param {EventQueryParamsRequestDto} query - Query params para buscar varios eventos
   * @returns {Promise<Event[]>} - Lista de eventos encontrados
   */
  @Get('find')
  find(@Query() query: EventQueryParamsRequestDto): Promise<Event[]> {
    return this.eventService.find(query);
  }

  /**
   * Endpoint para actualizar un evento
   * @param {number} id - Id del evento
   * @param {UpdateEventDto} updateEventDto - Datos del evento a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizo el evento
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto): Promise<boolean> {
    return this.eventService.update({ id: +id }, updateEventDto);
  }

  /**
   * Endpoint para eliminar un evento
   * @param {number} id - Id del evento
   * @returns {Promise<boolean>} - Retorna true si se elimino el evento
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.eventService.remove({ id: +id });
  }
}
