import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onCreateFormSubmit);

function onCreateFormSubmit(event) {
  event.preventDefault();
  const nameImage = event.target.elements.query.value;

  if (nameImage.trim() === '') {
    return iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
  }

  loader.style.display = 'inline-block';

  fetchImages(nameImage);
  event.target.reset();
}

async function fetchImages(nameImage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '?key=42272316-28c697ce0580eb37211383c7d';
  const Q = `&q=${nameImage}`;
  const IMAGE_TYPE = '&image_type=photo';
  const ORIENTATION = '&orientation=horizontal';
  const SAFESEARCH = '&safesearch=true';
  const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

  loader.style.display = 'inline-block';

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    if (data && data.hits && data.hits.length > 0) {
      renderTicker(data);
    } else {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loader.style.display = 'none';
  }
}

function renderTicker(data) {
  const markup = data.hits.map(templateImage).join('');
  gallery.innerHTML = markup;

  const galleryLinks = document.querySelectorAll('.gallery-link');
  galleryLinks.forEach(link => {
    link.setAttribute('href', link.querySelector('img').getAttribute('src'));
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

function templateImage({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item" >
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${likes}</li></ul>
      <ul>Views<li>${views}</li></ul>
      <ul>Comments<li>${comments}</li></ul>
      <ul>Downloads<li>${downloads}</li></ul>
    </div>
  </li>`;
}