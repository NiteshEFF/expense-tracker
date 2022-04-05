import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState(2021);
  const FilteredExpenses = props.expenseslist.filter(expense => expense.date.getFullYear().toString() === selectedYear.toString() );
    return <Card className="expenses">
      <ExpensesFilter setFilter={(el)=>setYear(el.target.value)} year={selectedYear}/>
      <ExpenseChart expenses = {FilteredExpenses}/>
      <ExpenseList FilteredExpenses={FilteredExpenses} selectedYear={selectedYear}/>
    </Card>
}
export default Expenses;