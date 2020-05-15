import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Product from 'components/Product';
import { addToBasket } from 'store/basket/basketActions';
import { getProduct } from 'store/products/productsActions';
import { addedToBasket } from 'selectors/addedToBasket';
import { ApplicationState } from 'store/store';

type Props = RouteComponentProps<{ id: string }>;

// interface Props extends RouteComponentProps<{ id: string }> {
//   addToBasket: typeof addToBasket;
//   getProduct: typeof getProduct;
//   loading: boolean;
//   product?: IProduct;
//   added: boolean;
// }

const ProductPage: React.FC<Props> = (props) => {
  const store = useSelector((store: ApplicationState) => ({
    loading: store.products.productsLoading,
    product: store.products.currentProduct,
    basket: store.basket.products,
    added: addedToBasket(store),
  }));
  const dispatch = useDispatch();
  // const [added, setAdded] = useState<boolean>(false);
  // const [product, setProduct] = useState<IProduct | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // let isCancelled = false;
    if (props.match.params.id) {
      const id: number = parseInt(props.match.params.id, 10);
      dispatch(getProduct(id));
      // const getProd = async () => {
      //   const id: number = parseInt(props.match.params.id, 10);
      //   const productS = await getProduct(id);
      //   if (product !== null && !isCancelled) {
      //     setLoading(false);
      //     setProduct(productS);
      //   }
      // };
      // getProd();
    }
    // return () => {
    //   isCancelled = true;
    // };
  }, [dispatch, props.match.params.id]);

  const handleAddClick = () => {
    if (store.product) {
      dispatch(addToBasket(store.product));
    }
  };

  // const navAwayMessage = () =>
  //   'Are you sure you leave without buying this product?';

  return (
    <div className='page-container'>
      {/* <Prompt when={!added} message={navAwayMessage} /> */}
      {store.product || store.loading ? (
        <Product
          loading={store.loading}
          product={store.product}
          inBasket={store.added}
          onAddToBakset={handleAddClick}
        />
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
//     getProduct: (id: number) => dispatch(getProduct(id)),
//   };
// };

// const mapStateToProps = (store: IApplicationState) => {
//   return {
//     basketProducts: store.basket.products,
//     loading: store.products.productsLoading,
//     product: store.products.currentProduct || undefined,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPage;
