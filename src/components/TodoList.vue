<!-- TodoList.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input 
          v-if="editedIndex === index" 
          v-model="editedTask"
          @keyup.enter="taskStore.finishEditing(index)"
          ref="editInput"
        />
        <span v-else @click="taskStore.startEditing(index)">{{ todo }}</span>
        <button @click="taskStore.removeTask(index)">Supprimer</button>
      </li>
    </ul>
    <form @submit.prevent="taskStore.addTask">
      <input v-model="newTask" placeholder="Ajouter une tâche" />
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useTaskStore } from '../store/taskStore';
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
const { todos } = storeToRefs(taskStore);
const { newTask } = storeToRefs(taskStore);
const { editedIndex } = storeToRefs(taskStore);
const { editedTask } = storeToRefs(taskStore);

const props = defineProps(['title']);

// const todos = ref([]);
// const newTask = ref('');
// const editedIndex = ref(-1);
// const editedTask = ref('');

// const addTask = () => {
//   if (newTask.value.trim()) {
//     todos.value.push(newTask.value.trim());
//     newTask.value = '';
//   }
// };

// const removeTask = (index) => {
//   todos.value.splice(index, 1);
// };

// const startEditing = (index) => {
//   editedIndex.value = index;
//   editedTask.value = todos.value[index];
// };

// const finishEditing = (index) => {
//   if (editedTask.value.trim()) {
//     todos.value[index] = editedTask.value.trim();
//   }
//   editedIndex.value = -1;
// };

</script>

<style scoped>
/* Vous pouvez ajouter ici des styles spécifiques à ce composant */
</style>
