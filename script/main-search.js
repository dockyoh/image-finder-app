import { searchImage } from "./animal-search.js";

const input = document.getElementById("input-search");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  searchImage(input.value, true);
});

document.querySelector(".show-more").addEventListener("click", (e) => {
  searchImage(input.value, false);
});
