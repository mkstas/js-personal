import './index.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SKILLS = ['tailwind', 'sass', 'javascript', 'typescript', 'react', 'vue', 'nest', 'git'];

const currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = MONTHS[currentDate.getMonth()];
let currentHours = currentDate.getHours().toString().padStart(2, '0');
let currentMinutes = currentDate.getMinutes().toString().padStart(2, '0');

const dateElement = document.getElementById('date')!;

dateElement.innerText = `${currentDay} ${currentMonth} ${currentHours}:${currentMinutes}`;

const skillsElement = document.getElementById('skills')!;

SKILLS.forEach(skill => {
  const image = document.createElement('img');

  image.src = `/icons/tools/${skill}.svg`;
  image.classList.add('w-8');
  image.alt = `${skill} icon`;

  skillsElement.appendChild(image);
});
