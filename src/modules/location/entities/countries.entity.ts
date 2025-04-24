import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { StateCountry } from './states.entity';

/**
 * Clase que contiene las columnas de la tabla de países.
 */
export class CountryTable {
  @PrimaryColumn({ type: 'mediumint', unsigned: true })
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('char', { length: 3, nullable: true })
  iso3: string | null;

  @Column('char', { length: 3, nullable: true })
  numeric_code: string | null;

  @Column('char', { length: 2, nullable: true })
  iso2: string | null;

  @Column('varchar', { length: 255, nullable: true })
  phonecode: string | null;

  @Column('varchar', { length: 255, nullable: true })
  capital: string | null;

  @Column('varchar', { length: 255, nullable: true })
  currency: string | null;

  @Column('varchar', { length: 255, nullable: true })
  currency_name: string | null;

  @Column('varchar', { length: 255, nullable: true })
  currency_symbol: string | null;

  @Column('varchar', { length: 255, nullable: true })
  tld: string | null;

  @Column('varchar', { length: 255, nullable: true })
  native: string | null;

  @Column('varchar', { length: 255, nullable: true })
  region: string | null;

  @Column('mediumint', { unsigned: true, nullable: true })
  region_id: number | null;

  @Column('varchar', { length: 255, nullable: true })
  subregion: string | null;

  @Column('mediumint', { unsigned: true, nullable: true })
  subregion_id: number | null;

  @Column('varchar', { length: 255, nullable: true })
  nationality: string | null;

  @Column('text', { nullable: true })
  timezones: string | null;

  @Column('text', { nullable: true })
  translations: string | null;

  @Column('decimal', { precision: 10, scale: 8, nullable: true })
  latitude: number | null;

  @Column('decimal', { precision: 11, scale: 8, nullable: true })
  longitude: number | null;

  @Column('varchar', { length: 191, nullable: true })
  emoji: string | null;

  @Column('varchar', { length: 191, nullable: true })
  emojiU: string | null;

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
 * Entidad que representa la tabla de países en la base de datos.
 */
@Entity({ name: 'countries' })
export class Country extends CountryTable {
  @OneToMany(() => StateCountry, (state) => state.country)
  statesCountry: StateCountry[];
}
