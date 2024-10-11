import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, Entity } from 'typeorm';

/**
 * Clase que contiene las columnas de la tabla AuthRefreshToken
 */
export class RefreshTokenBlacklistTable extends BaseTable {
  @Column('int')
  userId: number;

  @Column('varchar')
  token: string;

  @Column('timestamp')
  expiresAt: Date;
}

/**
 * Entidad que representa la tabla de la lista negra de tokens de refresco en la base de datos
 */
@Entity()
export class RefreshTokenBlacklist extends RefreshTokenBlacklistTable {}
