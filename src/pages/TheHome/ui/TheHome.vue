<script lang="ts" setup>
import { isDeveloperExist } from '@/entities/developer';
import { isSkillsExist } from '@/entities/skill';
import {
  projectsNew,
  projectsOld,
  isNewProjectsExist,
  isOldProjectsExist,
} from '@/entities/project';

import { TheDevInfo } from '@/widgets/TheDevInfo';
import { TheSkillsList } from '@/widgets/TheSkillsList';
import { TheProjectsList } from '@/widgets/TheProjectsList';
</script>

<template>
  <main class="max-w-4xl mx-auto px-2">
    <TheDevInfo v-if="isDeveloperExist()" />
    <TheSkillsList v-if="isSkillsExist()" />
    <TheProjectsList
      v-if="isNewProjectsExist()"
      :projects="projectsNew"
      title="Наилучшие работы"
    />
    <TheProjectsList
      v-if="isOldProjectsExist()"
      :projects="projectsOld"
      title="Все работы"
    />
  </main>
</template>
