import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { Request } from 'express';
import { JwtRefreshGuard } from 'src/guards/jwt-refresh.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { CreateUserDto } from '../user/dto/user/create-user.dto';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login.dto';

/**
 *
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint para loguear un usuario
   * @param {Request} request - petición del usuario
   * @returns {Promise<LoginResponseDto>} - Datos del usuario logeado
   */
  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(AuthInterceptor)
  @UseGuards(LocalAuthGuard)
  login(@Req() request: Request): Promise<LoginResponseDto> {
    return this.authService.login(request.user['info']);
  }

  /**
   * Endpoint para registrar un usuario
   * @param {CreateUserDto} createUserDto - Datos del usuario a registrar
   * @returns {Promise<number>} - Datos del usuario registrado
   */
  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(AuthInterceptor)
  register(@Body() createUserDto: CreateUserDto): Promise<LoginResponseDto> {
    return this.authService.register(createUserDto);
  }

  /**
   * Endpoint para refrescar los tokens
   * @param {Request} req - Petición del usuario
   * @returns {Promise<Omit<LoginResponseDto, "user">>} - Tokens refrescados
   */
  @Post('refresh-token')
  @UseGuards(JwtRefreshGuard)
  @UseInterceptors(AuthInterceptor)
  refreshTokens(@Req() req: Request): Promise<Omit<LoginResponseDto, 'user'>> {
    if (!req.user) {
      throw new UnauthorizedException();
    }
    return this.authService.generateTokenPair(req.user['info'], req.cookies['refresh'], req.user['expiration']);
  }

  /**
   * Endpoint para cerrar sesión
   * @param {Request} req - Petición del usuario
   */
  @Post('logout')
  logout(@Req() req: Request): void {
    req.res.clearCookie('token');
    req.res.clearCookie('refresh');
    return;
  }
}
