import { BaseTable } from 'src/common/dto/base-table.dto';
import { Image } from 'src/modules/image/entities/image.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

/**
 * Clase que contiene las columnas de la tabla de imagenes de productos en la base de datos
 */
export class ProductImageTable extends BaseTable {
  @Column('int')
  productId: number;

  @Column('int')
  imageId: number;

  @Column('varchar', { nullable: true })
  description: string | null;

  @Column('int')
  position: number;

  @Column('boolean', { default: false })
  isMain: boolean;
}

/**
 * Entidad que representa la tabla de imagenes de productos en la base de datos
 */
@Entity()
export class ProductImage extends ProductImageTable {
  @ManyToOne(() => Image)
  image: Image;

  @ManyToOne(() => Product)
  product: Product;
}
