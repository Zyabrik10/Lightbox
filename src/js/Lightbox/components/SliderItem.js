export default function SliderItem ({ url, largeUrl, description, id }){
  return `
    <a data-id="${id}" class="lightbox-container-item" href="${url}">
        <img class="lightbox-container-img" src="${url}" alt="${description}" data-large-url="${largeUrl}">
    </a>
  `;
};
