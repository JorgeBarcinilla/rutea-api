import { BaseTable } from 'src/common/dto/base-table.dto';
import { Entity } from 'typeorm';

/**
 * Entidad que representa la tabla de tipos de usuario en la base de datos
 */
@Entity()
export class UserType extends BaseTable {}
