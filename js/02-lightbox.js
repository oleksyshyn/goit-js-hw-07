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
                <img class="gallery__image" src="${preview}" alt="${description}" />
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
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const gallary = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    
}

