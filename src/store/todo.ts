import { defineStore } from "pinia";
import { ref } from "vue";

export interface Todo {
  title: string;
  id: number;
}

let id = 1;
export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  function addTodo(title: string) {
    const trimTitle = title.replace(/\s*/g, "");

    if (trimTitle.startsWith("top:")) {
      title = trimTitle.slice(4);
      todos.value.unshift({ title: title, id: id++ });
    } else if (trimTitle.startsWith("reverse:")) {
      title = trimTitle.slice(8).split("").reverse().join("");
      todos.value.push({ title: title, id: id++ });
    } else {
      todos.value.push({ title: title, id: id++ });
    }
    return { title: title, id: id++ }
  }

  function removeTodo(id: number) {
    // store 里面不能直接赋值
    // todos.value = todos.value.filter((todo) => todo.id !== id);
    const index = todos.value.findIndex((todo) => todo.id === id)
    todos.value.splice(index,1)
    console.log('now',todos.value)
  }

  return { todos, addTodo, removeTodo };
});
