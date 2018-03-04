import React from 'react';
import {render} from 'react-dom';
import TodoBoard from './components/TodoBoard';

class App extends React.Component {
  render () {
    return <TodoBoard />
  }
}

render(<App/>, document.getElementById('app'));