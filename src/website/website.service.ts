import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from 'src/database/supabase.service';

@Injectable()
export class WebsiteService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getWebsiteData() {
    const supabase = this.supabaseService.getClient();

    const [sectionRes, lookbookItemsRes] = await Promise.all([
      supabase.from('web_sections').select('*'),
      supabase.from('lookbook_items').select('*').eq('is_published', true),
    ]);

    if (sectionRes.error) {
      throw new InternalServerErrorException(sectionRes.error.message);
    }

    if (lookbookItemsRes.error) {
      throw new InternalServerErrorException(lookbookItemsRes.error.message);
    }

    const sectionMap: Record<string, any> = {};

    sectionRes.data.forEach((section) => {
      sectionMap[section.section_slug] = {
        id: section.id,
        ...(section.ui_payload || {}),
      };
    });

    if (sectionMap.lookbook) {
      sectionMap.lookbook.items = lookbookItemsRes.data;
    }

    console.log(JSON.stringify(sectionMap, null, 2));

    return sectionMap;
  }
}
