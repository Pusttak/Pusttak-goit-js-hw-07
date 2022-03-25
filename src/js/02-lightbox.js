import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(galleryItems) {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
        const item = document.createElement('a');
        item.classList.add('gallery__item');
        item.href = original;

        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = preview;
        img.alt = description;

        item.appendChild(img);

        return item;
    });

    galleryRef.append(...galleryMarkup);

    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionPosition: 'bottom',
        captionsData: 'alt',
        captionDelay: 250,
        showCounter: false,
    });
}