import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions';
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todos : state.todos,
  }
}

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