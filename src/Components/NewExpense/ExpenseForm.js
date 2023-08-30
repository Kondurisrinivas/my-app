import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=()=>{
    const [enteredtitle, setEnteredtitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleHandler=(event)=>{
        setEnteredtitle(event.target.value)
        console.log(enteredtitle)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount)
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate)
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredtitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log(expenseData)
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleHandler}/>

            </div>

            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" min='0.01' step="0.01" onChange={amountHandler}/>    
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01"  max="2023-08-30" onChange={dateHandler}/>                
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;