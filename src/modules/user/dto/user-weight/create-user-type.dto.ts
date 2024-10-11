import { IsInt, IsNumber } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { UserWeightTable } from '../../entities/user-weight.entity';

/**
 * DTO para la creación de un peso de usuario
 */
export class CreateUserWeightDto implements Omit<UserWeightTable, keyof BaseTable> {
  @IsInt()
  userId: number;

  @IsNumber()
  weight: number;
}
