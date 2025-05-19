// script.js
window.addEventListener("scroll", function () {
  const navBar = document.getElementById("navBar");
  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
