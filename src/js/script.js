console.log('hello');

document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
      const nav = document.getElementById("navItems");
      if (nav) {
        nav.classList.toggle("is-visible");
        console.log(nav.classList);
      }
    }
  
    const burger = document.querySelector(".page-header__burger");
    if (burger) {
      burger.addEventListener("click", toggleMenu);
    }
});