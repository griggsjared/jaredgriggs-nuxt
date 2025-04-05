<script setup lang="ts">
import Portrait from '~/components/Portrait.vue'
import Title from '~/components/Title.vue'
import SocialIcons from '~/components/SocialIcons.vue'

type Subject = {
  name: string;
  title?: string | undefined;
  linkedin?: string | undefined;
  github?: string | undefined;
};

const subject: Subject = {
  name: "Jared Griggs",
  title: "Full Stack Software Developer",
  linkedin: "https://www.linkedin.com/in/jared-griggs-8aa84023",
  github: "https://github.com/griggsjared",
};

const nameAndTitle = computed<string>(() => {
  return subject.title ? `${subject.name} - ${subject.title}` : subject.name
})

useHead({
  title: nameAndTitle,
  meta: [
    { name: 'description', content: nameAndTitle },
  ],
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-screen gap-6 p-6">
      <div class="flex flex-col items-center justify-center gap-2">
        <Portrait :name="subject.name" />
        <Title :name="subject.name" :title="subject.title" />
        <SocialIcons :name="subject.name" :linkedin="subject.linkedin" :github="subject.github" />
      </div>
    </div>
  </NuxtLayout>
</template>
