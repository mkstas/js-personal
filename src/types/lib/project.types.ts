import { IconEnum } from './skill.types';

export interface IProject {
  name: string;
  technologies: IconEnum[];
  githubUrl?: string;
}
