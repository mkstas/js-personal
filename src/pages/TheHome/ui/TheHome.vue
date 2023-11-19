<script lang="ts" setup>
import { IconEnum } from '@/shared/typicode';
import { BaseIcon } from '@/shared/uikit';

const skills = [
  IconEnum.html,
  IconEnum.css,
  IconEnum.sass,
  IconEnum.tailwind,
  IconEnum.javaScript,
  IconEnum.typeScript,
  IconEnum.vue,
  IconEnum.vite,
  IconEnum.git,
];

const projects = [
  {
    name: 'Go Scooter Pass',
    url: 'https://github.com/mkstas/vite-go-scooter-pass',
    technologies: [
      IconEnum.html,
      IconEnum.css,
      IconEnum.javaScript,
      IconEnum.typeScript,
      IconEnum.vite,
    ],
  },
  {
    name: 'Simple',
    url: 'https://github.com/mkstas/vite-simple',
    technologies: [
      IconEnum.html,
      IconEnum.css,
      IconEnum.javaScript,
      IconEnum.typeScript,
      IconEnum.vite,
    ],
  },
];
</script>

<template>
  <div class="max-w-4xl mx-auto px-2">
    <section class="py-10">
      <h1 class="text-4xl font-semibold">Макаров Станислав</h1>
      <p class="mt-1 text-xl font-medium text-slate-500">
        frontend - разработка
      </p>
      <a
        class="flex items-center gap-2 mt-14 hover:underline"
        href="https://github.com/mkstas"
        target="_blank"
      >
        <BaseIcon :icon="IconEnum.github" class="h-8" />
        <span class="text-2xl font-medium">GitHub</span>
      </a>
    </section>
    <section class="py-10">
      <h2 class="text-3xl font-semibold">Стек технологий</h2>
      <div class="flex flex-wrap gap-4 mt-8">
        <div
          v-for="skill in skills"
          :key="skill"
          class="flex items-center justify-center w-20 h-20 shadow-xl rounded-full bg-slate-600"
        >
          <BaseIcon :icon="skill" class="h-10 w-10" />
        </div>
      </div>
    </section>
    <section class="py-10">
      <h2 class="text-3xl font-semibold">Личные проекты</h2>
      <div class="grid gap-4 mt-8">
        <div
          v-for="project in projects"
          :key="project.name"
          class="shadow-xl py-4 px-6 rounded-2xl bg-slate-600"
        >
          <div class="flex items-center gap-6">
            <h3 class="text-xl text-white">{{ project.name }}</h3>
            <a
              class="flex items-center gap-2 hover:underline text-white"
              :href="project.url"
              target="_blank"
            >
              <BaseIcon :icon="IconEnum.github" class="w-6" />
              <span class="text-white font-medium">GitHub</span>
            </a>
          </div>
          <div class="flex gap-2 mt-4">
            <div
              v-for="technology in project.technologies"
              :key="technology"
              class="flex items-center justify-center rounded-full bg-white w-11 h-11 shadow-xl"
            >
              <BaseIcon :icon="technology" class="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
