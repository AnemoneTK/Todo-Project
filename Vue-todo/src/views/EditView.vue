<script setup>
import { onMounted, ref } from "vue";
import { useTodoStore } from "../stores/todos";
import { useRoute, RouterLink } from "vue-router";

const todoStore = useTodoStore();
const route = useRoute();
const todoId = ref(0);
const isLoading = ref(false);

onMounted(async () => {
  await todoStore.getTodo(route.params.id);
  todoId.value = parseInt(route.params.id);
  isLoading.value = true;
});

const saveEdit = async (dataEdit) => {
  try {
    const data = {
      name: dataEdit.name,
      status: dataEdit.status,
    };
    await todoStore.edit(data, todoId.value);
    alert("Update");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div>
    <div v-if="!isLoading">Loading...</div>
    <div v-else>Edit id {{ todoId }}</div>
    <div>
      <RouterLink :to="{ name: 'home' }">
        <button>Back</button>
      </RouterLink>
    </div>
    Name : <input type="text" v-model="todoStore.selected.name" />
    <select v-model="todoStore.selected.status">
      <option v-for="status in todoStore.status" :key="status" :value="status">
        {{ status ? "Done" : "Waiting" }}
      </option>
    </select>

    <button @click="saveEdit(todoStore.selected)">Save</button>
  </div>
</template>
