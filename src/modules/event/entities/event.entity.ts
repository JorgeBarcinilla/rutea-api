import { BaseTable } from 'src/common/dto/base-table.dto';
import { City } from 'src/modules/location/entities/cities.entity';
import { Country } from 'src/modules/location/entities/countries.entity';
import { StateCountry } from 'src/modules/location/entities/states.entity';
import { UserGender } from 'src/modules/user/entities/user-gender.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { EventParticipant } from './event-participant.entity';
import { EventProduct } from './event-product.entity';
import { EventStatus } from './event-status.entity';
import { EventType } from './event-type.entity';

/**
 * Clase que representa la tabla de eventos en la base de datos
 */
export class EventTable extends BaseTable {
  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @Column('datetime')
  startDate: Date;

  @Column('datetime', { nullable: true })
  endDate: Date | null;

  @Column('bool', { default: false })
  published: boolean;

  @Column('double', { nullable: true })
  latitude: number | null;

  @Column('double', { nullable: true })
  longitude: number | null;

  @Column({ nullable: true })
  address: string | null;

  @Column('double', { nullable: true })
  price: number | null;

  @Column('int', { nullable: true })
  maxParticipants: number | null;

  @Column('int', { nullable: true })
  minParticipants: number | null;

  @Column('int', { nullable: true })
  maxAge: number | null;

  @Column('int', { nullable: true })
  minAge: number | null;

  @Column({ nullable: true })
  image: string | null;

  @Column('mediumint', { nullable: true, unsigned: true })
  cityId: number | null;

  @Column('mediumint', { nullable: true, unsigned: true })
  stateCountryId: number | null;

  @Column('mediumint', { nullable: true, unsigned: true })
  countryId: number | null;

  @Column('int')
  eventTypeId: number;

  @Column('int')
  organizerId: number;

  @Column('int')
  eventStatusId: number;
}

/**
 * Entidad que representa la tabla de eventos
 */
@Entity()
export class Event extends EventTable {
  @ManyToOne(() => City)
  city: City;

  @ManyToOne(() => StateCountry)
  stateCountry: StateCountry;

  @ManyToOne(() => Country)
  country: Country;

  @ManyToOne(() => EventType)
  eventType: EventType;

  @ManyToOne(() => User)
  organizer: User;

  @ManyToOne(() => EventStatus)
  eventStatus: EventStatus;

  @ManyToMany(() => UserGender)
  @JoinTable({
    name: 'event_gender',
    joinColumn: { name: 'eventId', referencedColumnName: 'id' },
    inverseJoinColumn: {
      name: 'genderId',
      referencedColumnName: 'id'
    }
  })
  genders: UserGender[];

  @OneToMany(() => EventParticipant, (user) => user.event)
  participants: EventParticipant[];

  @OneToMany(() => EventProduct, (product) => product.event)
  products: EventProduct[];
}
