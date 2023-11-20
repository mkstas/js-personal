<script lang="ts" setup>
import { projects } from '@/entities/project';
import { ProjectsListItem } from '@/features/ProjectsListItem';
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl font-semibold mb-8">Личные проекты</h2>
    <ul class="grid gap-4">
      <ProjectsListItem
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </ul>
  </section>
</template>
