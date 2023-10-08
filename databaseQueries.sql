
-- Create products table
CREATE TABLE products (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
image varchar(200) NOT NULL,
description varchar(200),
price decimal(8,2) NOT NULL
);

-- Insert products
INSERT INTO products
  (name, image, description, price)
VALUES
  ('Salmon Aburi', '/aburi.jpg', 'This is product 1', 9.99),
  ('Hosomaki', '/hosomaki.jpg', 'This is product 2', 10.99),
  ('Uramaki', '/uramaki.jpg', 'This is product 3', 11.99),
  ('Temaki', '/temaki.jpg', 'This is product 4', 12.99)
;
