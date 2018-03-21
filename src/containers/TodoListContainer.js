import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions';
import TodoList from '../components/TodoList'

const mapStateToProps = (state, props) => {
  return {
    todos : state.todos.filter(todo => todo.parentId === props.id)
  }
}

const mapDispatchToProps = {
  onToggleTodoClick : toggleTodo,
  onRemoveTodoClick : removeTodo,
  onAddTodoClick : addTodo,
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;