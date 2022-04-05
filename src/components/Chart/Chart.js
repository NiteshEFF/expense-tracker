import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {

    const values = props.expenses.map(expense => expense.value);
    const maxExpense = Math.max(...values);
    console.log(maxExpense);

    return <div className="chart">
        {props.expenses.map(item => 
        <ChartBar 
            key={item.label}
            value={item.value}
            maxVal={maxExpense}
            label={item.label}
        />
        )}
    </div>
};
export default Chart;