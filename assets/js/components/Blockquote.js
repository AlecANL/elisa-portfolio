export function Blockquote({ image, author, quote }) {
  return `
    <blockquote>
        <img src="${image}" alt="${author}" />
        <p class="quote">${quote}</p>
        <p>${author}</p>
    </blockquote>
    `;
}
