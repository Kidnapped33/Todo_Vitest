<template>
  <input />
  <ul v-for="item in todoList" :key="item">
    <li>
      {{ item }}
      <button>remove</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const todoList = ref<Array<any>>([10, 20, 30]);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
