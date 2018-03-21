import { connect } from 'react-redux';
import { addTodoBoard, removeTodoBoard } from '../actions';
import BoardList from '../components/BoardList';

const mapToStateProps = state => {
  return {
    boards : state.boards
  }
}

const mapToDispatchProps = {
  onAddTodoBoardClick: addTodoBoard,
  onRemoveTodoBoardClick: removeTodoBoard,
}

const BoardListContainer = connect(
  mapToStateProps,
  mapToDispatchProps,
)(BoardList);

export default BoardListContainer