import { renderImages, showLoading } from "./render-page.js";

let page = 1;
let isNewSearch;
const loadingMessage = "SEARCHING IMAGES...";

export async function searchImage(animalName, newSearch) {
  showLoading(loadingMessage, true);

  isNewSearch = newSearch;

  if (newSearch) {
    page = 1;
  }

  const key = "e2AcGL0Yw7-hUYWINLiYsEvdNM14o9ulZ_qEnhGZEQo";
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${animalName}&client_id=${key}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();

    showLoading(loadingMessage, false);

    renderImages(data, isNewSearch);

    page++;
  } catch (error) {
    console.error(`Catch Error: ${error}`);
  }
}
