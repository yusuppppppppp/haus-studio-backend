import { Controller, Get } from '@nestjs/common';
import { WebsiteService } from './website.service';

@Controller('website')
export class WebsiteController {
  constructor( private readonly websiteService: WebsiteService ) {}

  @Get()
  getWebsite() {
    return this.websiteService.getWebsiteData();
  }
}
