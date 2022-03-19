 import classes from './MealItem.module.css'
 import MealItemForm from './MealItemForm'
 import {useContext} from 'react'
import CartContext from '../../../Store/CartContext';

const MealItem=(props)=>{

    const ctxCart=useContext(CartContext);
    const onAddToCart=(amount)=>{

        ctxCart.addItem({

            id: props.id,
            price: props.price,
            amount: amount,
            name: props.name
        });
    }

    const price= `$${props.price.toFixed(2)}`;
    return(
       <li className={classes.meals}>
           <div >
               <h3>{props.name}</h3>
               <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
           </div>
           <div>

               <MealItemForm  onAddToCart={onAddToCart} id={props.id}/>
           </div>
       </li>
    )

}

export default MealItem