const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".selection");
const menuIcon = document.getElementById("menu-icon"); // Corrected selector

menuBtn.addEventListener('click', () => {
  if (menuIcon.src.endsWith("Hamburger_icon.svg.png")) {
    menuIcon.src = "icons/cancel-icon.png";
    menuIcon.alt = "Close";
    nav.style.display = "inline-block";
  } else {
    menuIcon.src = "icons/Hamburger_icon.svg.png";
    menuIcon.alt = "Menu";
    nav.style.display = "none";
  }
});
