const navBarToggler = document.querySelector(".navbar__top--toggler");
const navBarCollapse = document.querySelector(".navbar__collapse");

navBarToggler.addEventListener("click", () => {
  navBarToggler.classList.toggle("change");
  navBarCollapse.classList.toggle("show__nav")
});
