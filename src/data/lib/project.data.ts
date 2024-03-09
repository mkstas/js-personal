import { IProject, IconEnum } from '@/types';

export const projects: IProject[] = [
  {
    name: 'vue-sneakers',
    githubUrl: 'https://github.com/mkstas/vue-todo-app',
    technologies: [
      IconEnum.tailwind,
      IconEnum.typeScript,
      IconEnum.vue,
      IconEnum.pinia,
      IconEnum.axios,
      IconEnum.vite,
    ],
  },
  {
    name: 'vue-todo-app',
    githubUrl: 'https://github.com/mkstas/vue-todo-app',
    technologies: [
      IconEnum.tailwind,
      IconEnum.typeScript,
      IconEnum.vue,
      IconEnum.pinia,
      IconEnum.vite,
    ],
  },
  {
    name: 'vanilla-personal',
    githubUrl: 'https://github.com/mkstas/vanilla-personal',
    technologies: [IconEnum.tailwind, IconEnum.typeScript, IconEnum.vite],
  },
  {
    name: 'vanilla-go-scooter-pass',
    githubUrl: 'https://github.com/mkstas/vite-go-scooter-pass',
    technologies: [IconEnum.sass, IconEnum.typeScript, IconEnum.vite],
  },
  {
    name: 'vanilla-simple',
    githubUrl: 'https://github.com/mkstas/vanilla-simple',
    technologies: [IconEnum.sass, IconEnum.typeScript, IconEnum.vite],
  },
];
