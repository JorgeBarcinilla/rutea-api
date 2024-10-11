import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

/**
 * Clase que contiene las columnas de la tabla de pesos de usuarios en la base de datos
 */
export class UserWeightTable extends BaseTable {
  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'float', comment: 'Weight in Kg' })
  weight: number;
}

/**
 * Entidad que representa la tabla de pesos de usuarios en la base de datos
 */
@Entity()
export class UserWeight extends UserWeightTable {
  @ManyToOne(() => User, (user) => user.weights)
  user: User;
}
