import { IconEnum } from '@/types';

export class Skill {
  private readonly skills: IconEnum[];
  private readonly sectionElement: HTMLElement | null;

  public constructor(skills: IconEnum[]) {
    this.skills = skills;
    this.sectionElement = document.querySelector('#section-skills');
  }

  private setTechnolgies() {
    if (this.skills.length > 0) {
      const skillsElement = document.createElement('ul');

      skillsElement.className = 'flex flex-wrap gap-3 mt-8';

      this.skills.forEach(skill => {
        const skillsItemElement = document.createElement('li');

        skillsItemElement.className =
          'flex items-center justify-center w-12 h-12 rounded-full shadow-lg shadow-slate-300 bg-white';

        skillsItemElement.innerHTML = `
          <img class="h-6 w-6" src="/icons/${skill}.svg" alt="Иконка ${skill}" />`;

        skillsElement.append(skillsItemElement);
      });

      this.sectionElement?.append(skillsElement);
    } else {
      this.sectionElement?.remove();
    }
  }

  /**
   * Initialize class
   */
  public init() {
    this.setTechnolgies();
  }
}
