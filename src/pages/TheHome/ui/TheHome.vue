<script lang="ts" setup>
import { isDeveloperExist } from '@/entities/developer';
import { TheDevInfo } from '@/widgets/TheDevInfo';
import { TheSkillsList } from '@/widgets/TheSkillsList';
import { TheProjectsList } from '@/widgets/TheProjectsList';
</script>

<template>
  <main class="max-w-4xl mx-auto px-2">
    <TheDevInfo v-if="isDeveloperExist()" />
    <TheSkillsList />
    <TheProjectsList />
  </main>
</template>
