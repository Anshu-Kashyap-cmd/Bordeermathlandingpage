import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SignupData {
  name: string;
  email: string;
  travel_preferences?: {
    regions?: string[];
    travel_style?: string;
    frequency?: string;
  };
  source?: string;
  subscribed_to_newsletter?: boolean;
}

export const submitSignup = async (data: SignupData) => {
  const { data: result, error } = await supabase
    .from('signups')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return result;
};
