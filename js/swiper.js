const originalSwipper = document.querySelector('#projects').innerHTML;

let swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loopedSlidesLimit: false,
  slidesPerView: 3.1,
  spaceBetween: 25,
});

$(window).resize(function (e) {
  document.querySelector('#projects').innerHTML = originalSwipper;
  if (document.body.offsetWidth <= 800) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loopedSlidesLimit: false,
      slidesPerView: 1,
      spaceBetween: 15,
    });
  } else if (document.body.offsetWidth >= 800) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loopedSlidesLimit: false,
      slidesPerView: 3.1,
      spaceBetween: 25,
    });
  }
})