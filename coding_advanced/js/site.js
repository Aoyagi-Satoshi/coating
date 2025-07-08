$(function () {
  $("#menu-btn-check").on("click", function () {
    const menu = $("#sp-menu");
    const search = $("#sp-search");
    if (menu.is(":visible")) {
      menu.slideUp();
      search.slideUp();
    } else {
      menu.slideDown();
      search.slideDown();
    }
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: { slidesPerView: 2 },
  },
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
  scrollbar: {
    el: ".swiper-scrollbar",
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

$(function () {
  $(".news-topics").on("click", function () {
    $(this).next().slideToggle();
  });
});

$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
