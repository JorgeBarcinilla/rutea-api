import { BaseTable } from 'src/common/dto/base-table.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { EventParticipantProductStatus } from './event-participant-product-status.entity';
import { EventParticipantProduct } from './event-participant-product.entity';

/**
 * Clase que contiene las columnas de la tabla de logs de estado de productos de participantes de eventos en la base de datos
 */
export class EventParticipantProductStatusLogTable extends BaseTable {
  @Column('int')
  eventParticipantProductStatusId: number;

  @Column('int')
  eventParticipantProductId: number;

  @Column('int')
  userId: number;

  @Column('text', { nullable: true })
  comment: string | null;
}

/**
 * Entidad que representa la tabla de logs de estado de productos de participantes de eventos en la base de datos
 */
@Entity()
export class EventParticipantProductStatusLog extends EventParticipantProductStatusLogTable {
  @ManyToOne(() => EventParticipantProductStatus)
  eventParticipantProductStatus: EventParticipantProductStatus;

  @ManyToOne(() => EventParticipantProduct)
  eventParticipantProduct: EventParticipantProduct;

  @ManyToOne(() => User)
  user: User;
}
