import { BasicTable } from 'src/common/dto/basic-table.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

/**
 * Clase que contiene las columnas de la tabla de categorias de productos en la base de datos
 */
export class ProductCategoryTable extends BasicTable {
  @Column('varchar', { nullable: true })
  color: string | null;

  @Column('int', { nullable: true })
  parentId: number | null;

  @Column('int', { nullable: true })
  creatorId: number | null;
}

/**
 * Entidad que representa la tabla de categorias de productos en la base de datos
 */
@Entity()
export class ProductCategory extends ProductCategoryTable {
  @ManyToOne(() => ProductCategory, (category) => category.children)
  parent: ProductCategory | null;

  @OneToMany(() => ProductCategory, (category) => category.parent)
  children: ProductCategory[];

  @ManyToOne(() => User)
  creator: User | null;
}
