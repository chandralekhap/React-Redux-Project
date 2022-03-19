import classes from './Cart.module.css'
import Modal from '../UI/Modal.js'
import React, {useContext, useState} from 'react'
import CartContext from '../../Store/CartContext'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart=(props)=>{

    const cartContext= useContext(CartContext);
  const TotalAmount=`$${cartContext.totalAmount.toFixed(2)}`;
 
  const ShowButton = cartContext.items.length>0;
    const[IsCheckOut, setIsCheckOut]= useState(false)

    const [isSubmitting, setIsSubmitting]= useState(false)
    const[orderSuccessful, setOrderSuccessful]= useState(false)

  const BuyOutHandler=()=>{
    setIsCheckOut(true);
  }

  const addItemToCart=(item)=>{


    cartContext.addItem(item);

  }

  const removeItemFromCart=(id)=>{

    cartContext.removeItem(id);
  }
 // console.log('cartcontext value after item added from cart component',cartContext.items)

 //Submitting data to firebase
 
   const SubmitOrderHandler = async (userData) => { 

    setIsSubmitting(true);
  const response = await  fetch('https://chandralekha-282f5-default-rtdb.firebaseio.com/order.json',{
        
        method: 'POST',
        body : JSON.stringify({

            user : userData,
            orderedItems : cartContext.items
        })

    });

    setIsSubmitting(false)
    setOrderSuccessful(true)
 }
    const CartItems= (<ul className={classes['cart-items']}>
    {
     
    cartContext.items.map((item)=>{

        return(
        <CartItem key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={addItemToCart.bind(null,item)}
        onRemove={removeItemFromCart.bind(null, item.id)}/>
        )
    })
   // console.log('cartcontext value after item added from cart component',cartContext.items)
}
    </ul>);
const ModalAction = <div className={classes.actions}>
<button className={classes['button--alt']} onClick={props.onHide}>Close</button>
{ ShowButton &&  <button className={classes.button} onClick={BuyOutHandler}>Buy Out</button>}
</div>

const CartModalContent = <React.Fragment>
     { CartItems}
              <div className={classes.total}>
                  <span>Total Amount</span>
                  <span>{TotalAmount}</span>
              </div>
            {IsCheckOut && <Checkout onSubmitData={SubmitOrderHandler} onCancel={props.onHide}/>}  
             {!IsCheckOut && ModalAction}
</React.Fragment>
    return (

        <Modal onHide={props.onHide}>
          {!isSubmitting && !orderSuccessful && CartModalContent}
          {isSubmitting && <p>Data is Submitting</p>}
          {!isSubmitting && orderSuccessful && <p>Order Placed Successfully</p>}
        </Modal>
    )
}

export default Cart;