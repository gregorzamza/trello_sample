import {ADD_TODO, ADD_TODOLIST, REMOVE_TODO, REMOVE_TODOLIST, 
  TOGGLE_TODO, ADD_TODOBOARD, REMOVE_TODOBOARD} from "./actions";

const initialState = {
  entities : {
    boards: [],
    lists: [],
    todos: [],
  }    
}

function boards(state = [], action){
  switch (action.type){
    case ADD_TODOBOARD:
      let board = { id : state.length, text : action.payload.text }
      return {
        ...state,
        board
      }
    case REMOVE_TODOBOARD:
      return {
        ...state.filter(board => board.id !== action.payload.id)
      }
  }
}

function lists(state = [], action){
  switch (action.type){
    case ADD_TODOLIST:
      let list = { id : state.length, text : action.payload.text }
      return {
        ...state,
        list
      }
    case REMOVE_TODOLIST:
      return {
        ...state.filter(list => list.id !== action.payload.id)
      }
  }
}

function todos(state = [], action){
  switch (action.type){
    case ADD_TODO:
      let todo = { id : state.length, text : action.payload.text }
      return {
        ...state,
        todo
      }
    case TOGGLE_TODO:
      return {
        ...state.map((todo, index) => {
          if (todo.id === index){
            return {
              ...todo,
              completed = !todo.completed,
            }
          }
          return todo;
        })
      }
    case REMOVE_TODO:
      return {
        ...state.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state;
  }
}