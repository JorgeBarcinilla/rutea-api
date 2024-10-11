import { BasicTable } from 'src/common/dto/basic-table.dto';
import { Entity } from 'typeorm';

/**
 * Clase que contiene las columnas de la tabla de estado de productos de participantes de eventos en la base de datos
 */
@Entity()
export class EventParticipantProductStatus extends BasicTable {}
