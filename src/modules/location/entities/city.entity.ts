import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { StateCountry } from './state-country.entity';

/**
 *
 */
export class CityTable extends BaseTable {
  @PrimaryColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  stateCountryId: number;

  @Column('varchar', { nullable: true })
  latitude: string | null;

  @Column('varchar', { nullable: true })
  longitude: string | null;

  @Column('varchar', { nullable: true })
  wikiDataId: string | null;
}

/**
 * Entidade que representa la tabla de ciudades en la base de datos
 */
@Entity()
export class City extends CityTable {
  @ManyToOne(() => StateCountry, (state) => state.cities)
  stateCountry: StateCountry;
}
