import { ApplicationState } from 'store/store';

export const addedToBasket = (store: ApplicationState) => {
  return store.basket.products.some((p) =>
    store.products.currentProduct
      ? p.id === store.products.currentProduct.id
      : false
  );
};
