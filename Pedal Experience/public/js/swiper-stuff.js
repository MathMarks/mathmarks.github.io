var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // If you enable pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,

      },
      // Add more breakpoints as needed
    },
  });