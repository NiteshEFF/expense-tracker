import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = props => {
if (props.FilteredExpenses.length === 0 ){
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2> ;
} else {
   return <ul className="expenses-list">
        {props.FilteredExpenses.map(item => 
            <ExpenseItem expense={item} key={item.id} year={props.selectedYear}></ExpenseItem>
        )}
    </ul>
}
};

export default ExpenseList;