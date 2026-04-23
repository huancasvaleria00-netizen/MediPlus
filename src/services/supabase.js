import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "http://localhost:3000";
const supabaseKey = "sb_publishable_ZLBZw5RWx7E3gtB9xPSm2w_v08IDSj2";

export const supabase = createClient(supabaseUrl, supabaseKey);
