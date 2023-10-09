
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
  ('Aburi', '/aburi.jpg', 'Im a Sake Aburi', 9.99),
  ('Hosomaki', '/hosomaki.jpg', 'Im a Hosomaki', 10.99),
  ('Uramaki', '/uramaki.jpg', 'Im a Uramaki', 11.99),
  ('Temaki', '/temaki.jpg', 'Im a Temaki', 12.99)
;
