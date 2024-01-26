import { IconEnum } from '@/shared/typicode';

export const skills: IconEnum[] = [
  IconEnum.javaScript,
  IconEnum.typeScript,
  IconEnum.nodejs,
  IconEnum.vue,
  IconEnum.vite,
  IconEnum.sass,
  IconEnum.tailwind,
  IconEnum.git,
];

export const isSkillsExist = (): Boolean => {
  return !!(skills.length > 0);
};
