import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './database/supabase.module';
import { WebsiteModule } from './website/website.module';
import { ContactModule } from './contact/contact.module';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    
    SupabaseModule,
    WebsiteModule,
    ContactModule,
  ],
})
export class AppModule {}
