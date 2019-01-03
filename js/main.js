//SELECT DOM ITEMS
const menuBtn = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menuNav = document.querySelector(".menu-nav"),
  menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//SET INITIAL STATE OF MENU

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("test");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // SET MENU STATE

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // SET MENU STATE

    showMenu = false;
  }
}
