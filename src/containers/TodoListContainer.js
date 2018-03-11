import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions';
import TodoList from '../components/TodoList'

const mapStateToProps = (state, props) => {
  return {
    todos : state.todos.filter(todo => todo.parentId === props.id)
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
    onAddTodoClick: (parentId) => {
      dispatch(addTodo("hello", parentId));
    }
  }
)

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;