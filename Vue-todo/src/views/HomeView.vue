<script setup>
import { onMounted } from "vue";
import { useTodoStore } from "../stores/todos";

const todoStore = useTodoStore();

onMounted(async () => {
  await todoStore.getTodos();
});
</script>
<template>
  <div>
    Home
    <ul>
      <li v-for="todo in todoStore.todoList" :key="todo.id">
        {{ todo.id }} {{ todo.name }} {{ todo.status }}

        <button>Edit</button>
        <button>Delete</button>
      </li>
    </ul>
  </div>
</template>
