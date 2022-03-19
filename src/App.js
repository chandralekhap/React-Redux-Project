import Header from './Component/Layout/Header'
import {Fragment, useState, Component} from 'react'
import Meal from './Component/Meal/Meal'
import Cart from './Component/Cart/Cart'
import CartProvider from './Store/CartProvider'
import SearchReceipe from './SearchReceipe'

class App extends Component {

  render(){

    return (

      <div>
        <h2>Recepie Finder</h2>
        <SearchReceipe/>
      </div>
    )
  }
/*
  const [ cartIsShown, setCartIsShown]=useState(false)

  const showCartStatus=()=>{
    setCartIsShown(true)
  }

  const hideCartStatus=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart  onHide={hideCartStatus}/>}
      <Header onShow={showCartStatus}/>
      <section>
        <Meal/>
      </section>
    </CartProvider>
  );
  */
}

export default App;
