import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { StateCountry } from './state-country.entity';
import { Timezone } from './timezone.entity';

/**
 * Clase que contiene las columnas de la tabla de paises
 */
export class CountryTable extends BaseTable {
  @PrimaryColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  iso3: string;

  @Column('varchar')
  iso2: string;

  @Column('varchar')
  numericCode: string;

  @Column('varchar')
  phoneCode: string;

  @Column('varchar')
  capital: string;

  @Column('varchar')
  currency: string;

  @Column('varchar')
  currencyName: string;

  @Column('varchar')
  currencySymbol: string;

  @Column('varchar')
  tld: string;

  @Column('varchar')
  native: string;

  @Column('varchar')
  region: string;

  @Column('varchar')
  subregion: string;

  @Column('varchar')
  nationality: string;

  @Column('varchar', { nullable: true })
  latitude: string | null;

  @Column('varchar', { nullable: true })
  longitude: string | null;

  @Column('varchar')
  emoji: string;

  @Column('varchar')
  emojiU: string;
}

/**
 * Entidad que representa la tabla de paises en la base de datos
 */
@Entity()
export class Country extends CountryTable {
  @OneToMany(() => StateCountry, (state) => state.country)
  statesCountry: StateCountry[];

  @ManyToMany(() => Timezone)
  @JoinTable({
    name: 'country_timezone',
    joinColumn: {
      name: 'countryId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'timezoneId',
      referencedColumnName: 'id'
    }
  })
  timezones: Timezone[];
}
