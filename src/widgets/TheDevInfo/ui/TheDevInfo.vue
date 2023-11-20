<script lang="ts" setup>
import { IconEnum } from '@/shared/typicode';
import { BaseIcon } from '@/shared/uikit';
</script>

<template>
  <section class="py-10">
    <h1 class="text-4xl font-semibold">Макаров Станислав</h1>
    <p class="mt-1 text-xl font-medium text-slate-500">frontend - разработка</p>
    <a
      class="flex items-center gap-2 mt-14 hover:underline"
      href="https://github.com/mkstas"
      target="_blank"
    >
      <BaseIcon :icon="IconEnum.github" class="h-8" />
      <span class="text-2xl font-medium">GitHub</span>
    </a>
  </section>
</template>
