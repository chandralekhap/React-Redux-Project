import {Component } from 'react'
import { Form, Button , FormGroup, FormControl, FormLabel} from 'react-bootstrap';

class SearchReceipe extends Component{

    constructor(){

        super();
        this.state = {
            
            Ingredients :'',
            Dish : ''
        }
    }

    search()
    {    let {ingredient, dish}= this.state;
        
        const URL = `http://www.goggle.com/api/?i=${this.state.Ingredients}&q=${this.state.Dish}`
       // console.log('this.state', this.state, URL);

       fetch(URL, {
           method: 'GET'
       }).then(response=>response.json()).then(data=> console.log(data));
    }
    render(){

        return(
            <Form inline>
            <FormGroup>
                <FormLabel>Ingredients</FormLabel>
                { ' ' }
                <FormControl type='text'
                 placeholder='garlic, Chicken'
                 onChange = {event=>{this.setState({Ingredients: event.target.value})}}
                 ></FormControl>
            </FormGroup>
            { ' ' }
            <FormGroup>
            <FormLabel>Dishes</FormLabel>
            { ' ' }
                <FormControl type='text' 
                placeholder='Odoba'
                onChange = {event=>{this.setState({Dish: event.target.value})}}
                ></FormControl>
            </FormGroup>
            { ' ' }
            <Button onClick= {()=>this.search() }>Submit</Button>
            </Form>
        )
    }

}

export default SearchReceipe;