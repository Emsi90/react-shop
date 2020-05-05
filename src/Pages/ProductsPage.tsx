import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { products } from 'data/ProductData';
import { Product } from 'constants/interfaces/Product';

const ProductsPage: React.FC<RouteComponentProps> = (props) => {
  const [productsState, setProductsState] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    setProductsState(products);
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get('search') || '';
    setSearch(search);
  }, [props.location.search]);

  return (
    <div className='page-container'>
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
      <ul className='product-list'>
        {productsState.map((product) => {
          if (
            !search ||
            (search &&
              product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
          ) {
            return (
              <li key={product.id} className='product-list-item'>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
