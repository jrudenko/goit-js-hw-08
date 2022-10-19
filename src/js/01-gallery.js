import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);




const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);



function createGalleryItemMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join('');
}


function onGalleryContainerClick(evt) {    
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains('gallery__image');
    if (!isGalleryImage){
    return;
    }
    // console.Log(evt.target);

    const largeImage = evt.target.dataset.source;
    const openModalWindowe = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
`)

    openModalWindowe.show();

    galleryContainer.addEventListener('keydown', onEscapeClose);
    
    function onEscapeClose(evt) {
        if (evt.key === "Escape") {
        openModalWindowe.close();
        
    }
    }   

}