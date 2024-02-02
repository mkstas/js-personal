import { IProject, IconEnum } from '@/types';

export class Project {
  private readonly projects: IProject[];
  private readonly sectionElement: HTMLElement | null;

  public constructor(projects: IProject[]) {
    this.projects = projects;
    this.sectionElement = document.querySelector('#section-projects');
  }

  private setProjects() {
    if (this.projects.length > 0) {
      const projectsElement = document.createElement('ul');

      projectsElement.className = 'mt-8 space-y-4';

      this.projects.forEach(project => {
        const projectsItemElement = document.createElement('li');
        const technologiesElement = document.createElement('ul');

        technologiesElement.className = 'flex flex-wrap gap-2 mt-2';
        projectsItemElement.className =
          'pace-y-4 px-3 py-2 bg-slate-500 shadow-lg shadow-slate-300 rounded-lg';

        projectsItemElement.innerHTML = `
          <div class="flex items-center gap-3">
            <p class="text-lg text-white font-medium">${project.name}</p>
            <a
              class="flex items-center gap-1 hover:underline text-lg text-white"
              href="${project.githubUrl}"
              target="_blank"
            >
              <img
                class="w-6 h-6"
                src="/icons/${IconEnum.github}.svg"
                alt="Github проекта"
              />
              <p>github</p>
            </a>
          </div>`;

        project.technologies.forEach(technology => {
          const technologiesItemElement = document.createElement('li');

          technologiesItemElement.className =
            'flex items-center justify-center w-8 h-8 rounded-full shadow-lg shadow-slate-600 bg-white';

          technologiesItemElement.innerHTML = `
            <img class="h-4 w-4" src="/icons/${technology}.svg" alt="Иконка ${technology}" /> `;

          technologiesElement.append(technologiesItemElement);
        });

        projectsItemElement.append(technologiesElement);
        projectsElement.append(projectsItemElement);
      });

      this.sectionElement?.append(projectsElement);
    } else {
      this.sectionElement?.remove();
    }
  }

  /**
   * Initialize class
   */
  public init() {
    this.setProjects();
  }
}
