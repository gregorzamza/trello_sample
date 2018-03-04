import React from 'react';
import { connect } from 'react-redux';
import { addTodoList, removeTodoList } from '../actions';
import TodoBoard from '../components/TodoBoard';

const mapToStateProps = state => {
  lists
}

const mapToDispatchProps = dispatch => (
  {
    onListAddClick: () => {
      dispatch(addTodoList("hello list"));
    },
    onRemoveTodoListClick: (id) => {
      dispatch(removeTodoList(id));
    }
  }
)

const TodoBoardContainer = connect(
  mapToStateProps,
  mapToDispatchProps,
)(TodoBoard);

export default TodoBoardContainer