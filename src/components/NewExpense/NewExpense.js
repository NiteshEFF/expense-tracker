import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [toggle,changeToggle] = useState(true);

    const updateToggle = (state) =>{
        changeToggle(state);
    };

    return <div className="new-expense">
        {(toggle)?<ExpenseForm addExpense={props.addExpense} toggleInput={updateToggle}/>: <button onClick={(el)=>updateToggle(true)}>Add Expenses</button>}
    </div>
};

export default NewExpense;