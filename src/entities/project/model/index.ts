import { IconEnum, ProjectType } from '@/shared/typicode';

export const projectsNew: ProjectType[] = [
  {
    name: 'Todo App',
    urlGithub: 'https://github.com/mkstas/vue-todo-app',
    technologies: [
      IconEnum.vite,
      IconEnum.vue,
      IconEnum.tailwind,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
  {
    name: 'Go Scooter Pass',
    urlGithub: 'https://github.com/mkstas/vite-go-scooter-pass',
    urlHtpp: 'https://vite-go-scooter-pass.vercel.app/',
    technologies: [
      IconEnum.vite,
      IconEnum.html,
      IconEnum.sass,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
  {
    name: 'Personal',
    urlGithub: 'https://github.com/mkstas/vue-personal',
    urlHtpp: 'https://vue-personal.vercel.app/',
    technologies: [
      IconEnum.vite,
      IconEnum.vue,
      IconEnum.tailwind,
      IconEnum.javaScript,
      IconEnum.typeScript,
    ],
  },
];

export const projectsOld: ProjectType[] = [
  {
    name: 'Simple',
    urlGithub: 'https://github.com/mkstas/vite-simple',
    urlHtpp: 'https://vite-simple-gamma.vercel.app/',
    technologies: [
      IconEnum.vite,
      IconEnum.html,
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
    name: 'Calculator',
    urlGithub: 'https://github.com/mkstas/vue-calculator',
    urlHtpp: 'https://vue-calculator-neon.vercel.app/',
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

export const isNewProjectsExist = (): Boolean => {
  return !!(projectsNew.length > 0);
};

export const isOldProjectsExist = (): Boolean => {
  return !!(projectsOld.length > 0);
};
