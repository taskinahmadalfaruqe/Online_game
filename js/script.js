$(function(){
    "use strict";
    let navitem = document.querySelector('.item');
    let bars = document.querySelector('.bars');

    bars.addEventListener("click", function(){
        navitem.classList.toggle('active')
    })


    // SLIDER PART START 
    $('.slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
      });



    //   YEAR 
    let FullYear= new Date().getFullYear();
    document.querySelector(".year").innerHTML=FullYear;
})