import { IconEnum, ProjectType } from '@/shared/typicode';

export const projects: ProjectType[] = [
  {
    name: 'Go Scooter Pass',
    url: 'https://github.com/mkstas/vite-go-scooter-pass',
    technologies: [
      IconEnum.vite,
      IconEnum.html,
      IconEnum.css,
      IconEnum.sass,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
  {
    name: 'Simple',
    url: 'https://github.com/mkstas/vite-simple',
    technologies: [
      IconEnum.vite,
      IconEnum.html,
      IconEnum.css,
      IconEnum.sass,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
  {
    name: 'Rubicko',
    url: 'https://github.com/mkstas/vue-rubicko',
    technologies: [
      IconEnum.vite,
      IconEnum.vue,
      IconEnum.pinia,
      IconEnum.css,
      IconEnum.tailwind,
      IconEnum.javaScript,
      IconEnum.nodejs,
      IconEnum.mongo,
    ],
  },
  {
    name: 'Task Tracker',
    url: 'https://github.com/mkstas/vue-task-tracker',
    technologies: [
      IconEnum.vite,
      IconEnum.vue,
      IconEnum.pinia,
      IconEnum.css,
      IconEnum.tailwind,
      IconEnum.javaScript,
      IconEnum.typeScript,
      IconEnum.firebase,
    ],
  },
  {
    name: 'Personal',
    url: 'https://github.com/mkstas/vue-personal',
    technologies: [
      IconEnum.vite,
      IconEnum.vue,
      IconEnum.css,
      IconEnum.tailwind,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
];

export const isProjectsExist = (): Boolean => {
  return !!(projects.length > 0);
};
