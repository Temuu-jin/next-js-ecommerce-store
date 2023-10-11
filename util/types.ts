// CookieObjects
export type CookieObject = {
  id: number;
  quantity: number;
};

// Database Objects
export type Product = {
  id: number;
  name: string;
  image: string;
  description: string | null;
  price: number;
};

// Mixed Objects
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
