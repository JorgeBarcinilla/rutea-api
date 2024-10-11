import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';

/**
 *
 */
export class StateCountryTable extends BaseTable {
  @PrimaryColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  countryId: number;

  @Column('varchar')
  stateCode: string;

  @Column('varchar', { nullable: true })
  latitude: string | null;

  @Column('varchar', { nullable: true })
  longitude: string | null;
}

/**
 * Entidad que representa la tabla de estados(Departamentos) de los paises en la base de datos
 */
@Entity()
export class StateCountry extends StateCountryTable {
  @ManyToOne(() => Country, (country) => country.statesCountry)
  country: Country;

  @OneToMany(() => City, (city) => city.stateCountry)
  cities: City[];
}
