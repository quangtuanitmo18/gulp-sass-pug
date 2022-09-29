const menuToggle= document.querySelector('.header-toggle');
const menuHeader =document.querySelector('.header-menu');
const expandClass="is-expand";

menuToggle.addEventListener('click',function(){
    menuHeader.classList.add(expandClass);
});

window.addEventListener("click",function(e){
    if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
        menuHeader.classList.remove(expandClass);
    }
})
// window.addEventListener("click", function(e) {
//     if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
//         menuHeader.classList.remove(expandClass);
//     }
// });


// Slick slider
$(document).ready(function () {
  $(".quote-list").slick({
    // autoplay:true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
