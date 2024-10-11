import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGender } from './entities/user-gender.entity';
import { UserStatus } from './entities/user-status.entity';
import { UserType } from './entities/user-type.entity';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([User, UserGender, UserType, UserStatus])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
