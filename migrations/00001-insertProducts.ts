import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Aburi',
    image: '/aburi.avif',
    description: 'Seared Salmon Nigiri',
    price: 9,
  },
  {
    id: 2,
    name: 'Hosomaki',
    image: '/hosomaki.avif',
    description: 'Hosomaki with Avocado',
    price: 4,
  },
  {
    id: 3,
    name: 'Uramaki',
    image: '/uramaki.avif',
    description: 'Uramaki with Salmon and Avocado',
    price: 7,
  },
  {
    id: 4,
    name: 'Temaki',
    image: '/temaki.avif',
    description: 'Temaki with Salmon and Avocado',
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
