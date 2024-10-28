import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import "./styles.css";

const content = document.querySelector("#content");
let activePage = "home";
console.log(activePage);

// Load default homepage
loadHome();

// Homepage loading logic
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  if (activePage === "home") {
    return;
  }
  content.innerHTML = "";
  activePage = "home";
  loadHome();
});

// Menu loading logic
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  if (activePage === "menu") {
    return;
  }
  content.innerHTML = "";
  activePage = "menu";
  loadMenu();
});

// About loading logic
const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
  if (activePage === "about") {
    return;
  }
  content.innerHTML = "";
  activePage = "about";
  loadAbout();
});
