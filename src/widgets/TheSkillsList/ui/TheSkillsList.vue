<script lang="ts" setup>
import { skills } from '@/entities/skill';
import { SkillsListItem } from '@/features/SkillsListItem';
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl font-semibold mb-8">Стек технологий</h2>
    <ul class="flex flex-wrap gap-4">
      <SkillsListItem v-for="skill in skills" :key="skill" :skill="skill" />
    </ul>
  </section>
</template>
