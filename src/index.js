import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleWare from './middleWare'
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(reducer , middleWare );

ReactDOM.render(
<Provider store={store}>
<App />                 
</Provider> 
   
  ,
  document.getElementById('root')
);

reportWebVitals();
