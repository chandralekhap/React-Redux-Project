
import classes from './MealItem.module.css'
import Input from '../../UI/Input'
import classes1 from './MealItemForm.module.css'
import {useRef, useState} from 'react'


const MealItemForm=(props)=>{

    const[enteredAmountIsValid, setEnteredAmountIsValid]=useState(true);
    const amountInputRef= useRef();

    const submitHandler=(event)=>{
        debugger;
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmountNumber === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
        {
            setEnteredAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes1.form} onSubmit={submitHandler}>
            <Input
             ref={amountInputRef}
            label='Amount' input={{
               
                id:'amount'+ props.id,
                type:'number',
                min: '1',
                max: '5',
                step:'1',
                default_value: '1'

            }}/>
            <button >+Add</button>
            {!enteredAmountIsValid && <p>Please enter valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm