<script lang="ts" setup>
import { IconEnum } from '@/shared/typicode';
import { BaseIcon } from '@/shared/uikit';

defineProps<{
  skill: IconEnum;
}>();
</script>

<template>
  <li
    class="flex items-center justify-center w-20 h-20 shadow-xl rounded-full bg-slate-600"
  >
    <BaseIcon :icon="skill" class="h-10 w-10" />
  </li>
</template>
