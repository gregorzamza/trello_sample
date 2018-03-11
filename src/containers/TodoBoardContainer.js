import { connect } from 'react-redux';
import { addTodoList, removeTodoList } from '../actions';
import TodoBoard from '../components/TodoBoard';

const mapToStateProps = state => {
  return {
    lists : state.lists
  }  
}

const mapToDispatchProps = dispatch => (
  {
    onAddTodoListClick: () => {
      dispatch(addTodoList("hello list", 1));
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