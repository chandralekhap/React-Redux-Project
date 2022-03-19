import MealSummary from './MealSummary';
import AvailableMeal from './AvailableMeal'
import {Fragment} from 'react'
const Meal=()=>{

    return(
        <Fragment>
            <MealSummary/>
            <AvailableMeal/>
        </Fragment>
    )
}

export default Meal