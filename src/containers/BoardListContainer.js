import { connect } from 'react-redux';
import { addTodoBoard, removeTodoBoard } from '../actions';
import BoardList from '../components/BoardList';

const mapToStateProps = state => {
  return {
    boards : state.boards
  }
}

const mapToDispatchProps = dispatch => (
  {
    onAddTodoBoardClick: (name) => {
      dispatch(addTodoBoard(name));
    },
    onRemoveTodoBoardClick: (id) => {
      dispatch(removeTodoBoard(id));
    }
  }
)

const BoardListContainer = connect(
  mapToStateProps,
  mapToDispatchProps,
)(BoardList);

export default BoardListContainer