import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { Event } from 'src/modules/event/entities/event.entity';
import { City } from 'src/modules/location/entities/city.entity';
import { Country } from 'src/modules/location/entities/country.entity';
import { StateCountry } from 'src/modules/location/entities/state-country.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { UserGender } from './user-gender.entity';
import { UserStatus } from './user-status.entity';
import { UserType } from './user-type.entity';
import { UserWeight } from './user-weight.entity';

/**
 * Columnas de la tabla User
 */
export class UserTable extends BaseTable {
  @Generated('uuid')
  uuid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ unique: true })
  phone: string;

  @Column({ type: 'date' })
  birhtday: Date;

  @Column('double', { nullable: true, comment: 'Height in cm' })
  height: number | null;

  @Column({ nullable: true })
  avatar: string | null;

  @Column({ nullable: true })
  address: string | null;

  @Column({ nullable: true })
  postalCode: string | null;

  @Column('int')
  genderId: number;

  @Column('int')
  countryId: number;

  @Column('int')
  stateCountryId: number;

  @Column('int')
  cityId: number;

  @Column('int', { default: 1 })
  userTypeId: number;

  @Column('int', { default: 1 })
  userStatusId: number;
}

/**
 * Entidad que representa la tabla de usuarios en la base de datos
 */
@Entity()
export class User extends UserTable {
  @ManyToOne(() => UserGender)
  gender: UserGender;

  @ManyToOne(() => Country)
  country: Country;

  @ManyToOne(() => StateCountry)
  stateCountry: StateCountry;

  @ManyToOne(() => City)
  city: City;

  @ManyToOne(() => UserType)
  userType: UserType;

  @ManyToOne(() => UserStatus)
  status: UserStatus;

  @OneToMany(() => UserWeight, (userWeight) => userWeight.user)
  weights: UserWeight[];

  @ManyToMany(() => Event, (event) => event.participants)
  @JoinTable({
    name: 'event_participant',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'eventId', referencedColumnName: 'id' }
  })
  events: Event[];

  /**
   * Metodo para encriptar la contraseña del usuario
   */
  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
