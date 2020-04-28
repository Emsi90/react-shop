export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: Review[];
}

export interface Review {
  comment: string;
  reviewer: string;
}
