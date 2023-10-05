import 'server-only';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: 11 },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: 12 },
  { id: 4, name: 'Product 4', description: 'This is product 4', price: 13 },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
