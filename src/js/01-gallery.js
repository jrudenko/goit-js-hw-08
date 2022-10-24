import '../css/common.css';
import '../css/01-gallery.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join('');
};  

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});