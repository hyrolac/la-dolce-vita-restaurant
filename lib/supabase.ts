import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Reservation = {
  id: string;
  created_at: string;
  nom: string;
  email: string;
  telephone: string;
  date_rdv: string;
  heure_rdv: string;
  nb_personnes: number;
  demandes_speciales?: string;
  statut: 'en_attente' | 'confirmee' | 'annulee';
};

export type Contact = {
  id: string;
  created_at: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  lu: boolean;
};
