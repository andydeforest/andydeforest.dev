<template>
  <a href="resume.pdf" target="_blank" @click="handleClick">Résumé</a>
</template>

<script setup lang="ts">
  const emit = defineEmits(['click']);

  function handleClick(event: MouseEvent) {
    emit('click', event);
  }
</script>
