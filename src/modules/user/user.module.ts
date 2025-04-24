import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGenderController } from './controllers/user-gender/user-gender.controller';
import { UserStatusController } from './controllers/user-status/user-status.controller';
import { UserTypeController } from './controllers/user-type/user-type.controller';
import { UserController } from './controllers/user/user.controller';
import { UserGender } from './entities/user-gender.entity';
import { UserStatus } from './entities/user-status.entity';
import { UserType } from './entities/user-type.entity';
import { UserWeight } from './entities/user-weight.entity';
import { User } from './entities/user.entity';
import { UserGenderService } from './services/user-gender/user-gender.service';
import { UserStatusService } from './services/user-status/user-status.service';
import { UserTypeService } from './services/user-type/user-type.service';
import { UserService } from './services/user/user.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([User, UserGender, UserType, UserStatus, UserWeight])],
  controllers: [UserController, UserStatusController, UserTypeController, UserGenderController],
  providers: [UserService, UserTypeService, UserGenderService, UserStatusService],
  exports: [UserService]
})
export class UserModule {}
