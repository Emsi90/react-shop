import React from 'react';
import { Product as IProduct } from 'constants/interfaces/Product';
import Tabs from 'components/Tabs';
import withLoader from 'hoc/withLoader';
import './Product.scss';

interface Props {
  product?: IProduct | null;
  inBasket: boolean;
  onAddToBakset: () => void;
}

const Product: React.FC<Props> = ({ product, inBasket, onAddToBakset }) => {
  if (!product) {
    return null;
  }
  return (
    <>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name='Description'
          initialActive={true}
          heading={() => <b>Description</b>}
        >
          <p>{product.description}</p>
        </Tabs.Tab>
        <Tabs.Tab name='Reviews' heading={() => 'Reviews'}>
          <ul className='product-reviews'>
            {product.reviews.map((review) => (
              <li key={review.reviewer}>
                <i>"{review.comment}"</i> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>
      <p className='product-price'>
        {new Intl.NumberFormat('en-US', {
          currency: 'USD',
          style: 'currency',
        }).format(product.price)}
      </p>
      {!inBasket && <button onClick={onAddToBakset}>Add to basket</button>}
    </>
  );
};

export default withLoader(Product);
