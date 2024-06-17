import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ReservationModule, EmailModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
