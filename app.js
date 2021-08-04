let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    navbar.classList.add("fixed-top");
    navbar.classList.remove("bg-dark", "navbar-dark");
    navbar.classList.add("bg-light", "navbar-light");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.add("bg-dark", "navbar-dark");
    navbar.classList.remove("bg-light", "navbar-light");
  }
});

