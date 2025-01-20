interface Project {
  name: string;
  githubUrl: string;
}

export class Projects {
  private projects: Project[];
  private projectsElement: HTMLElement;

  constructor(projects: Project[], projectsElement: HTMLElement) {
    this.projects = projects;
    this.projectsElement = projectsElement;
  }

  private projectElement(project: Project): HTMLAnchorElement {
    const linkElement = document.createElement('a');

    linkElement.className = 'text-lg text-blue-600 hover:underline';
    linkElement.innerText = project.name;
    linkElement.href = project.githubUrl;
    linkElement.target = '_blank';

    return linkElement;
  }

  public init(): void {
    this.projects.forEach(project => {
      this.projectsElement.append(this.projectElement(project));
    });
  }
}
