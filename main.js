const swiper = new Swiper('.swiper', {
    loop: false,

    slidesPerView: 3.2,  

    autoHeight: false,

    spaceBetween: 20,

    slidesPerGroup: 1,

    centeredSlides: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    initialSlide: 1,

    breakpoints: {
      850: {
        slidesPerView: 3.2,
      },
      700: {
        slidesPerView: 2.2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });
  