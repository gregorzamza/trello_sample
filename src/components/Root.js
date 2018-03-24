import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardListContainer from '../containers/BoardListContainer';
import TodoBoardContainer from '../containers/TodoBoardContainer';

const Root = () => (
  <div className="global-container">
    <Switch>
      <Route exact path="/" component={BoardListContainer} />
      <Route path="/board/:id" component={TodoBoardContainer} />
    </Switch>
  </div>  
)

export default Root