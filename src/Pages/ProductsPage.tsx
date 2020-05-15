import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from 'constants/interfaces/Product';
import { ApplicationState } from 'store/store';
import { getProducts } from 'store/products/productsActions';
import ProductList from 'components/ProductsList';

interface Props extends RouteComponentProps {
  getProducts: typeof getProducts;
  loading: boolean;
  products: Product[];
}

const ProductsPage: React.FC<Props> = (props) => {
  const productsState = useSelector((store: ApplicationState) => ({
    loading: store.products.productsLoading,
    products: store.products.products,
  }));
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  const handleSearch = useCallback(() => {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get('search') || '';
    setSearch(search);
  }, [props.location.search]);

  useEffect(() => {
    dispatch(getProducts());
    handleSearch();
  }, [dispatch, handleSearch]);

  return (
    <div className='page-container'>
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
      <ProductList
        search={search}
        products={productsState.products}
        loading={productsState.loading}
      />
    </div>
  );
};

// const mapStateToProps = (store: ApplicationState) => {
//   return {
//     loading: store.products.productsLoading,
//     products: store.products.products,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getProducts: () => dispatch(getProducts()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

export default ProductsPage;
