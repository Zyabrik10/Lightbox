export default function Modal (obj = {}) {
  return `
    <div class="lightbox-modal">
      <div class="lightbox-modal-content">
        <button class="lightbox-modal-close-button">&times;</button>
        <img class="lightbox-modal-img" alt="">
      </div>
    </div>
  `;
};
