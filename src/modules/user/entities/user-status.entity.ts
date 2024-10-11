import { BaseTable } from 'src/common/dto/base-table.dto';
import { Entity } from 'typeorm';

/**
 * Entidad que representa la tabla de estados de usuario en la base de datos
 */
@Entity()
export class UserStatus extends BaseTable {}
