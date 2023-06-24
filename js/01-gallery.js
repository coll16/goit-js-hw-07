import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 const list = document.querySelector(".gallery")
 
 function createMarkupItems(galleryItems){
 return galleryItems.map(({ preview, original, description })=>
 `<li class="gallery__item">
 <a class="gallery__link" href="large-image.jpg">
   <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
   />
 </a>
</li>`)
.join('')
 }
 list.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems))
 list.addEventListener("click", onClickImg)

 function onClickImg(evt) {
  evt.preventDefault()
 if (evt.target.classList.contains("gallery__item")) {
    return
 }

 const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source} "width="1300" height="900">`
 )
 instance.show()
}

 const links = document.querySelectorAll('a')

links.forEach(function(link) {
  link.addEventListener('click', function(evt) {
    evt.preventDefault()
  })
})