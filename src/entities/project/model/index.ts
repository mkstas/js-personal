import { IconEnum, ProjectType } from '@/shared/typicode';

export const projectsNew: ProjectType[] = [
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
];

export const projectsOld: ProjectType[] = [
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
  {
    name: 'Turtle (client)',
    urlGithub: 'https://github.com/mkstas/react-turtle',
    technologies: [
      IconEnum.react,
      IconEnum.css,
      IconEnum.sass,
      IconEnum.javaScript,
    ],
  },
  {
    name: 'Turtle (server)',
    urlGithub: 'https://github.com/mkstas/php-turtle',
    technologies: [IconEnum.php, IconEnum.mysql],
  },
  {
    name: 'Printy',
    urlGithub: 'https://github.com/mkstas/laravel-printy',
    technologies: [IconEnum.laravel, IconEnum.css, IconEnum.mysql],
  },
  {
    name: 'Teacher',
    urlGithub: 'https://github.com/mkstas/laravel-teacher',
    technologies: [
      IconEnum.laravel,
      IconEnum.css,
      IconEnum.javaScript,
      IconEnum.mysql,
    ],
  },
];

export const isNewProjectsExist = (): Boolean => {
  return !!(projectsNew.length > 0);
};

export const isOldProjectsExist = (): Boolean => {
  return !!(projectsOld.length > 0);
};
