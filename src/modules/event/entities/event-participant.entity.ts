import { BaseTable } from 'src/common/dto/base-table.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, Generated, ManyToOne, OneToMany } from 'typeorm';
import { EventParticipantProduct } from './event-participant-product.entity';
import { EventParticipantStatus } from './event-participant-status.entity';
import { Event } from './event.entity';

/**
 *
 */
export class EventParticipantTable extends BaseTable {
  @Generated('uuid')
  uuid: string;

  @Column('int')
  eventId: number;

  @Column('int')
  userId: number;

  @Column('int')
  eventParticipantStatusId: number;

  @Column('int', { nullable: true })
  participantNumber: number | null;

  @Column('text', { nullable: true })
  comment: string | null;

  @Column('datetime', { nullable: true })
  startDate: Date | null;

  @Column('datetime', { nullable: true })
  endDate: Date | null;

  @Column('bigint', { nullable: true, comment: 'Time in milliseconds' })
  time: number | null;

  @Column('double', { nullable: true, comment: 'Distance in meters' })
  distance: number | null;

  @Column('double', { nullable: true, comment: 'Weight in Kg' })
  weight: number | null;

  @Column('double', { nullable: true, comment: 'Height in cm' })
  height: number | null;
}

/**
 * Entidad que representa la tabla de participantes de eventos en la base de datos
 */
@Entity()
export class EventParticipant extends EventParticipantTable {
  @ManyToOne(() => Event, (event) => event.participants)
  event: Event;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => EventParticipantStatus)
  status: EventParticipantStatus;

  @OneToMany(() => EventParticipantProduct, (product) => product.eventParticipant)
  products: EventParticipantProduct[];
}
