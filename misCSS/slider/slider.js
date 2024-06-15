/* SLIDER:NTH-OF-TYPE(3) */

let divTag = document.querySelector('.div-tag')
let images = divTag.querySelectorAll('img')

function intervaloCambiosSlider() {
  let index = 1;

  setInterval(function () {
    let porcentage = index * -100;
    divTag.style.transform = `translateX(${porcentage}%)`;
    if (index > images.length - 4) {
      index = -1
    }
    index++;
  },2000)

}


intervaloCambiosSlider()