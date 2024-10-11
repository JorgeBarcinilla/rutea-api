import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { EventParticipantProductStatusLog } from './event-participant-product-status-log.entity';
import { EventParticipantProductStatus } from './event-participant-product-status.entity';
import { EventParticipant } from './event-participant.entity';
import { EventProduct } from './event-product.entity';

/**
 * Clase que contiene las columnas de la tabla de productos de los participantes de eventos en la base de datos
 */
export class EventParticipantProductTable extends BaseTable {
  @Column('int')
  eventParticipantId: number;

  @Column('int')
  eventProductId: number;

  @Column('int')
  eventParticipantProductStatusId: number;

  @Column('int', { default: 1 })
  quantity: number;

  @Column('double', { default: 0 })
  price: number;

  @Column('text', { nullable: true })
  comment: string | null;

  @Column('text', { nullable: true })
  description: string | null;
}

/**
 * Entidad que representa la tabla de productos de los participantes de eventos en la base de datos
 */
@Entity()
export class EventParticipantProduct extends EventParticipantProductTable {
  @ManyToOne(() => EventParticipantProductStatus)
  eventParticipantProductStatus: EventParticipantProductStatus;

  @ManyToOne(() => EventParticipant, (eventParticipant) => eventParticipant.products)
  eventParticipant: EventParticipant;

  @ManyToOne(() => EventProduct)
  eventProduct: EventProduct;

  @OneToMany(
    () => EventParticipantProductStatusLog,
    (eventParticipantProductStatusLog) => eventParticipantProductStatusLog.eventParticipantProduct
  )
  eventParticipantProductStatusLogs: EventParticipantProductStatusLog[];
}
