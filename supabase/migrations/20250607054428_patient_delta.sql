/*
  # Add Website Making category and sample data

  1. New Category
    - Add "Website Making" category
  
  2. Sample Data
    - Insert all AI websites across categories
*/

-- Insert Website Making category
INSERT INTO categories (name, icon, description) VALUES 
('Website Making', 'globe', 'AI tools for creating and enhancing websites');

-- Get category IDs for reference (these will be used in the tools insertion)
-- Note: In a real migration, you'd use the actual UUIDs from your database