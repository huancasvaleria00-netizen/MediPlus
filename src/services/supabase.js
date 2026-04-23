import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "TU_URL_AQUI";
const supabaseKey = "TU_KEY_AQUI";

export const supabase = createClient(supabaseUrl, supabaseKey);
