<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in $store.state.todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem.vue'
  import storageUtil from '../util/storageUtil'

  export default {
    computed:{
      ...mapState(["todos"])
    },
    watch:{//监视todos的变化
      todos:{
        deep:true,
        handler:storageUtil.saveTodos
      }
    },
    components:{
      TodoItem
    }
  }
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>
