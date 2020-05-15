import { Reducer } from 'redux';
import {
  ProductsState,
  ProductsActions,
  ProductsActionTypes,
} from './productsTypes';

const initialProductState: ProductsState = {
  products: [],
  currentProduct: null,
  productsLoading: false,
};

export const productsReducer: Reducer<ProductsState, ProductsActions> = (
  state = initialProductState,
  action
) => {
  switch (action.type) {
    case ProductsActionTypes.LOADING: {
      return {
        ...state,
        productsLoading: true,
      };
    }
    case ProductsActionTypes.GETALL: {
      return {
        ...state,
        products: action.products,
        productsLoading: false,
      };
    }
    case ProductsActionTypes.GETSINGLE: {
      return {
        ...state,
        currentProduct: action.product,
        productsLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
