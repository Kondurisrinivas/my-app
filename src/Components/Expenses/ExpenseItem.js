import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    const expenseItem = document.getElementById(props.id);
    if (expenseItem) {
      expenseItem.parentNode.removeChild(expenseItem.parentNode); // Remove the expense item's parent node (the Card element)
    }
  };

  return (
    <Card id={props.id} className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
