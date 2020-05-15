import React from 'react';
import './BasketSummary.scss';

interface Props {
  count: number;
}

const BasketSummary: React.FC<Props> = ({ count }) => {
  return <div className='basket-summary'>{count}</div>;
};

export default BasketSummary;
