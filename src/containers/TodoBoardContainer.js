import { connect } from 'react-redux';
import { addTodoList, removeTodoList } from '../actions';
import TodoBoard from '../components/TodoBoard';

const mapToStateProps = (state, props) => {
  const id = +props.match.params.id;
  return {    
    lists : state.lists.filter(list => list.parentId === id),
    text : state.boards.find(board => board.id === id).text,
    id : id,
  }
}

const mapToDispatchProps = {
  onAddTodoListClick: addTodoList,
  onRemoveTodoListClick: removeTodoList,
}

const TodoBoardContainer = connect(
  mapToStateProps,
  mapToDispatchProps,
)(TodoBoard);

export default TodoBoardContainer