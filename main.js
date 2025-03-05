const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.selection');

menuBtn.addEventListener('click', () => {
  if (menuBtn.innerHTML ==="Menu") {
    menuBtn.innerHTML = " X ";
    
    nav.style.display = "inline-block";
  }else {
    menuBtn.innerHTML = "Menu";
    
    nav.style.display = "none";
  }
})
