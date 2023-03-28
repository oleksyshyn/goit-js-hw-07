import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImageGalleryMarkup(galleryItems);

function createImageGalleryMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
        })
        .join('');
}
galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', onSelectedGalleryCard)

function onSelectedGalleryCard(event) {
    event.preventDefault();
    
    const cardEl = event.target;
    const cardElUrl = cardEl.dataset.source;
    
    if (cardEl.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${cardElUrl}" width="800" height="600">`);
    instance.show();

    if (instance.visible()) {
        document.addEventListener('keydown', onVisible);

        function onVisible(event) {
            if (event.code === 'Escape') {
                instance.close();
                document.removeEventListener('keydown', onVisible);
            }
        } 
    }
    
}

