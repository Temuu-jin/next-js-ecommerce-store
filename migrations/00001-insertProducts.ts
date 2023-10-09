import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Aburi',
    image: '/aburi.jpg',
    description: 'This is product 1',
    price: 9.99,
  },
  {
    id: 2,
    name: 'Hosomaki',
    image: '/hosomaki.jpg',
    description: 'This is product 2',
    price: 4.5,
  },
  {
    id: 3,
    name: 'Uramaki',
    image: '/uramaki.jpg',
    description: 'This is product 3',
    price: 7.99,
  },
  {
    id: 4,
    name: 'Temaki',
    image: '/temaki.jpg',
    description: 'This is product 4',
    price: 10.5,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, image, description, price)
    VALUES
      (${product.name}, ${product.image}, ${product.description}, ${product.price})
    ;`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id = ${product.id};

  ;`;
  }
}
