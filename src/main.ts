import './index.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SKILLS = ['tailwind', 'sass', 'javascript', 'typescript', 'react', 'vue', 'nest', 'git'];
const WORKS = [
  {
    name: 'js-go-scooter-pass',
    url: 'https://github.com/mkstas/js-go-scooter-pass',
  },
  {
    name: 'react-social',
    url: 'https://github.com/mkstas/react-social',
  },
  {
    name: 'nest-social',
    url: 'https://github.com/mkstas/nest-social',
  },
  {
    name: 'vue-todo-app',
    url: 'https://github.com/mkstas/vue-todo-app',
  },
];

const date = new Date();

const day = date.getDate();
const month = MONTHS[date.getMonth()];
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');

document.getElementById('date')!.innerText = `${day} ${month} ${hours}:${minutes}`;

const windowElement = document.createElement('div');

windowElement.className = 'py-1 px-2 max-w-xl min-h-48 bg-white border border-slate-300 rounded-md';

windowElement.innerHTML = `
  <div class="flex justify-between gap-4">
    <div class="px-2 flex-auto border border-slate-300 rounded-md"></div>
    <div class="flex gap-1">
      <div class="size-3 bg-green-500 rounded-full"></div>
      <div class="size-3 bg-yellow-400 rounded-full"></div>
      <div class="size-3 bg-red-500 rounded-full"></div>
    </div>
  </div>
  <div class="mt-4"><div>`;

const greetingElement = windowElement.cloneNode(true) as HTMLElement;

greetingElement.children[1].innerHTML = `
  <h1 class="text-3xl font-bold">Hello World!</h1>
  <a
    class="flex gap-2 mt-2 text-blue-600 hover:underline"
    href="https://github.com/mkstas"
    target="_blank"
  >
    <span class="text-xl">Go to my GitHub</span>
    <img class="w-6" src="/icons/system/github.svg" alt="github icon" />
  </a>`;

document.getElementById('main')!.appendChild(greetingElement);

const skillsElement = windowElement.cloneNode(true) as HTMLElement;
skillsElement.children[1].className += ' flex flex-wrap items-center gap-4';

SKILLS.forEach(item => {
  const imageElement = document.createElement('img');
  imageElement.src = `/icons/tools/${item}.svg`;
  imageElement.classList.add('w-8');
  imageElement.alt = `${item} icon`;
  skillsElement.children[1].append(imageElement);
});

document.getElementById('main')!.appendChild(skillsElement);

const worksElement = windowElement.cloneNode(true) as HTMLElement;
worksElement.children[1].className += ' grid gap-1';

WORKS.forEach(item => {
  const linkElement = document.createElement('a');
  linkElement.className = 'text-lg text-blue-600 hover:underline';
  linkElement.href = item.url;
  linkElement.innerText = item.name;
  linkElement.target = '_blank';
  worksElement.children[1].append(linkElement);
});

document.getElementById('main')!.appendChild(worksElement);
