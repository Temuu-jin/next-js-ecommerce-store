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

// All names of composerId's of each edition
// A new object for each edition
// editionId: number
// composerNames: array of composerName Strings

// editions.forEach((edition) => {
// each edition you look for every composerId and save the names.
// edition.composerNames = [strings];
// extract numbers from strings?
// })
