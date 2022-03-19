import CartContext from './CartContext'
import  {useReducer} from 'react'


const CartDefaultState ={

    items:[],
    totalAmount: 0
}
const CartReducer =(state, action)=>{

    if (action.type==='ADD')
    {
       
        const updatedAmount = state.totalAmount+ action.item.price * action.item.amount;
      
     
        const existingItemIndex=state.items.findIndex((item)=>item.id === action.item.id)
        const existingItem=state.items[existingItemIndex];

        let updatedItems
        if(existingItem)
        {
           const  updatedItem={
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }

            updatedItems=[...state.items];
            updatedItems[existingItemIndex]=updatedItem
        }
            else{
               updatedItems = state.items.concat(action.item);
            }
          
           // console.log('updated item after adding item in cart in reducer function', updatedItems)
        return {
           
           
            items:updatedItems,
            totalAmount: updatedAmount
        }
    }

    //removeItem from cart
    if (action.type==='REMOVE')
    {
       
     
        const existingItemIndex=state.items.findIndex( ( item ) => item.id === action.id )
        const existingItem=state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price;

        let updatedItems
        if(existingItem.amount === 1)
        {
           updatedItems=state.items.filter((item) => item.id !== action.id)
        }
            else{
          
                const  updatedItem={
                    ...existingItem,
                    amount: existingItem.amount - 1
                }
    
                updatedItems=[...state.items];
                updatedItems[existingItemIndex] = updatedItem
            }
          
           // console.log('updated item after adding item in cart in reducer function', updatedItems)
        return {
           
           
            items:updatedItems,
            totalAmount: updatedAmount
        }
    }


    return CartDefaultState;
}
const CartProvider=(props)=>{

   const[NewState, DispatchCart]= useReducer(CartReducer, CartDefaultState)

    const addItemToCart = (item) => {

      
        DispatchCart({
            type: 'ADD',
            item: item
        })
    }
    const removeItemFromCart = (id) => {

        DispatchCart({
            type: 'REMOVE',
            id: id
        })
    }
    const cartContext={
        items : NewState.items,
        totalAmount:NewState.totalAmount,
        addItem:addItemToCart,
        removeItem: removeItemFromCart
    }
return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartProvider;