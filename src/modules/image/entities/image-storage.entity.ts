import { BasicTable } from 'src/common/dto/basic-table.dto';
import { Column, OneToMany } from 'typeorm';
import { Image } from './image.entity';

/**
 * Clase que contiene las columnas de la tabla del servicio de almacenamiento de imagenes en la base de datos
 */
export class ImageStorageTable extends BasicTable {
  @Column('varchar')
  domain: string;

  @Column('varchar')
  accessKey: string;

  @Column('varchar')
  secretKey: string;

  @Column('varchar')
  bucket: string;

  @Column('varchar')
  endpoint: string;

  @Column('varchar', { nullable: true })
  region: string | null;
}

/**
 * Entidad que representa la tabla del servicio de almacenamiento de imagenes en la base de datos
 */
export class ImageStorage extends ImageStorageTable {
  @OneToMany(() => Image, (image) => image.storage)
  images: Image[];
}
