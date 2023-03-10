import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import {
  CreateUserService,
  FindAllUsersResidency,
  FindAllUsersService,
  FindUserByIdService,
  MyAccountService,
  RecoveryPasswordByEmail,
  UpdateMyAccountService,
  UpdateMyPasswordService,
  UpdatePasswordByEmailService,
  UpdateUserResidencyById,
} from './services';
import { UserRepository } from './repository/user.repository';
import { PassportModule } from '@nestjs/passport';
import { DeleteMyAccountService } from './services/delete-my-account.service';
import { MailModule } from '../mails/mail.module';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), MailModule],
  controllers: [UserController],
  providers: [
    CreateUserService,
    MyAccountService,
    UserRepository,
    UpdateMyAccountService,
    UpdateMyPasswordService,
    DeleteMyAccountService,
    FindUserByIdService,
    FindAllUsersService,
    UpdateUserResidencyById,
    RecoveryPasswordByEmail,
    UpdatePasswordByEmailService,
    FindAllUsersResidency,
  ],
  exports: [UserRepository],
})
export class UserModule {}
