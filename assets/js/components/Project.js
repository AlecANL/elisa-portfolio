import { Blockquote } from './Blockquote.js';

export function Project({ name, description, image, blockquote }) {
  return `
        <article class="project">
            <div class="project__image">
              <img src="${image}" alt="${name}" />
            </div>
            <div class="project__description">
              <span class="title">${name}</span>
              <p>${description}</p>
              <div class="buttons">
                <button class="btn btn--initial w-100 m-3">
                  <i>
                    <img
                      src="./assets/img/icons/icon-github.svg"
                      alt="icon github"
                    />
                  </i>
                  <span>ver codigo</span>
                </button>
                <button class="btn btn--green w-100 m-3">ver proyecto</button>
              </div>
            </div>
            ${Blockquote(blockquote)}
        </article>
    `;
}
