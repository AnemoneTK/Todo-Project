import { defineStore } from "pinia";
import axios from "axios";

const URL = "https://6662b06962966e20ef0985b2.mockapi.io";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoList: [],
    selected: {},
    status: [true, false],
  }),
  actions: {
    async getTodos() {
      try {
        const res = await axios.get(`${URL}/todos`);
        this.todoList = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getTodo(id) {
      try {
        const res = await axios.get(`${URL}/todos/${id}`);
        this.selected = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async create(todoText) {
      const data = {
        name: todoText,
        status: false,
      };
      try {
        const res = await axios.post(`${URL}/todos`, data);
        console.log("add complete");
      } catch (error) {
        console.log(error);
      }
    },

    async edit(editData, id) {
      try {
        const res = await axios.put(`${URL}/todos/${id}`, editData);
        console.log("edit complete");
      } catch (error) {
        console.log(error);
      }
    },

    async delete(id) {
      try {
        const res = await axios.delete(`${URL}/todos/${id}`);
        console.log("delete complete");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
