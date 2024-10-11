import { BaseTable } from 'src/common/dto/base-table.dto';
import { Column, ManyToOne } from 'typeorm';
import { ImageStorage } from './image-storage.entity';

/**
 * Clase que contiene las columnas de la tabla de imagenes en la base de datos
 */
export class ImageTable extends BaseTable {
  @Column('varchar')
  url: string;

  @Column('varchar')
  key: string;

  @Column('int')
  storageId: number;
}

/**
 * Entidad que representa la tabla de imagenes en la base de datos
 */
export class Image extends ImageTable {
  @ManyToOne(() => ImageStorage)
  storage: ImageStorage;
}
