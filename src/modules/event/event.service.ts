import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateEventDto } from './dto/event/create-event.dto';
import { UpdateEventDto } from './dto/event/update-event.dto';
import { Event } from './entities/event.entity';

/**
 *
 */
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  /**
   * Metodo para crear un evento
   * @param {CreateEventDto} createEventDto - Datos del evento a crear
   * @returns {Promise<Event>} - Evento creado
   */
  create(createEventDto: CreateEventDto): Promise<Event> {
    return this.eventRepository.save(createEventDto);
  }

  /**
   * Metodo para obtener todos los eventos
   * @returns {Promise<Event[]>} - Lista de eventos
   */
  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  /**
   * Metodo para obtener un evento por id
   * @param {FindOptionsWhere<Event> | FindOptionsWhere<Event>[]} where - Condiciones de busqueda
   * @returns {Promise<Event>} - Evento encontrado
   */
  findOne(where: FindOptionsWhere<Event> | FindOptionsWhere<Event>[]): Promise<Event> {
    return this.eventRepository.findOne({ where });
  }

  /**
   * Metodo para obtener varios eventos
   * @param {FindOptionsWhere<Event> | FindOptionsWhere<Event>[]} where - Condiciones de busqueda
   * @returns {Promise<Event[]>} - Lista de eventos encontrados
   */
  find(where: FindOptionsWhere<Event> | FindOptionsWhere<Event>[]): Promise<Event[]> {
    return this.eventRepository.find({ where });
  }

  /**
   * Metodo para actualizar un evento
   * @param {FindOptionsWhere<Event>} where - Condiciones de busqueda
   * @param {UpdateEventDto} updateEventDto - Datos del evento a actualizar
   * @returns {Promise<boolean>} - Retorna true si se actualizo el evento
   */
  async update(where: FindOptionsWhere<Event>, updateEventDto: UpdateEventDto): Promise<boolean> {
    const result = await this.eventRepository.update(where, updateEventDto);
    return result.affected > 0;
  }

  /**
   * Metodo para eliminar un evento
   * @param {FindOptionsWhere<Event>} where - Condiciones de busqueda
   * @returns {Promise<boolean>} - Retorna true si se elimino el evento
   */
  async remove(where: FindOptionsWhere<Event>): Promise<boolean> {
    const res = await this.eventRepository.delete(where);
    return res.affected > 0;
  }
}
