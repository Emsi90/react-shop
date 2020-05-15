import React, { useReducer } from 'react';
import { Product as IProduct } from 'constants/interfaces/Product';
import Tabs from 'components/Tabs';
import withLoader from 'hoc/withLoader';
import './Product.scss';

interface LikeState {
  likes: number;
  lastLike: Date | null;
}

const initialLikeState: LikeState = {
  likes: 0,
  lastLike: null,
};

enum LikeActionTypes {
  LIKE = 'LIKE',
}

interface LikeAction {
  type: LikeActionTypes.LIKE;
  now: Date;
}

type LikeActions = LikeAction;

const reducer = (state: LikeState = initialLikeState, action: LikeActions) => {
  switch (action.type) {
    case LikeActionTypes.LIKE:
      return { ...state, likes: state.likes + 1, lastLike: action.now };
  }
  return state;
};

interface Props {
  product?: IProduct | null;
  inBasket: boolean;
  onAddToBakset: () => void;
}

const Product: React.FC<Props> = ({ product, inBasket, onAddToBakset }) => {
  const [{ likes, lastLike }, dispatch]: [
    LikeState,
    (action: LikeAction) => void
  ] = useReducer(reducer, initialLikeState);

  const handleLikeClick = () => {
    dispatch({ type: LikeActionTypes.LIKE, now: new Date() });
  };

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
      <div className='like-container'>
        {likes > 0 && (
          <div>{`I like this x ${likes}, last at ${lastLike}`}</div>
        )}
        <button onClick={handleLikeClick}>
          {likes > 0 ? 'Like again' : 'Like'}
        </button>
      </div>
    </>
  );
};

export default withLoader(Product);
