import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/user/create-user.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthTokenPayload, AuthTokenPayloadValidateInfo, LoginResponseDto } from './dto/login.dto';
import { RefreshTokenBlacklist } from './entities/refresh-token-blacklist.entity';

/**
 *
 */
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(RefreshTokenBlacklist)
    private authRefreshTokenRepository: Repository<RefreshTokenBlacklist>
  ) {}

  /**
   * Metodo para realizar el inicio de sesión
   * @param {AuthTokenPayloadValidateInfo} userInfo - Datos del usuario
   * @returns {Promise<LoginResponseDto>} - Datos y token del usuario
   */
  async login(userInfo: AuthTokenPayloadValidateInfo): Promise<LoginResponseDto> {
    return await this.generateTokenPair(userInfo);
  }

  /**
   * Metodo para registrar un usuario
   * @param {CreateUserDto} createUser - Datos del usuario a registrar
   * @returns {Promise<number>} - Id del usuario
   */
  async register(createUser: CreateUserDto): Promise<LoginResponseDto> {
    const user = await this.userService.create(createUser);
    return this.login({ id: user.id, email: user.email });
  }

  /**
   * Metodo para validar un usuario
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Promise<User | null>} - Usuario
   */
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  /** REFRESH TOKEN  */

  /**
   * Metodo para generar un nuevo token de refresco
   * @param {AuthTokenPayloadValidateInfo} userInfo - Id del usuario
   * @param {string} currentRefreshToken - Token de refresco actual
   * @param {[Date]} currentRefreshTokenExpiresAt - Fecha de expiración del token de refresco actual
   * @returns {Promise<string>} - Nuevo token de refresco
   */
  async generateRefreshToken(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<string> {
    const refreshPayload: AuthTokenPayload = { id: userInfo.id, email: userInfo.email };
    const newRefreshToken = this.jwtService.sign(refreshPayload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '30d'
    });

    if (currentRefreshToken && currentRefreshTokenExpiresAt) {
      if (await this.isRefreshTokenBlackListed(currentRefreshToken, userInfo.id)) {
        throw new UnauthorizedException('Invalid refresh token.');
      }

      await this.authRefreshTokenRepository.insert({
        token: currentRefreshToken,
        expiresAt: currentRefreshTokenExpiresAt,
        userId: userInfo.id
      });
    }

    return newRefreshToken;
  }

  /**
   * Metodo para validar si un token de refresco está en la lista negra
   * @param {string} token - Token de refresco
   * @param {number} userId - Id del usuario
   * @returns {Promise<boolean>} - Validación si el token esta en la lista negra
   */
  private isRefreshTokenBlackListed(token: string, userId: number) {
    return this.authRefreshTokenRepository.existsBy({ token, userId });
  }

  /**
   * Metodo para generar un par de tokens
   * @param {AuthTokenPayloadValidateInfo} userInfo - Datos del usuario
   * @param {string} currentRefreshToken - Token de refresco actual
   * @param {string} currentRefreshTokenExpiresAt - Fecha de expiración del token de refresco actual
   * @returns {Promise<{ token: string; refresh: string }>} - Par de tokens
   */
  async generateTokenPair(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<Omit<LoginResponseDto, 'user'>> {
    const payload: AuthTokenPayload = { id: userInfo.id, email: userInfo.email };
    return {
      token: this.jwtService.sign(payload),
      refresh: await this.generateRefreshToken(userInfo, currentRefreshToken, currentRefreshTokenExpiresAt)
    };
  }

  /**
   *
   */
  /*@Cron(CronExpression.EVERY_DAY_AT_6AM)
  async clearExpiredRefreshTokens() {
    await this.authRefreshTokenRepository.delete({ expiresAt: LessThanOrEqual(new Date()) });
  }*/
}
