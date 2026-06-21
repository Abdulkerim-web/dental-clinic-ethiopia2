import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase env vars are missing. Copy .env.example to .env.local and fill in your project URL + anon key.'
  );
}

// NOTE on typing: this client is intentionally untyped against the `Database`
// generic. Hand-rolled Database types are brittle against supabase-js's
// internal generics (they change between minor versions). The `Database`
// interface in `database.types.ts` is kept as a readable reference and used
// to type each service function's *return value* instead. Once your project
// is live, run `npx supabase gen types typescript --project-id <ref> > src/services/database.types.ts`
// to get a generator-accurate version and wire it back into createClient<Database>().
//
// A placeholder URL is used as a fallback so a missing env var fails loudly
// in the console (and in any actual Supabase call) rather than crashing the
// whole React app at startup — supabase-js throws synchronously on an empty
// URL, which would otherwise white-screen the entire site.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }
);
