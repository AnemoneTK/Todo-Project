<template lang="">
  <div class="h-dvh w-dvw bg-light-gray flex flex-col justify-center items-center">
    <div>
      <input class="border border-primary px-3 py-2 text-base " type="text" v-model="newTask" placeholder="Add new task"/>
      <button class="border border-primary px-5 py-2 text-base transition-all 
      hover:bg-primary hover:text-white 
      disabled:opacity-50 disabled:bg-primary disabled:text-dark-gray disabled:hover:text-dark-gray" 
      :disabled="newTask.length == 0" @click="createTask">Add Task</button>
    </div>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{task.id}} . {{ task.name}} </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      newTask:'',
      tasks:[
        {
          id:1,
          name:"Task 1",
          status:true
        },
        {
          id:2,
          name:"Task 2",
          status:false
        },
        {
          id:3,
          name:"Task 3",
          status:false
        },
      ]
    }
  },
  methods:{
    createTask(){
      if(this.newTask != 0){
        this.tasks.push({
          id: this.tasks.length + 1,
          name:this.newTask,
          status:false
        })
        this.newTask = ''
      }
    },
  }
}
</script>
