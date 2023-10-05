import 'server-only';

const products = [
  {
    id: 1,
    name: 'Salmon Aburi',
    description: 'This is product 1',
    image: '/aburi.jpg',
    price: 10,
  },
  {
    id: 2,
    name: 'Hosomaki',
    description: 'This is product 2',
    image: '/hosomaki.jpg',
    price: 11,
  },
  {
    id: 3,
    name: 'Uramaki',
    description: 'This is product 3',
    image: '/uramaki.jpg',
    price: 12,
  },
  {
    id: 4,
    name: 'Temaki',
    description: 'This is product 4',
    image: '/temaki.jpg',
    price: 13,
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
