<template>
  <div class="main">
    <h1>待办清单</h1>
      <input v-model="inputValue" @keypress.enter="() => addTodo(inputValue)" />
      <div>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "../store/todo";

const { todos, addTodo } = useTodoStore();

const inputValue = ref<string>("");
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 10px;
  border-radius: 4px;
}
</style>
