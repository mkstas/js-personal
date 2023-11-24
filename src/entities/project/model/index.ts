import { IconEnum, ProjectType } from '@/shared/typicode';

export const projects: ProjectType[] = [
  {
    name: 'Go Scooter Pass',
    urlGithub: 'https://github.com/mkstas/vite-go-scooter-pass',
    urlHtpp: 'https://vite-go-scooter-pass.vercel.app/',
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
    urlGithub: 'https://github.com/mkstas/vite-simple',
    urlHtpp: 'https://vite-simple-gamma.vercel.app/',
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
    urlGithub: 'https://github.com/mkstas/vue-rubicko',
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
    urlGithub: 'https://github.com/mkstas/vue-task-tracker',
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
    urlGithub: 'https://github.com/mkstas/vue-personal',
    urlHtpp: 'https://vue-personal.vercel.app/',
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
