import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './productsReducer';
import { ProductsState } from './productsTypes';

export interface ApplicationState {
  products: ProductsState;
}

const rootReducer = combineReducers<ApplicationState>({
  products: productsReducer,
});

const configureStore = (): Store<ApplicationState> => {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
};

export default configureStore;
