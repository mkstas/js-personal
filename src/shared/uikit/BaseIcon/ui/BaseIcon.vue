<script lang="ts" setup>
import { IconEnum } from '@/shared/typicode';

const props = defineProps<{
  icon: IconEnum;
}>();

const src = `/src/shared/icons/${props.icon}.svg`;
const alt = `Иконка ${props.icon}`;
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
