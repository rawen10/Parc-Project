// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Utilisez le service email de votre choix
      auth: {
        user: 'rawensoltqni@gmail.com',
        pass: 'nchallahzina'
      }
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'rawensoltqni@gmail.com',
      to,
      subject,
      text,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}