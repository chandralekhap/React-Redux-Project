
import classes from './AvailableMeal.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import {react, useEffect, useState} from 'react'


const AvailableMeal=()=>{

  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading]= useState(true)
  const [hasError, setHasError]= useState();


  useEffect(()=>{

    const  FetchMeal = async ()=>{
 
      const response= await fetch('https://chandralekha-282f5-default-rtdb.firebaseio.com/Meal.json')
     
   if(!response.ok)
      {
        throw new Error('something went wrong')
      }
      const responseData= await response.json();
      const LoadMeal=[];
      for (const key in responseData)
      {
          LoadMeal.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price
          })
      }

      setMeal(LoadMeal)
      setIsLoading(false)
   }
  FetchMeal().catch((error)=>{

    setIsLoading(false);
    setHasError(error.message)
  
   })

//FetchMeal();

 },[])

 if(isLoading)
 {
   return (
     <section className={classes.LoadingMeals}>
       <p>Loading...</p>
     </section>
   )
 }
   if(hasError)
   {
     return (
       <section className={classes.ErrorMsg}>
         <p>{hasError}</p>
       </section>
     )
   }
    const MealList = meal.map((meal)=><MealItem 
    id= {meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}/>);

    return(
        <section className={classes.meals}>

<ul>
    <Card>
    {MealList }
    </Card>
</ul>
        </section>
    )
}

export default AvailableMeal