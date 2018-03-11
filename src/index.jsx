import React from 'react';
import {render} from 'react-dom';
import BoardListContainer from './containers/BoardListContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

let store = createStore(todoApp)

class App extends React.Component {
  render () {
    return <BoardListContainer />
  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('app')
);