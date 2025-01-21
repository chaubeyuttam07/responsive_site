let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

menuBtnChange();
// Responsive adjustments for screen widths
// function adjustPageSize() {
//   const width = window.innerWidth;

//   if (width >= 992 && width <= 1600) {
//     document.body.style.transform = 'scale(0.9)';
//     document.body.style.transformOrigin = 'top left';
//   } else if (width >= 700 && width <= 767) {
//     document.body.style.transform = 'scale(0.8)';
//     document.body.style.transformOrigin = 'top left';
//   } else if (width >= 600 && width < 700) {
//     document.body.style.transform = 'scale(0.75)';
//     document.body.style.transformOrigin = 'top left';
//   } else if (width <= 600) {
//     document.body.style.transform = 'scale(0.5)';
//     document.body.style.transformOrigin = 'top left';
//   } else {
//     document.body.style.transform = 'scale(1)';
//     document.body.style.transformOrigin = 'top left';
//   }
// }

// window.addEventListener('resize', adjustPageSize);
// adjustPageSize();
