import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { UserGender } from '../../entities/user-gender.entity';

/**
 * DTO para la creación de un género de usuario
 */
export class CreateUserGenderDto implements Omit<UserGender, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
