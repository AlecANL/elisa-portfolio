import { projects, Project } from './index.js';
const $projectsContainer = document.getElementById('projects');

function loadComponent(project) {
  const $el = document.createElement('div');
  $el.innerHTML = Project(project);
  return $el.firstElementChild;
}

function renderDOM(listProjects, container) {
  listProjects.forEach(project => {
    container.appendChild(loadComponent(project));
  });
}

function showByEvenProject() {
  const $projects = document.querySelectorAll('.project');
  projects.forEach((el, index) => {
    if (index % 2 === 0) {
      $projects[index].classList.add('even');
    }
  });
}

function render() {
  renderDOM(projects, $projectsContainer);
  showByEvenProject();
}

document.addEventListener('DOMContentLoaded', render);

console.log(projects);
