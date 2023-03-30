const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  //spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      //spaceBetween: 20,
    },
    // when window width is >= 768
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    // when window width is >= 1200
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
