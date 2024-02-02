import { IDeveloper, IconEnum } from '@/types';

export class Developer {
  private readonly name: string | undefined;
  private readonly specialization: string | undefined;
  private readonly githubUrl: string | undefined;
  private readonly sectionElement: HTMLElement | null;

  public constructor(developer: IDeveloper) {
    this.name = developer.name;
    this.specialization = developer.specialization;
    this.githubUrl = developer.githubUrl;
    this.sectionElement = document.querySelector('#section-element');
  }

  private setName() {
    if (this.name) {
      const nameElement = document.createElement('p');

      nameElement.className = 'text-2xl font-medium';
      nameElement.innerText = this.name;

      this.sectionElement?.append(nameElement);
    }
  }

  private setSpecialization() {
    if (this.specialization) {
      const specializationElement = document.createElement('p');

      specializationElement.className = 'text-lg text-slate-500 font-semibold';
      specializationElement.innerText = this.specialization;

      this.sectionElement?.append(specializationElement);
    }
  }

  private setGithubUrl() {
    if (this.githubUrl) {
      const githubUrlElement = document.createElement('a');

      githubUrlElement.innerHTML = `
        <img
          class="h-8 w-8" src="/icons/${IconEnum.github}.svg"
          alt="Аккаунт github"
        />
        <span class="text-2xl font-medium">GitHub</span>
      `;
      githubUrlElement.className =
        'inline-flex items-center gap-2 mt-12 hover:underline';
      githubUrlElement.href = this.githubUrl;
      githubUrlElement.target = '_blank';

      this.sectionElement?.append(githubUrlElement);
    }
  }

  /**
   * Initialize class
   */
  public init() {
    if (this.name || this.specialization || this.githubUrl) {
      this.setName();
      this.setSpecialization();
      this.setGithubUrl();
    } else {
      this.sectionElement?.remove();
    }
  }
}
