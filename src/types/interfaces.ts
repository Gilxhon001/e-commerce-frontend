export interface Category {
  id: number;
  title: string;
  imageUrl: string;
  items: Product[];
}

export interface HomeCategory extends Category {
  route: string;
}

export interface CategoryDocument {
  title: string;
  items: Product[];
}

export interface SignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
