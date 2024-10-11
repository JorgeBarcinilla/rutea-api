import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { BaseQueryParameters } from 'src/common/dto/base-request.dto';
import { UserTable } from '../../entities/user.entity';

/**
 * DTO con las propiedades que se pueden enviar para hacer una consulta de usuarios
 */
export class UserQueryParamsRequestDto
  extends BaseQueryParameters
  implements Partial<Omit<UserTable, 'avatar' | 'password'>>
{
  @IsOptional()
  @IsString()
  uuid?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsDate()
  birhtday?: Date;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsInt()
  genderId?: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  stateId?: number;

  @IsOptional()
  @IsInt()
  cityId?: number;

  @IsOptional()
  @IsInt()
  userTypeId?: number;

  @IsOptional()
  @IsInt()
  userStatusId?: number;
}
