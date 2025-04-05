<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="border-6 border-solid border-green overflow-hidden">
    <NuxtImg
      src="images/portrait2.jpg"
      class="w-full h-full object-cover"
      :alt="'Portrait of ' + name"
      loading="eager"
      width="240"
      height="304"
    />
  </div>
</template>
