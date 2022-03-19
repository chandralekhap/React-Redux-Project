import classes from './Checkout.module.css'
import {useRef, useState} from 'react'

const Checkout= (props)=>{

   
    const isEmpty = (value) => value.trim() === '';
    const hasCodeFive = (value) => (value.toString()).trim().length === 6;
    const [FormValidity, setFormValidity]= useState({

        Name: true,
        Street: true,
        Postal: true,
        City: true
    });

    const NameRef = useRef();
    const StreetRef= useRef();
    const PostalRef= useRef();
    const CityRef= useRef();

    const confirmHandler=(event)=>{
        event.preventDefault();

        const enteredName = NameRef.current.value;
        const enteredStreet = StreetRef.current.value;
        const enteredPostal = PostalRef.current.value;
        const enteredCity = CityRef.current.value;
        console.log('enteredvalues',typeof(enteredName), enteredStreet, typeof(enteredPostal), enteredCity);

        const IsNameValid = !isEmpty(enteredName);
        const IsStreetValid = !isEmpty(enteredStreet);
        const IsCityValid = !isEmpty(enteredCity);
        const IsPostalValid = hasCodeFive(enteredPostal);

        setFormValidity({

            Name: IsNameValid,
            Street: IsStreetValid,
            Postal: IsPostalValid,
            City: IsCityValid
        })
        console.log('EnteredvaluesValidity', IsNameValid, IsStreetValid, IsPostalValid, IsCityValid);
        console.log('SetFOrmValifidty', FormValidity.Name, FormValidity.Street, FormValidity.Postal, FormValidity.City);
       
        const IsFormValid = IsNameValid && IsStreetValid && IsCityValid && IsPostalValid;

    if (!IsFormValid)
       {
           return;
       }

       //Submit Data Logic
       props.onSubmitData({
         name: enteredName,
         street: enteredStreet,
         postal: enteredPostal,
         city: enteredCity
       });
    }
return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className = {`${classes.control} ${FormValidity.Name ? '': classes.invalid}`} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={NameRef} />
        {!FormValidity.Name && <p>Enter Valid Name</p>}
      </div>
      <div className={`${classes.control} ${FormValidity.Street ? '': classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={StreetRef} />
        {!FormValidity.Street && <p>Enter Valid Street</p>}
      </div>
      <div className={`${classes.control} ${FormValidity.Postal ? '': classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={PostalRef}/>
        {!FormValidity.Postal && <p>Enter Valid Postal Code</p>}
      </div>
      <div className={`${classes.control} ${FormValidity.City ? '': classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={CityRef}/>
        {!FormValidity.City && <p>Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
)
}

export default Checkout