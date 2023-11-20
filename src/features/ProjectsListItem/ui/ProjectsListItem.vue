<script lang="ts" setup>
import { IconEnum, ProjectType } from '@/shared/typicode';
import { BaseIcon } from '@/shared/uikit';

defineProps<{
  project: ProjectType;
}>();
</script>

<template>
  <li class="py-4 px-6 shadow-xl rounded-2xl bg-slate-600">
    <div class="flex flex-wrap items-center gap-6 mb-4">
      <h3 class="text-xl text-white">{{ project.name }}</h3>
      <a
        class="flex items-center gap-2 text-white hover:underline"
        :href="project.url"
        target="_blank"
      >
        <BaseIcon :icon="IconEnum.github" class="w-6" />
        <span class="text-xl">GitHub</span>
      </a>
    </div>
    <ul class="flex flex-wrap gap-2">
      <li
        class="flex items-center justify-center w-12 h-12 shadow-xl rounded-full bg-white"
        v-for="technology in project.technologies"
        :key="technology"
      >
        <BaseIcon :icon="technology" class="w-6 h-6" />
      </li>
    </ul>
  </li>
</template>
