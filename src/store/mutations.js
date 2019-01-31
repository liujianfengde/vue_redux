//包含多个由action触发去直接更新状态的方法的属性

import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,CLEAR_ALL_COMPLETED,RECEIVE_TODOS} from './mutation-types'

export default{
  [ADD_TODO] (state,{todo}){
    //提交对mutation的请求
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state,{index}){
    //提交对mutation的请求
    state.todos.splice(index,1)
  },
  [SELECT_ALL_TODOS](state,{check}){
    state.todos.forEach(todo=>todo.complete = check)
  },
  [CLEAR_ALL_COMPLETED](state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS](state,todos){
    state.todos = todos
  }
}
