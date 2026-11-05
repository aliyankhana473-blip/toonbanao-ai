/*
# Create payment and cartoon request tables

1. New Tables
- `payment_requests`: one row per NayaPay transaction ID submitted on the payment page.
  - `id` (uuid, primary key)
  - `tid` (text, unique, not null) - the NayaPay transaction ID the customer typed
  - `whatsapp` (text) - optional WhatsApp number the customer provided
  - `status` (text, default 'auto_approved')
  - `created_at` (timestamptz)
- `cartoon_requests`: one row per cartoon the customer asks for.
  - `id` (uuid, primary key)
  - `story` (text, not null)
  - `style` (text, not null)
  - `duration` (text, not null)
  - `created_at` (timestamptz)

2. Security
- RLS enabled on both tables.
- Visitors (anon) and signed-in users may only INSERT rows. There is no sign-in in this app.
- No SELECT policy is granted, so visitors cannot read other customers' transaction IDs or phone numbers. The owner reads rows from the Supabase dashboard.

3. Important notes
- The unique constraint on `tid` stops the same transaction ID from being used twice.
*/

CREATE TABLE IF NOT EXISTS payment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tid text NOT NULL UNIQUE,
  whatsapp text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'auto_approved',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cartoon_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  story text NOT NULL,
  style text NOT NULL,
  duration text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE payment_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE cartoon_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON payment_requests TO anon, authenticated;
GRANT INSERT ON cartoon_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_payment_requests" ON payment_requests;
CREATE POLICY "anon_insert_payment_requests" ON payment_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(tid) BETWEEN 4 AND 100 AND char_length(whatsapp) <= 30);

DROP POLICY IF EXISTS "anon_insert_cartoon_requests" ON cartoon_requests;
CREATE POLICY "anon_insert_cartoon_requests" ON cartoon_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(story) BETWEEN 1 AND 2000 AND char_length(style) <= 100 AND char_length(duration) <= 50);
