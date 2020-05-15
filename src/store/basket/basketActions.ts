import { BasketActionTypes, BasketAdd } from './basketTypes';
import { Product } from 'constants/interfaces/Product';

export const addToBasket = (product: Product): BasketAdd => ({
  product,
  type: BasketActionTypes.ADD,
});
