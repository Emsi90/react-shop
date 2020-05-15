import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  getProduct as getProductFromAPI,
  getProducts as getProductsFromAPI,
} from 'data/ProductData';

import {
  ProductsGetAllAction,
  ProductsGetSingleAction,
  ProductsLoadingAction,
  ProductsState,
  ProductsActionTypes,
} from './productsTypes';

const loading: ActionCreator<ProductsLoadingAction> = () => ({
  type: ProductsActionTypes.LOADING,
});

export const getProducts: ActionCreator<ThunkAction<
  Promise<AnyAction>,
  ProductsState,
  null,
  ProductsGetAllAction
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const products = await getProductsFromAPI();
    return dispatch({
      products,
      type: ProductsActionTypes.GETALL,
    });
  };
};

export const getProduct = (
  id: number
): ThunkAction<Promise<any>, ProductsState, null, ProductsGetSingleAction> => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const product = await getProductFromAPI(id);
    dispatch({
      product,
      type: ProductsActionTypes.GETSINGLE,
    });
  };
};
