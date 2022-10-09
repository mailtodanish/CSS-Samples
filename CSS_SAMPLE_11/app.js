let navLinks = document.querySelectorAll(".navbar-container .nav-links li a");
let mouseCursor = document.querySelector(".cursor");

function cursorFunction(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursorFunction);

navLinks.forEach(function (link) {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

navLinks.forEach(function (link) {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});
