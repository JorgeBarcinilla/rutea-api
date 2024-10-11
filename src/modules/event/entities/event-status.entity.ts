import { BasicTable } from 'src/common/dto/basic-table.dto';
import { Entity } from 'typeorm';

/**
 * Clase que representa la tabla de estados de evento en la base de datos
 */
@Entity()
export class EventStatus extends BasicTable {}
