import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { UserType } from '../../entities/user-type.entity';

/**
 * DTO para la creación de un tipo de usuario
 */
export class CreateUserTypeDto implements Omit<UserType, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
