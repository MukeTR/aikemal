import { createClient } from "@supabase/supabase-js";
export type Env = { SUPABASE_URL?: string; SUPABASE_PUBLISHABLE_KEY?: string };
// Per-request client. Publishable key only; future authenticated requests must forward their JWT.
export function getSupabase(env: Env) {
  if (!env.SUPABASE_URL || !env.SUPABASE_PUBLISHABLE_KEY) return null;
  return createClient(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
