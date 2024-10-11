import { IsInt, IsNumber, IsOptional } from 'class-validator';
import { CreateUserWeightDto } from './create-user-type.dto';

/**
 *
 */
export class UpdateUserWeightDto implements Partial<CreateUserWeightDto> {
  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;
}
