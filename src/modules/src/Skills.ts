export class Skills {
  private skills: string[];
  private skillsElement: HTMLElement;

  constructor(skills: string[], skillsElement: HTMLElement) {
    this.skills = skills;
    this.skillsElement = skillsElement;
  }

  private skillElement(skill: string): HTMLImageElement {
    const imageElement = document.createElement('img');

    imageElement.classList.add('w-10');
    imageElement.src = `/icons/tools/${skill}.svg`;
    imageElement.alt = `${skill} icon`;

    return imageElement;
  }

  public init(): void {
    this.skills.forEach(skill => {
      this.skillsElement.append(this.skillElement(skill));
    });
  }
}
