import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    async send(@Body() dto: CreateEmailDto) {
        return this.contactService.sendEmail(dto);
    }
}
