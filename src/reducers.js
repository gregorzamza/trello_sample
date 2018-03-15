import {ADD_TODO, ADD_TODOLIST, REMOVE_TODO, REMOVE_TODOLIST, 
  TOGGLE_TODO, ADD_TODOBOARD, REMOVE_TODOBOARD} from "./actions";
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

function boards(state = [], action){
  switch (action.type){
    case ADD_TODOBOARD:
      return [
        ...state,
        { id : action.payload.id, text : action.payload.text}
      ]
    case REMOVE_TODOBOARD:
      return [
        ...state.filter(board => board.id !== action.payload.id)
      ]
    default:
      return state
  }
}

function lists(state = [], action){
  switch (action.type){
    case ADD_TODOLIST:      
      return [
        ...state,
        { id : action.payload.id, text : action.payload.text, parentId : action.payload.parentId}
      ]
    case REMOVE_TODOLIST:
      return [
        ...state.filter(list => list.id !== action.payload.id)
      ]
    default:
      return state
  }
}

function todos(state = [], action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        { id : action.payload.id, text : action.payload.text, parentId : action.payload.parentId, completed : false }
      ]
    case TOGGLE_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id){
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      ]
    case REMOVE_TODO:
      return [
        ...state.filter(todo => todo.id !== action.payload.id)
      ]
    default:
      return state;
  }
}

const todoApp = combineReducers({
  boards,
  lists,
  todos,
  form: formReducer
})

export default todoApp;