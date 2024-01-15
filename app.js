/** @format */

let toggleMenu = () => {
  const navBar = document.querySelector("nav");
  const outerGrid = document.querySelector(".outer-grid");
  console.log(navBar, outerGrid);
  navBar.classList.toggle("hide-nav");
  outerGrid.classList.toggle("outer-grid-expanded");
};
