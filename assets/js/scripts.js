// ========== dropdown menu hover ==========
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");
          const iconRotate = document.querySelector(".icofont-simple-down");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
            iconRotate.style.transform = "rotate(180deg)";
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");
          const iconRotate = document.querySelector(".icofont-simple-down");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
            iconRotate.style.transform = "rotate(0deg)";
          }
        });
      });
  }
  // end if innerWidth
});

// ========== active and remove menu ==========
const navLink = document.querySelectorAll(".nav-link");
const dropLink = document.querySelectorAll(".dropdown-item");
const dropToggleLink = document.querySelector(".dropdown-toggle");

function linkActive() {
  navLink.forEach((n) => n.classList.remove("active"));
  dropLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

navLink.forEach((n) => n.addEventListener("click", linkActive));

// active and remove menu dropdown
function linkDropActive() {
  dropLink.forEach((n) => n.classList.remove("active"));
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  dropToggleLink.classList.add("active");
}

dropLink.forEach((n) => n.addEventListener("click", linkDropActive));

// ========== navbar on scroll ==========
const navBar = document.querySelector(".navbar");
const dropMenu = document.querySelector(".dropdown-menu");
// show background navbar
window.addEventListener("scroll", function () {
  navBar.classList.toggle("bg-nav", window.scrollY > 100);
  dropMenu.classList.toggle("down", window.scrollY > 100);
});

// hide and show navbar in scroll
let scrollPrevious = window.pageYOffset;
window.onscroll = function () {
  let scrollCurrent = window.pageYOffset;
  if (scrollPrevious < scrollCurrent && scrollPrevious > 150) {
    navBar.style.top = "-86px";
  } else {
    navBar.style.top = "0";
  }

  scrollPrevious = scrollCurrent;
};

// navbar mobile background
const navToggler = document.querySelector(".navbar-toggler");
navToggler.addEventListener("click", function () {
  if (window.scrollY < 100) {
    navBar.classList.toggle("mobile-nav");
  }
});

// ========== owl carousel ==========
// index - news content
$(document).ready(function () {
  $(".owl-carousel#news-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// index - star proker content
$(document).ready(function () {
  $(".owl-carousel#star-proker-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// hmtl - proker
$(document).ready(function () {
  $(".owl-carousel#proker-content").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// hmtl - member
$(document).ready(function () {
  $(".owl-carousel#member-content").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// medium zoom struktur organisasi
mediumZoom(".med__zoom", {
  margin: 20,
  // background: 'rgba(0, 0, 0, 1)',
  background: "rgba(255, 255, 255, 1)",
  scrollOffset: 200,
});

// biro - proker - ksl
$(document).ready(function () {
  $(".owl-carousel#ksl").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// biro - proker - ipal
$(document).ready(function () {
  $(".owl-carousel#ipal").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// biro - proker - hn
$(document).ready(function () {
  $(".owl-carousel#hn").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// berita - berita-terkini-content
$(document).ready(function () {
  $(".owl-carousel#berita-terkini-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// contact - social media section
$(document).ready(function () {
  $(".owl-carousel#socmed-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// ukm - foto ukm - ukm__carousel
$(document).ready(function () {
  $(".owl-carousel#ukm__carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});
// index - berita__terkait
$(document).ready(function () {
  $(".owl-carousel#berita__terkait-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
