import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [forminputs, setFormInput] = useState({title:"", amount:"", date:""});

    const addTitle = (val)=>{
        setFormInput({
            ...forminputs,
            title: val
        });
    };

    const setPrice = (val) => {
        setFormInput({
            ...forminputs,
            amount: val
        });
    };

    const setExpenseDate = (val) => {
        setFormInput({
            ...forminputs,
            date: new Date(val)
        });
    };

    const addExpense = (el) => {
        el.preventDefault();

        const stored = {
            ...forminputs
        };

        setFormInput(
            {
                title:"",
                amount:"",
                date:""
            }
        );
        
        props.addExpense(stored);
    };

    const rmExpense = (el) =>{
        el.preventDefault();
        setFormInput(
            {
                title:"",
                amount:"",
                date:""
            }
        );
        props.toggleInput(false);
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={(el)=>addTitle(el.target.value)} value={forminputs.title}/>
            </div>

            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" onChange={(el)=>setPrice(el.target.value)} value={forminputs.amount}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={(el)=>setExpenseDate(el.target.value)} placeholder="dd-mm-yyyy"/>
            </div>
        </div>

        <div className="new-expense__actions">
        <button type="button" onClick={rmExpense}>Cancel</button>    
        <button type="submit" onClick={addExpense}>Add Expense</button>    
        </div>
    </form>
};
export default ExpenseForm;