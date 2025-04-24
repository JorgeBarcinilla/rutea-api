import { BasicTable } from 'src/common/dto/basic-table.dto';
import { Entity } from 'typeorm';

/**
 * Entidad que representa la tabla de géneros de usuario
 */
@Entity()
export class UserGender extends BasicTable {}
