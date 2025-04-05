<script setup lang="ts">

// const props = defineProps<{
//   name: string,
//   title?: string
// }>()
//
// const nameAndTitle = computed<string>(() => {
//   return props.title ? `${props.name} - ${props.title}` : props.name
// })

</script>

<template>
  <div class="h-full w-full antialiased text-foreground bg-background bg-dots dark">
    <slot />
  </div>
</template>
