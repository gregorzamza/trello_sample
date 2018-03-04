export const ADD_TODO = 'ADD_TODO'
export const ADD_TODOLIST = 'ADD_TODOLIST'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_TODOLIST = 'REMOVE_TODOLIST'

export function addTodo(text){
  return {type: ADD_TODO, payload: {text}, error: false};
}

export function addTodoList(text){
  return {type: ADD_TODOLIST, payload: {text}, error: false};
}

export function toggleTodo(index){
  return {type: TOGGLE_TODO, payload: {index}, error: false};
}

export function removeTodo(index){
  return {type: REMOVE_TODO, payload: {index}, error: false};
}

export function removeTodoList(index){
  return {type: REMOVE_TODOLIST, payload: {index}, error: false}
}