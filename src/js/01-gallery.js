import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onGalleryItemClick);

makeGallery(galleryItems);

function makeGallery (items) {
  const gallery = items.map(item => makeGalleryMarkup(item)).join('');
  addGalleryInDom(gallery);
}

function addGalleryInDom(gallery) {
  galleryRef.insertAdjacentHTML('beforeend', gallery);
}

function makeGalleryMarkup ({preview, original, description}) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}

let instance;

function onGalleryItemClick(evn) {
  evn.preventDefault();

  if (evn.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${evn.target.dataset.source}" width="800" height="600">
`)

  instance.show()
  
  addEcs();

}

function onEscCloseGallery(evn) {
  const ESC = 'Escape';
  if (evn.code === ESC) {
    instance.close()
    removeEcs();
  }
}


function addEcs() {
  document.addEventListener('keydown', onEscCloseGallery);
}

function removeEcs() {
  document.removeEventListener('keydown', onEscCloseGallery);
}