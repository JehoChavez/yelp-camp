let scrollYOld;

window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add("is-hidden");
  } else {
    navbar.classList.remove("is-hidden");
  }

  if (scrollY < scrollYOld) {
    navbar.classList.remove("is-hidden");
  }

  scrollYOld = scrollY;
};
