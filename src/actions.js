export const ADD_TODO = 'ADD_TODO'
export const ADD_TODOLIST = 'ADD_TODOLIST'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
export const ADD_TODOBOARD = 'ADD_TODOBOARD'
export const REMOVE_TODOBOARD = 'REMOVE_TODOBOARD'

export function addTodo(text){
  return {type: ADD_TODO, payload: {text}, error: false};
}

export function addTodoList(text){
  return {type: ADD_TODOLIST, payload: {text}, error: false};
}

export function toggleTodo(id){
  return {type: TOGGLE_TODO, payload: {id}, error: false};
}

export function removeTodo(id){
  return {type: REMOVE_TODO, payload: {id}, error: false};
}

export function removeTodoList(id){
  return {type: REMOVE_TODOLIST, payload: {id}, error: false}
}

export function addTodoBoard(text){
  return {type: ADD_TODOBOARD, payload: {text}, error: false};
}

export function removeTodoBoard(id){
  return {type: REMOVE_TODOBOARD, payload: {id}, error: false}
}