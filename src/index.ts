import { Developer, Project, Skill } from '@/modules';
import { developer, projects, skills } from '@/data';
import '@/assets/index.css';

class App {
  private readonly developer: Developer;
  private readonly skill: Skill;
  private readonly project: Project;

  public constructor() {
    this.developer = new Developer(developer);
    this.skill = new Skill(skills);
    this.project = new Project(projects);
  }

  /**
   * Initialize class
   */
  public init() {
    this.developer.init();
    this.skill.init();
    this.project.init();
  }
}

const app = new App();

app.init();
