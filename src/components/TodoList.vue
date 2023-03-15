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

</style>
