<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <TodoHeader @addTodo="addTodo"/> -->
      <TodoHeader/>
      <TodoList/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './util/storageUtil'

export default {

  mounted(){
    //给<TodoHeader>绑定addTodo事件监听
    // this.$refs.header.$on('addTodo',this.addTodo)
    // PubSub.subscribe('deleteTodo',(msg,index)=>{
    //   this.deleteTodo(index)
    // })
    this.$store.dispatch("reqTodos")
  },
  // computed:{
  //   completeSize(){
  //     return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
  //   },
  //   isAllCheck:{
  //     get(){
  //       return this.completeSize===this.todos.length && this.completeSize>0
  //     },
  //     set(value){
  //       this.selectAllTodos(value)
  //     }
  //   }
  // },
  methods:{
    // addTodo(todo){
    //   this.todos.unshift(todo)
    // },
    // deleteTodo(index){
    //   this.todos.splice(index,1)
    // },
    // //删除所有选中的
    // deleteCompleteTodos(){
    //   this.todos=this.todos.filter(todo=> !todo.complete)
    // },
    // //全选或是全不选
    // selectAllTodos(check){
    //   this.todos.forEach(todo=>todo.complete=check)
    // }
  },

  // watch:{
  //   todos:{
  //     deep:true,
  //     handler:function(value){
  //       //将todos最新的值得json数据，保存到localstorage
  //       // window.localStorage.setItem('todos_key',JSON.stringify(value))
  //       storageUtil.saveTodos(value)
  //     }
  //   }
  // },

  components:{
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
