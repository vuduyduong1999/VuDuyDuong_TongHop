import * as TodoTypes from './type'

export const addNewTodo = (data) => {
  return {
    type: TodoTypes.ADD_NEW_TODO,
    payload: { data },
  }
}

export const deleteTodo = (data) => {
  return {
    type: TodoTypes.DELETE_TODO,
    payload: { data },
  }
}
export const returnNewTodo = (data) => {
  return {
    type: TodoTypes.RETURN_NEW_TODO,
    payload: { data },
  }
}
export const doneTodo = (data) => {
  return {
    type: TodoTypes.MARK_TODO_DONE,
    payload: { data },
  }
}
