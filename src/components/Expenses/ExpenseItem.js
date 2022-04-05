import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {

const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle("Updated!")
    };

    return <li>
    <Card className="expense-item">
        <ExpenseDate date = {props.expense.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">Rs. {props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
};
export default ExpenseItem;