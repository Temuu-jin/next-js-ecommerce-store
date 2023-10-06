CREATE TABLE products (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
description varchar(200),
price decimal(8,2) NOT NULL
);

INSERT INTO products
  (name, description, price)
VALUES
  ('Salmon Aburi', 'This is product 1', 10),
  ('Hosomaki', 'This is product 2', 11),
  ('Uramaki', 'This is product 3', 12),
  ('Temaki', 'This is product 4', 13)
;
