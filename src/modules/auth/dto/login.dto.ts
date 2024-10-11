import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/modules/user/entities/user.entity';

/**
 *
 */
export class LoginDto extends PickType(User, ['email', 'password']) {}

/**
 *
 */
export class LoginResponseDto {
  token: string;
  refresh: string;
}

/**
 *
 */
export class AuthTokenPayload {
  id: number;
  email: string;
  exp?: number;
}

/**
 *
 */
export class AuthTokenPayloadValidate {
  info: AuthTokenPayloadValidateInfo;
  expiresAt?: Date;
}

/**
 *
 */
export class AuthTokenPayloadValidateInfo {
  id: number;
  email: string;
}
