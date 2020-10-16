import * as _ from 'lodash'
import * as TodoTypes from './type'

const initState = {
  currentTodo: [{
    todo: 'Make a new app',
    state: true,
  }, {
    todo: 'Do homework',
    state: true,
  }, {
    todo: 'Live Stream',
    state: true,
  }, {
    todo: 'Make  hihi',
    state: false,
  }, {
    todo: 'Do haha',
    state: false,
  }, {
    todo: 'likedi',
    state: false,
  }],
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TodoTypes.ADD_NEW_TODO:
      if (state.currentTodo.some((t) => t.todo === action.payload.data) || action.payload.data === '') { return state }
      return { ...state, currentTodo: [...state.currentTodo, { todo: action.payload.data, state: true }] }
    case TodoTypes.MARK_TODO_DONE:

      return {
        ...state,
        currentTodo: [...state.currentTodo, { ...state.currentTodo[_.findIndex(state.currentTodo, { todo: action.payload.data })], state: false }],
      }
    case TodoTypes.RETURN_NEW_TODO:
      return {
        ...state, currentTodo: [...state.currentTodo, { ...state.currentTodo[_.findIndex(state.currentTodo, { todo: action.payload.data })], state: true }],
      }
    case TodoTypes.DELETE_TODO:
      return {
        ...state,
        currentTodo: state.currentTodo.filter((t) => { return t.todo !== action.payload.data }),
      }
    default:
      return state
  }
}

export default todoReducer
