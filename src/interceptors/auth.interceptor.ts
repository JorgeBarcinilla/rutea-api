import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { LoginResponseDto } from 'src/modules/auth/dto/login.dto';

/**
 *
 */
@Injectable()
export class AuthInterceptor implements NestInterceptor {
  /**
   * Intercepta las peticiones
   * @param {ExecutionContext} context - Contexto de la petición
   * @param {CallHandler} next - Siguiente manejador
   * @returns {Observable<any>} - Respuesta de la petición
   */
  intercept(context: ExecutionContext, next: CallHandler<LoginResponseDto>): Observable<void> {
    return next.handle().pipe(
      map(({ token, refresh }) => {
        const response = context.switchToHttp().getResponse();
        if (token) {
          response.cookie('token', token, { httpOnly: true });
          response.cookie('refresh', refresh, { httpOnly: true });
        }
        return;
      })
    );
  }
}
