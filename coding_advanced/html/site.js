document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("sumaho-menu").classList.toggle("show");
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.autoplay.stop();

  window.addEventListener("scroll", function () {
    const swiperEl = document.querySelector(".swiper");
    const position = swiperEl.offsetTop - window.innerHeight + 100;
    const scrollTop = window.scrollY;

    if (scrollTop > position) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });
});
$(function () {
    $('.news-topics').on('click', function () {
    $(this).next().slideToggle();
  });
});