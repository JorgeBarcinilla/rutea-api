import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { AuthTokenPayloadValidate } from '../dto/login.dto';

/**
 *
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  /**
   * Metodo para validar un usuario
   * @param {string} username - Nombre de usuario del usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Promise<AuthTokenPayloadValidate>} - Usuario
   */
  async validate(username: string, password: string): Promise<AuthTokenPayloadValidate> {
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException();
    return { info: { id: user.id, email: user.email }, expiresAt: new Date() };
  }
}
