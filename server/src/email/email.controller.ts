// email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('email')
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body) {
    const { to, subject, text } = body;
    await this.emailService.sendMail(to, subject, text);
    return { message: 'Email sent successfully' };
  }
}

