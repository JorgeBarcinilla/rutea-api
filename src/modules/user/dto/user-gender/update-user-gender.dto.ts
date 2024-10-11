import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateUserGenderDto } from './create-user-gender.dto';

/**
 * DTO para actualizar un género de usuario
 */
export class UpdateUserGenderDto implements Partial<CreateUserGenderDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
