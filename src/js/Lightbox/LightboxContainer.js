import { SliderItem } from "./components";

export default class LightboxContainer {
  constructor(selector, modal) {
    this.container = document.querySelector(selector);
    this.container.addEventListener("click", this.openModalWindow.bind(this));

    this.modal = modal;
  }

  openModalWindow(e) {
    e.preventDefault();

    const { target, currentTarget } = e;

    if (
      target === currentTarget
    )
      return;
    
    let imageItem = target;
    
    if (target.classList.contains("lightbox-container-item")) {
      imageItem = target.querySelector(".lightbox-container-img");
    }

    const largeUrl = imageItem.dataset.largeUrl;
    this.modal.element.classList.add("active");
    this.modal.element.querySelector(".lightbox-modal-img").src = largeUrl;

    window.addEventListener("keydown", this.modal.windowFunction);
  }

  add(imagesData) {
    const images = imagesData
      .map(({ id, url, largeUrl, description }) => {
        return SliderItem({
          url,
          largeUrl,
          description,
          id,
        });
      })
      .join("\n");

    this.container.insertAdjacentHTML("beforeend", images);
  }
}
