import {photos} from './data.js';

const picturesList = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderPhoto = function (picture) {
  let photoPreview = template.cloneNode(true);  
  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;
  console.log(picture.comments.length)
  // picture__likes 
  picturesList.appendChild(photoPreview);
}
  
const renderAllPhotos = function() {
  photos.forEach(picture => {
    renderPhoto(picture)
  });
}





/*-------------Блок BigPicture----------------*/
// const bigPictureElement = document.querySelector('.big-picture');


// const modalShow = function (img,likes) {
//   bigPictureElement.classList.remove('hidden');
//   const closeButton = bigPictureElement.querySelector('#picture-cancel');
//   const likesCount = document.querySelector('.likes-count');  
//   const bigPictureDiv = document.querySelector('.big-picture__img');  
//   const bigPictureImg = bigPictureDiv.querySelector('img');
//   const photoDescription = document.querySelector('.social__caption');
//   likesCount.textContent = likes;
//   bigPictureImg.src = img.src;
//   photoDescription.textContent = 
//   closeButton.addEventListener('click',modalClose)
// }

// const modalClose = function() {
//   bigPictureElement.classList.add('hidden');
// }


// const showFullPicture = function () {    
//   const photos = document.querySelectorAll('.picture');
//   for (let i=0; i < photos.length; i++) {       
//     let img = photos[i].querySelector('img');
//     let likes = photos[i].querySelector('.picture__likes').textContent;
//     let description = photos[i]
//     photos[i].addEventListener('click',()=>modalShow(img,likes,description)) 
//   } 
// }



console.log('Previews is loaded');
export {renderAllPhotos};

