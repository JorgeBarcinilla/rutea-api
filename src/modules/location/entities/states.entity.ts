import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { City } from './cities.entity';
import { Country } from './countries.entity';

/**
 * Clase que representa la tabla de estados(Departamentos) de los paises en la base de datos
 */
export class StateCountryTable {
  @PrimaryColumn({ type: 'mediumint', unsigned: true })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('mediumint', { unsigned: true })
  country_id: number;

  @Column('char', { length: 2 })
  country_code: string;

  @Column('varchar', { length: 255, nullable: true })
  fips_code: string | null;

  @Column('varchar', { length: 255, nullable: true })
  iso2: string | null;

  @Column('varchar', { length: 191, nullable: true })
  type: string | null;

  @Column('decimal', { precision: 10, scale: 8, nullable: true })
  latitude: number | null;

  @Column('decimal', { precision: 11, scale: 8, nullable: true })
  longitude: number | null;

  @Column('timestamp', { nullable: true })
  created_at: Date | null;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column('tinyint', { width: 1, default: 1 })
  flag: boolean;

  @Column('varchar', { length: 255, nullable: true })
  wikiDataId: string | null;
}

/**
 * Entidad que representa la tabla de estados(Departamentos) de los paises en la base de datos
 */
@Entity({ name: 'states' })
export class StateCountry extends StateCountryTable {
  @ManyToOne(() => Country, (country) => country.statesCountry)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => City, (city) => city.stateCountry)
  cities: City[];
}
