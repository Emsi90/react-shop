import { Product } from 'constants/interfaces/Product';

export enum ProductsActionTypes {
  GETALL = 'PRODUCTS/GETALL',
  LOADING = 'PRODUCTS/LOADING',
}

export interface ProductsGetAllAction {
  type: ProductsActionTypes.GETALL;
  products: Product[];
}

export interface ProductsLoadingAction {
  type: ProductsActionTypes.LOADING;
}

export type ProductsActions = ProductsGetAllAction | ProductsLoadingAction;

export interface ProductsState {
  readonly products: Product[];
  readonly productsLoading: boolean;
}
