const menuopenbutton = document.querySelector("#menuopenbutton");
const menuclosebutton = document.querySelector("#menuclosebutton");

menuopenbutton.addEventListener("click",()=>{
    document.body.classList.toggle("showmobilemenu")
})

menuclosebutton.addEventListener("click",()=> menuopenbutton.click())

const swiper = new Swiper('.sliderwrapper', {

  loop: true,
  grabCursor :true,
  spaceBetween : 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView :1
    },
    768:{
        slidesPerView :2
    },
    1024:{
        slidesPerView :3
    }
  }

});
