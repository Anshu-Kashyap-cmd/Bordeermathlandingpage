/*
  # Bordermath User Sign-ups Schema

  1. New Tables
    - `signups`
      - `id` (uuid, primary key) - Unique identifier for each sign-up
      - `name` (text) - User's full name
      - `email` (text, unique) - User's email address
      - `travel_preferences` (jsonb) - Structured data for travel preferences including:
        - Preferred regions/countries
        - Travel style (digital nomad, long-term traveler, etc.)
        - Frequency of travel
      - `source` (text) - Sign-up source for analytics (landing page, referral, etc.)
      - `subscribed_to_newsletter` (boolean) - Newsletter subscription status
      - `created_at` (timestamptz) - Sign-up timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `signups` table
    - Add policy for public insert (allow sign-ups)
    - Add policy for authenticated admin read access
    
  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for analytics queries
*/

CREATE TABLE IF NOT EXISTS signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  travel_preferences jsonb DEFAULT '{}'::jsonb,
  source text DEFAULT 'landing_page',
  subscribed_to_newsletter boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up"
  ON signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all signups"
  ON signups
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_signups_email ON signups(email);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON signups(created_at DESC);