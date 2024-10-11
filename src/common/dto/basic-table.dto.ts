import { Column } from 'typeorm';
import { BaseTable } from './base-table.dto';

/**
 * Basic DTO
 */
export class BasicTable extends BaseTable {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;
}
