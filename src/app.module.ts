import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EventModule } from './modules/event/event.module';
import { ImageModule } from './modules/image/image.module';
import { LocationModule } from './modules/location/location.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

/**
 *
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        seeds: [__dirname + '/seeds/**/*{.ts,.js}'],
        factories: [__dirname + '/factories/**/*{.ts,.js}'],
        cli: {
          migrationsDir: __dirname + '/migrations/'
        },
        logging: true
      }),
      inject: [ConfigService]
    }),
    UserModule,
    AuthModule,
    LocationModule,
    EventModule,
    ProductModule,
    ImageModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
