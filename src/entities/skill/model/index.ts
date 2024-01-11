import { IconEnum } from '@/shared/typicode';

export const skills: IconEnum[] = [
  IconEnum.javaScript,
  IconEnum.typeScript,
  IconEnum.vue,
  IconEnum.vite,
  IconEnum.laravel,
  IconEnum.sass,
  IconEnum.tailwind,
  IconEnum.git,
  IconEnum.firebase,
];

export const isSkillsExist = (): Boolean => {
  return !!(skills.length > 0);
};
