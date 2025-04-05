<script setup lang="ts">
defineProps<{
  name: string
  title?: string
}>()
</script>

<template>
  <h1 class="font-bold text-5xl">{{name}}</h1>
  <h2 v-if="title" class="font-semibold text-2xl">{{title}}</h2>
</template>

