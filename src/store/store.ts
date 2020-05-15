import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './products/productsReducer';
import { ProductsState } from './products/productsTypes';
import { basketReducer } from './basket/basketReducer';
import { BasketState } from './basket/basketTypes';

export interface ApplicationState {
  products: ProductsState;
  basket: BasketState;
}

const rootReducer = combineReducers<ApplicationState>({
  products: productsReducer,
  basket: basketReducer,
});

const configureStore = (): Store<ApplicationState> => {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
};

export default configureStore;
