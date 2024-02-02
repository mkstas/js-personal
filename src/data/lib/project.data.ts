import { IProject, IconEnum } from '@/types';

export const projects: IProject[] = [
  {
    name: 'go-scooter-pass',
    githubUrl: 'https://github.com/mkstas/vite-go-scooter-pass',
    technologies: [IconEnum.typeScript, IconEnum.vite, IconEnum.sass],
  },
  {
    name: 'personal',
    githubUrl: 'https://github.com/mkstas/vanilla-personal',
    technologies: [IconEnum.typeScript, IconEnum.vite, IconEnum.tailwind],
  },
  {
    name: 'todo-app',
    githubUrl: 'https://github.com/mkstas/vue-todo-app',
    technologies: [
      IconEnum.tailwind,
      IconEnum.typeScript,
      IconEnum.vue,
      IconEnum.pinia,
      IconEnum.vite,
    ],
  },
];
