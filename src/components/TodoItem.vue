<template>
  <div class="item">
    <h3>{{ todo.title }}</h3>
    <div>
      <button @click="todoStore.removeTodo(todo.id)">
        remove
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Todo, useTodoStore } from "../store/todo";

defineProps<{
  todo: Todo;
}>();

const todoStore = useTodoStore();

</script>

<style scoped>
  .item {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
</style>
