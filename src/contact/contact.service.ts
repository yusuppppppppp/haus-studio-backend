import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { CreateEmailDto } from './dto/create-email.dto';
import { render } from '@react-email/render';
import ContactEmail from './templates/contact-email';

@Injectable()
export class ContactService {
  private readonly resend = new Resend(process.env.RESEND_API_KEY);

  async sendEmail(dto: CreateEmailDto) {
    const html = await render(
      ContactEmail({
        name: dto.name,
        email: dto.email,
        message: dto.message,
      }),
    );

    const data = await this.resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.EMAIL_TO!],
      subject: 'New Message by Haus Studio',
      html,
    });

    return data;
  }
}
