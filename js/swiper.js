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

function adapt() {
  document.querySelector('#projects').innerHTML = originalSwipper;
  if (document.body.offsetWidth <= 800) {
    $('.swiper-button-prev').css('display', 'none')
    $('.swiper-button-next').css('display', 'none')
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
    $('.swiper-button-prev').css('display', 'block')
    $('.swiper-button-next').css('display', 'block')
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
}

adapt()

$(window).resize(function (e) {
  adapt()
})