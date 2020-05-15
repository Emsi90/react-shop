import { Product } from 'constants/interfaces/Product';

export enum ProductsActionTypes {
  GETALL = 'PRODUCTS/GETALL',
  GETSINGLE = 'PRODUCTS/GETSINGLE',
  LOADING = 'PRODUCTS/LOADING',
}

export interface ProductsGetAllAction {
  type: ProductsActionTypes.GETALL;
  products: Product[];
}

export interface ProductsGetSingleAction {
  type: ProductsActionTypes.GETSINGLE;
  product: Product;
}

export interface ProductsLoadingAction {
  type: ProductsActionTypes.LOADING;
}

export type ProductsActions =
  | ProductsGetAllAction
  | ProductsGetSingleAction
  | ProductsLoadingAction;

export interface ProductsState {
  readonly currentProduct: Product | null;
  readonly products: Product[];
  readonly productsLoading: boolean;
}
