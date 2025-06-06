/*
  # Create AI tools database schema

  1. New Tables
    - `tools`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `category_id` (uuid, foreign key)
      - `developer` (text)
      - `pricing_type` (text)
      - `pricing_amount` (decimal)
      - `features` (text[])
      - `screenshots` (text[])
      - `video_url` (text)
      - `website_url` (text)
      - `rating` (decimal)
      - `review_count` (integer)
      - `last_updated` (timestamptz)
      - `release_date` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `icon` (text)
      - `description` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated admin users
*/

-- Create categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  icon text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create tools table
CREATE TABLE tools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category_id uuid REFERENCES categories(id),
  developer text NOT NULL,
  pricing_type text NOT NULL,
  pricing_amount decimal,
  features text[] NOT NULL DEFAULT '{}',
  screenshots text[] NOT NULL DEFAULT '{}',
  video_url text,
  website_url text NOT NULL,
  rating decimal DEFAULT 0,
  review_count integer DEFAULT 0,
  last_updated timestamptz DEFAULT now(),
  release_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Allow public read access to categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin to manage categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@example.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@example.com');

CREATE POLICY "Allow public read access to tools"
  ON tools
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin to manage tools"
  ON tools
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@example.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@example.com');