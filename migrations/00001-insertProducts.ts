import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Aburi',
    image: '/aburi.avif',
    description: 'This is product 1',
    price: 9,
  },
  {
    id: 2,
    name: 'Hosomaki',
    image: '/hosomaki.avif',
    description: 'This is product 2',
    price: 4,
  },
  {
    id: 3,
    name: 'Uramaki',
    image: '/uramaki.avif',
    description: 'This is product 3',
    price: 7,
  },
  {
    id: 4,
    name: 'Temaki',
    image: '/temaki.avif',
    description: 'This is product 4',
    price: 10,
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
