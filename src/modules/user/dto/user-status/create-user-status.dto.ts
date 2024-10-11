import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseTable } from 'src/common/dto/base-table.dto';
import { UserStatus } from '../../entities/user-status.entity';

/**
 * DTO para la creación de un estado de usuario
 */
export class CreateUserStatusDto implements Omit<UserStatus, keyof BaseTable> {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  description: string | null;
}
