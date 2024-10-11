import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateUserTypeDto } from './create-user-type.dto';

/**
 * DTO para actualizar un tipo de usuario
 */
export class UpdateUserTypeDto implements Partial<CreateUserTypeDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
