import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class SupabaseService {
    private readonly client: SupabaseClient;

    constructor(private readonly configServices: ConfigService) {
        this.client = createClient(
            this.configServices.get<string>('supabase.dbUrl')!,
            this.configServices.get<string>('supabase.serviceRoleKey')!,
        );
    }

    getClient(): SupabaseClient {
        return this.client;
    }
}