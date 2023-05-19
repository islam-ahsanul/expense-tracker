import React from 'react';

const Transaction = (props) => {
  const sign = props.transacton.amount < 0 ? '-' : '+';
  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {props.transacton.text}{' '}
      <span>
        {sign}${Math.abs(props.transacton.amount)}
      </span>{' '}
      <button className="delete-btn"></button>
    </li>
  );
};

export default Transaction;
