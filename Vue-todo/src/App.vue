<template lang="">
  <div class="h-dvh w-dvw bg-primary flex flex-col justify-center items-center">
    
  </div>
</template>
<script>
export default {
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
