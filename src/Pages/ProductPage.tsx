import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getProduct } from 'data/ProductData';
import { Product as IProduct } from 'constants/interfaces/Product';
import Product from 'components/Product';

type Props = RouteComponentProps<{ id: string }>;

const ProductPage: React.FC<Props> = (props) => {
  const [added, setAdded] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isCancelled = false;
    if (props.match.params.id) {
      const getProd = async () => {
        const id: number = parseInt(props.match.params.id, 10);
        const product = await getProduct(id);
        if (product !== null && !isCancelled) {
          setLoading(false);
          setProduct(product);
        }
      };
      getProd();
    }
    return () => {
      isCancelled = true;
    };
  }, [props.match.params.id]);

  const handleAddClick = () => {
    setAdded(true);
  };

  // const navAwayMessage = () =>
  //   'Are you sure you leave without buying this product?';

  return (
    <div className='page-container'>
      {/* <Prompt when={!added} message={navAwayMessage} /> */}
      {product || loading ? (
        <Product
          loading={loading}
          product={product}
          inBasket={added}
          onAddToBakset={handleAddClick}
        />
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default ProductPage;
