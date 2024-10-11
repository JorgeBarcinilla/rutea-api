import { BaseTable } from 'src/common/dto/base-table.dto';
import { Entity } from 'typeorm';

/**
 * Entidad que representa la tabla de géneros de usuario
 */
@Entity()
export class UserGender extends BaseTable {}
