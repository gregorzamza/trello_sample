import { connect } from 'react-redux';
import { addTodoList, removeTodoList } from '../actions';
import TodoBoard from '../components/TodoBoard';

const mapToStateProps = (state, props) => {
  return {
    lists : state.lists.filter(list => list.parentId === props.id)
  }
}

const mapToDispatchProps = dispatch => (
  {
    onAddTodoListClick: (parentId) => {
      dispatch(addTodoList("hello list", parentId));
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