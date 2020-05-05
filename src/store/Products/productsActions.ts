import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getProducts as getProductsFromAPI } from 'data/ProductData';

import {
  ProductsGetAllAction,
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
