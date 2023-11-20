import { DeveloperType } from '@/shared/typicode';

export const developer: DeveloperType = {
  name: 'Макаров Станислав',
  specialization: 'frontend - разработка',
  githubUrl: 'https://github.com/mkstas',
};

export const isDeveloperExist = (): Boolean => {
  return !!(developer.name || developer.specialization || developer.githubUrl);
};
