/*
  # Update admin policies for new admin email

  1. Changes
    - Update RLS policies to allow access for new admin email
*/

DROP POLICY IF EXISTS "Allow admin to manage categories" ON categories;
DROP POLICY IF EXISTS "Allow admin to manage tools" ON tools;

CREATE POLICY "Allow admin to manage categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'nihithpenumuchu07@gmail.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'nihithpenumuchu07@gmail.com');

CREATE POLICY "Allow admin to manage tools"
  ON tools
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'nihithpenumuchu07@gmail.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'nihithpenumuchu07@gmail.com');