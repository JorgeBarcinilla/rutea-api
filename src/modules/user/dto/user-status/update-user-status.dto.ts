import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateUserStatusDto } from './create-user-status.dto';

/**
 * DTO para actualizar un estado de usuario
 */
export class UpdateUserStatusDto implements Partial<CreateUserStatusDto> {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
