<script lang="ts" setup>
import { ProjectType } from '@/shared/typicode';
import { ProjectsListItem } from '@/features/ProjectsListItem';

defineProps<{
  title: string;
  projects: ProjectType[];
}>();
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl font-semibold mb-8">{{ title }}</h2>
    <ul class="grid gap-4">
      <ProjectsListItem
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </ul>
  </section>
</template>
