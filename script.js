let menuOpen = false;

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuIcon = document.querySelector(".hamburger");

  body.classList.toggle("dark-mode");
  
  const imagesToSwitch = document.querySelectorAll("[data-light-src]");
  imagesToSwitch.forEach((img) => {
    const lightSrc = img.getAttribute("data-light-src");
    const darkSrc = img.getAttribute("data-dark-src");
    
    if (body.classList.contains("dark-mode")) {
      img.src = darkSrc;
    } else {
      img.src = lightSrc;
    }
  });
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  
  if (menuOpen) {
    menu.classList.remove('show');
    menu.classList.add('fade-out');
   
    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove('fade-out');
    }, 500);
    menuOpen = false;
  } else {
    menu.style.display = 'flex';
    menu.classList.add('show');
    menuOpen = true;
  }
}


window.addEventListener('scroll', () => {
  const menu = document.getElementById('menu');
  
 
  if (menuOpen) {
    menu.classList.remove('show');
    menu.classList.add('fade-out');
    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove('fade-out');
    }, 500); 
    menuOpen = false;
  }
});


window.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  if (menuOpen && !menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("show");
    menu.classList.add("fade-out");
    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove('fade-out');
    }, 500);
    menuOpen = false;
  }
});
