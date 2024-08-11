<script setup>
import { onMounted, ref } from "vue";
import { useTodoStore } from "../stores/todos";
import { RouterLink } from "vue-router";
import Loading from "vue-loading-overlay";

const todoStore = useTodoStore();
const todoText = ref("");

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await todoStore.getTodos();
  isLoading.value = false;
});

//create new todo
const createTodo = async (todoText) => {
  try {
    isLoading.value = true;
    await todoStore.create(todoText);
    await todoStore.getTodos();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

//edit status
const editStatus = async (todo, id) => {
  try {
    isLoading.value = true;
    const data = {
      name: todo.name,
      status: todo.status,
    };
    await todoStore.edit(data, id);
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

//delete todo
const deleteTodo = async (id) => {
  try {
    isLoading.value = true;
    await todoStore.delete(id);
    await todoStore.getTodos();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div>
    <div>
      <input type="text" v-model="todoText" />
      <button @click="createTodo(todoText)">Add</button>
    </div>

    <div>
      <div v-if="isLoading">
        <loading
          :active.sync="isLoading"
          :is-full-page="true"
          color="#007bff"
          loader="dots"
        >
        </loading>
      </div>
      <div v-else>
        <ul>
          <li v-for="todo in todoStore.todoList" :key="todo.id">
            {{ todo.id }} {{ todo.name }}
            <select v-model="todo.status" @change="editStatus(todo, todo.id)">
              <option
                v-for="status in todoStore.status"
                :key="status"
                :value="status"
              >
                {{ status ? "Done" : "Waiting" }}
              </option>
            </select>
            <RouterLink :to="{ name: 'edit', params: { id: todo.id } }">
              <button>Edit</button>
            </RouterLink>
            <button @click="deleteTodo(todo.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
