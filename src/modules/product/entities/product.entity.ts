import { BaseTable } from 'src/common/dto/base-table.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductCategory } from './product-category.entity';
import { ProductImage } from './product-image.entity';

/**
 * Clase que contiene las columnas de la tabla de productos en la base de datos
 */
export class ProductTable extends BaseTable {
  @Column('varchar')
  name: string;

  @Column('text', { nullable: true })
  description: string | null;

  @Column('double', { default: 0 })
  price: number;

  @Column('int', { nullable: true })
  stock: number | null;

  @Column('varchar', { nullable: true })
  barcode: string | null;

  @Column('int')
  categoryId: number;

  @Column('int')
  sellerId: number;
}

/**
 * Entidad que representa la tabla de productos en la base de datos
 */
@Entity()
export class Product extends ProductTable {
  @ManyToOne(() => ProductCategory)
  category: ProductCategory;

  @ManyToOne(() => User)
  seller: User;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];
}
