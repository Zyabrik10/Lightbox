import { Modal } from "./components";

export default class LightboxModal {
  static instance = null;

  init() {
    this.element = document.querySelector(".lightbox-modal");
    document.body.insertAdjacentHTML("beforeend", Modal());

    this.element = document.querySelector(`.lightbox-modal`);

    this.closeButton = this.element.querySelector(
      `.lightbox-modal-close-button`
    );
    this.closeButton.addEventListener("click", this.closeModal.bind(this));

    this.windowFunction = this.closeModalOnEscape.bind(this);
  }

  static getInstance() {
    if (LightboxModal.instance !== null) return LightboxModal.instance;

    LightboxModal.instance = new LightboxModal();
    LightboxModal.instance.init();

    return LightboxModal.instance;
  }

  closeModal() {
    this.element.classList.remove("active");
    window.removeEventListener("keydown", this.windowFunction);
  }

  closeModalOnEscape({ key }) {
    console.log(key);
    if (key === "Escape") {
      this.closeModal();
    }
  }
}
