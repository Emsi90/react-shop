import * as React from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'constants/interfaces/Product';
import withLoader from 'hoc/withLoader';

interface Props {
  products?: Product[];
  search: string;
}

const ProductsList: React.FC<Props> = ({ products, search }) => {
  return (
    <ul className='product-list'>
      {products &&
        products.map((product) => {
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
  );
};

export default withLoader(ProductsList);
