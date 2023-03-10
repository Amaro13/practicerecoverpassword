import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma/prisma.module';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { MailModule } from 'src/modules/mails/mail.module';
import { UserModule } from 'src/modules/user/user.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './modules/schedule/schedule.module';
@Module({
  imports: [
    // TwilioModule.forRoot({
    //   accountSid: process.env.TWILIO_ACCOUNT_SID,
    //   authToken: process.env.TWILIO_AUTH_TOKEN,
    // }),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MailModule,
    PrismaModule,
    UserModule,
    AuthModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
