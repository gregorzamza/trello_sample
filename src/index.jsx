import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

let store = createStore(todoApp)

render(  
  <Provider store={store}>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);