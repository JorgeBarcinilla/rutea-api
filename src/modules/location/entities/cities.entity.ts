import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Country } from './countries.entity';
import { StateCountry } from './states.entity';

/**
 * Entidad que representa la tabla de ciudades en la base de datos
 */
export class CityTable {
  @PrimaryColumn({ type: 'mediumint', unsigned: true })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('mediumint', { unsigned: true })
  state_id: number;

  @Column('varchar', { length: 255 })
  state_code: string;

  @Column('mediumint', { unsigned: true })
  country_id: number;

  @Column('char', { length: 2 })
  country_code: string;

  @Column('decimal', { precision: 10, scale: 8 })
  latitude: number;

  @Column('decimal', { precision: 11, scale: 8 })
  longitude: number;

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
 * Entidade que representa la tabla de ciudades en la base de datos
 */
@Entity({ name: 'cities' })
export class City extends CityTable {
  @ManyToOne(() => StateCountry, (state) => state.cities)
  @JoinColumn({ name: 'state_id' })
  stateCountry: StateCountry;

  @ManyToOne(() => Country, (country) => country.statesCountry)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
