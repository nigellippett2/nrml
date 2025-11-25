import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Warn if Supabase is not configured (template setup)
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️  Supabase not configured. To use Supabase:\n' +
    '   1. Copy .env.example to .env.local\n' +
    '   2. Add your Supabase project URL and anon key\n' +
    '   3. Get credentials from https://supabase.com/dashboard\n'
  );
}

// Create client with placeholder values if not configured (prevents build errors)
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

// Server-side client for use in API routes
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );
};
