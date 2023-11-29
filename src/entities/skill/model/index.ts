import { IconEnum } from '@/shared/typicode';

export const skills: IconEnum[] = [
  IconEnum.html,
  IconEnum.css,
  IconEnum.sass,
  IconEnum.tailwind,
  IconEnum.javaScript,
  IconEnum.typeScript,
  IconEnum.vue,
  IconEnum.react,
  IconEnum.vite,
  IconEnum.git,
  IconEnum.firebase,
];

export const isSkillsExist = (): Boolean => {
  return !!(skills.length > 0);
};
