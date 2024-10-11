import { BaseTable } from 'src/common/dto/base-table.dto';
import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

/**
 * Clase que contiene las columnas de la tabla de productos de eventos en la base de datos
 */
export class EventProductTable extends BaseTable {
  @Column('int')
  eventId: number;

  @Column('int')
  productId: number;

  @Column('double')
  price: number;

  @Column('boolean', { default: false })
  required: boolean;

  @Column('text', { nullable: true })
  comment: string | null;
}

/**
 * Entidad que representa la tabla de productos de eventos en la base de datos
 */
@Entity()
export class EventProduct extends EventProductTable {
  @ManyToOne(() => Event, (event) => event.products)
  event: Event;

  @ManyToOne(() => Product)
  product: Product;
}
