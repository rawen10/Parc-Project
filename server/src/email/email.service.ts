// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';

// @Injectable()
// export class MailService {
//   constructor(private readonly mailerService: MailerService) {}

//   async sendMail() {
//     try {
//       await this.mailerService.sendMail({
//         to: 'opensource@is.best',
//         from: '"Welcome to the fold" <linux@over.windows>', // sender address
//         subject: 'Quotes', // Subject line
//         text: '', // plaintext body
        
//       });
//       return {
//         success: true,
//       };
//     } catch (error) {
//       return {
//         success: false,
//       };
//     }
//   }
// }
