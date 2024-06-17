// // First we will create a module in nestjs that would 
// // be responsible for dealing with mail related services.
// import { Module } from '@nestjs/common';
// import { MailService } from './mail.service';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { MailController } from './mail.controller';
// import { ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     MailerModule.forRootAsync({
//       useFactory: (configService: ConfigService) => ({
//         transport: {
//           // For relay SMTP server set the host to smtp-relay.gmail.com
//           // and for Gmail STMO server set it to smtp.gmail.com
//           host: configService.get('MAIL_HOST'),
//           // For SSL and TLS connection
//           secure: true,
//           port: 465,
//           auth: {
//             // Account gmail address
//             user: configService.get('MAIL_USER'),
//             pass: configService.get('MAIL_PASS')
//           },
//         },
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   providers: [MailService],
//   controllers: [MailController],
// })
// export class MailModule {}
