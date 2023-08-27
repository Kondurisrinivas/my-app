import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const titleHandler = () => {
    setTitle('Updated!')
    console.log(title)
  };

  const [amount, Setamount] = useState(props.amount)
  const expenseHandler = () => {
    Setamount('100')
    console.log(amount)
  };

  return (
    <Card id={props.id} className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={expenseHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
