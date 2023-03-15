<template>
  <h1>todo-list</h1>
  <input />
  <div  >
    <TodoItem v-for="todo in todos" :key="todo.id" />
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "../store/todo";

const { todos } = useTodoStore();

</script>

<style lang="scss" scoped></style>
