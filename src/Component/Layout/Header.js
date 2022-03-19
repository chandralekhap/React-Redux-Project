import {Fragment} from 'react'
import classes from './Header.module.css'
import MealImg from '../../Asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props =>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
               <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealImg} alt='Img not visible'/>
            </div>
        </Fragment>
    )
}

export default Header;