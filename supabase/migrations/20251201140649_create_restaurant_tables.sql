/*
  # Création des tables pour le restaurant La Dolce Vita

  1. Nouvelles Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `nom` (text) - Nom complet du client
      - `email` (text) - Email du client
      - `telephone` (text) - Numéro de téléphone
      - `date_rdv` (date) - Date de la réservation
      - `heure_rdv` (text) - Heure de la réservation
      - `nb_personnes` (integer) - Nombre de personnes
      - `demandes_speciales` (text) - Demandes spéciales (optionnel)
      - `statut` (text) - Statut de la réservation (en_attente, confirmee, annulee)
    
    - `contacts`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `nom` (text) - Nom complet
      - `email` (text) - Email
      - `telephone` (text) - Numéro de téléphone
      - `message` (text) - Message de contact
      - `lu` (boolean) - Indicateur de lecture

  2. Sécurité
    - RLS activé sur les deux tables
    - Politiques pour permettre les insertions publiques
    - Politiques pour la consultation admin
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  nom text NOT NULL,
  email text NOT NULL,
  telephone text NOT NULL,
  date_rdv date NOT NULL,
  heure_rdv text NOT NULL,
  nb_personnes integer NOT NULL,
  demandes_speciales text DEFAULT '',
  statut text DEFAULT 'en_attente'
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permettre insertion publique des réservations"
  ON reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Permettre lecture authentifiée des réservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Permettre mise à jour authentifiée des réservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  nom text NOT NULL,
  email text NOT NULL,
  telephone text NOT NULL,
  message text NOT NULL,
  lu boolean DEFAULT false
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permettre insertion publique des contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Permettre lecture authentifiée des contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Permettre mise à jour authentifiée des contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);