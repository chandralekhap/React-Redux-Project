import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducer/index';

ReactDOM.render(

<Provider store = {createStore(Reducers)}>
<App />
</Provider>


, document.querySelector('#root'));
