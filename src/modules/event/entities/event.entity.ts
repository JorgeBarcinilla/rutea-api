import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MinDate
} from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { City } from 'src/modules/location/entities/city.entity';
import { Country } from 'src/modules/location/entities/country.entity';
import { StateCountry } from 'src/modules/location/entities/state-country.entity';
import { UserGender } from 'src/modules/user/entities/user-gender.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { EventParticipant } from './event-participant.entity';
import { EventProduct } from './event-product.entity';
import { EventStatus } from './event-status.entity';
import { EventType } from './event-type.entity';

/**
 *
 */
export class EventTable extends BaseTable {
  @IsNotEmpty()
  @IsString()
  @Column('varchar')
  name: string;

  @IsNotEmpty()
  @IsString()
  @Column('text')
  description: string;

  @IsDate()
  @MinDate(new Date())
  @Column('datetime')
  startDate: Date;

  @IsOptional()
  @IsDate()
  @MinDate(new Date())
  @Column('datetime', { nullable: true })
  endDate: Date | null;

  @IsBoolean()
  @Column('bool', { default: false })
  published: boolean;

  @IsOptional()
  @IsDecimal()
  @Column('double', { nullable: true })
  latitude: number | null;

  @IsOptional()
  @IsDecimal()
  @Column('double', { nullable: true })
  longitude: number | null;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  address: string | null;

  @IsOptional()
  @IsNumber()
  @Column('double', { nullable: true })
  price: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  maxParticipants: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  minParticipants: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  maxAge: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  minAge: number | null;

  @IsOptional()
  @IsUrl()
  @Column({ nullable: true })
  image: string | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  cityId: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  stateCountryId: number | null;

  @IsOptional()
  @IsInt()
  @Column('int', { nullable: true })
  countryId: number | null;

  @IsOptional()
  @IsInt()
  @Column('int')
  eventTypeId: number;

  @IsOptional()
  @IsInt()
  @Column('int')
  organizerId: number;

  @IsOptional()
  @IsInt()
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
