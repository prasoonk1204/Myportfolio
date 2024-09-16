function toggleTheme() {
  const body = document.body;
  
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  const imagesToSwitch = document.querySelectorAll("[data-light-src]");
  imagesToSwitch.forEach((img) => {
    const lightSrc = img.getAttribute("data-light-src");
    const darkSrc = img.getAttribute("data-dark-src");

    img.src = isDarkMode ? darkSrc : lightSrc;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    const imagesToSwitch = document.querySelectorAll("[data-light-src]");
    imagesToSwitch.forEach((img) => {
      const darkSrc = img.getAttribute("data-dark-src");
      img.src = darkSrc;
    });
  }

  document.body.style.transition = "background-color 0.5s, color 0.5s";
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  const isMenuVisible = menu.classList.contains("show");

  if (isMenuVisible) {
    menu.classList.remove("show");
    menu.classList.add("fade-out");

    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove('fade-out');
    }, 500);
  } else {
    menu.style.display = 'flex';
    menu.classList.add("show");
  }
}

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const menu = document.getElementById("menu");
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("fade-out");

    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove("fade-out");
    }, 500);
  }

  lastScrollTop = st <= 0 ? 0 : st;
});

window.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("show");
    menu.classList.add("fade-out");

    setTimeout(() => {
      menu.style.display = 'none';
      menu.classList.remove("fade-out");
    }, 500);
  }
});
