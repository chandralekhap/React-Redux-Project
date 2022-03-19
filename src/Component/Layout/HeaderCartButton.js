import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import {useContext, useEffect, useState} from 'react'
import CartContext from '../../Store/CartContext'

const HeaderCartButton =props=>{

    const ctxContext= useContext(CartContext);
const [buttonIsHighlighted, setButtonIsHighlighted]=useState(false)
    const noOfItem= ctxContext.items.reduce((currItem, item)=>{

        return currItem += item.amount;
    },0)
    
    const classButton  = `${classes.button} ${ buttonIsHighlighted? classes.bump: ''}`;
    const{items}= ctxContext;

    useEffect(() =>{

        if(items.length===0)
        return;
        setButtonIsHighlighted(true)

       const Timer= setTimeout(()=>{

            setButtonIsHighlighted(false)
        },300)

        return  ()=>{
            clearTimeout(Timer);
        }

    },[items])

    return (


    <button className={classButton} onClick={props.onShow}>
            <span  className={classes.icon}>
            <CartIcon/>
            </span>
            <span>
                    Your Cart Items
            </span>
            <span className={classes.badge}> {noOfItem}</span>
        </button>
    )
}

export default HeaderCartButton