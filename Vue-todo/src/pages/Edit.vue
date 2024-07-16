<template>
    <div>
      <h1>Edit Task {{ taskId }}</h1>
      <!-- Form for editing task with taskId -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'Edit',
    setup() {
      const route = useRoute();
      const taskId = ref<number | string>(route.params.id as number | string);
  
      return {
        taskId,
      };
    },
  });
  </script>