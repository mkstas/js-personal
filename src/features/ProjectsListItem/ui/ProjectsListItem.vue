<script lang="ts" setup>
import { IconEnum, ProjectType } from '@/shared/typicode';
import { BaseIcon } from '@/shared/uikit';

defineProps<{
  project: ProjectType;
}>();
</script>

<template>
  <li class="py-4 px-6 shadow-xl rounded-2xl bg-slate-600">
    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
      <h3 class="text-xl text-white">{{ project.name }}</h3>
      <a
        v-if="project.urlGithub"
        class="flex items-center gap-2 text-white hover:underline"
        :href="project.urlGithub"
        target="_blank"
      >
        <BaseIcon :icon="IconEnum.github" class="w-4" />
        <span class="text-base">GitHub</span>
      </a>
      <a
        v-if="project.urlHtpp"
        class="flex items-center gap-2 text-white hover:underline"
        :href="project.urlHtpp"
        target="_blank"
      >
        <BaseIcon :icon="IconEnum.web" class="w-4" />
        <span class="text-base">site</span>
      </a>
    </div>
    <ul class="flex flex-wrap gap-2">
      <li
        class="flex items-center justify-center w-10 h-10 shadow-xl rounded-full bg-white"
        v-for="technology in project.technologies"
        :key="technology"
      >
        <BaseIcon :icon="technology" class="w-5 h-5" />
      </li>
    </ul>
  </li>
</template>
