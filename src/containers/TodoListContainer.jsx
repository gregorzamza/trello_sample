import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions';

const mapStateToProps = state => (
  todos, onRemoveTodoListClick
)

const mapDispatchToProps = dispatch => (
  {
    onToggleTodoClick: id => {
      dispatch(toggleTodo(id));
    }, 
    onRemoveTodoClick: id => {
      dispatch(removeTodo(id));
    },
    onAddTodoClick: () => {
      dispatch(addTodo("hello"));
    }
  }
)

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;