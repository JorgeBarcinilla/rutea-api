import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Country } from './country.entity';

/**
 * Clase que contiene las columnas de la tabla de zonas horarias
 */
export class TimezoneTable extends BaseTable {
  @Column('varchar', { unique: true })
  zoneName: string;

  @Column('int')
  gmtOffset: number;

  @Column('varchar')
  gmtOffsetName: string;

  @Column('varchar')
  abbreviation: string;

  @Column('varchar')
  tzName: string;
}

/**
 * Entidad que representa la tabla de zonas horarias en la base de datos
 */
@Entity()
export class Timezone extends TimezoneTable {
  @ManyToMany(() => Country)
  @JoinTable({
    name: 'country_timezones',
    joinColumn: {
      name: 'timezone_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'country_id',
      referencedColumnName: 'id'
    }
  })
  countries: Country[];
}
