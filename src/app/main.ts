import './index.css';

import { MONTHS, PROJECTS, SKILLS, USER_DATA } from '@/shared/constants';
import { CurrentDate, Greeting, Skills, Projects } from '@/modules';

const dateElement = document.getElementById('date')!;
const messageElement = document.getElementById('user_message')!;
const guthubElement = document.getElementById('user_github') as HTMLAnchorElement;
const skillsElement = document.getElementById('skills')!;
const projectsElement = document.getElementById('projects')!;

new CurrentDate(MONTHS, dateElement).init();
new Greeting(USER_DATA, messageElement, guthubElement).init();
new Skills(SKILLS, skillsElement).init();
new Projects(PROJECTS, projectsElement).init();
