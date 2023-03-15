import { defineStore } from "pinia";
import { ref } from "vue";

export interface Todo {
  title: string;
  id: number;
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([
    { title: "xxx", id: 1 },
    { title: "xxx2", id: 2 },
  ]);

  function addTodo(title: string) {}
  return { todos, addTodo };
});
