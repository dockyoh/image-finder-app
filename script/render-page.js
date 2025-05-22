const imagesContainerEl = document.querySelector(".images-container");
const showMoreBtn = document.querySelector(".show-more");
const loadingContainerEl = document.querySelector(".loading-container");

export function renderImages(data, newSearch = false) {
  const result = data.results;

  if (newSearch) {
    imagesContainerEl.innerHTML = "";
  }

  result.map((imageResult) => {
    const imageResultEl = document.createElement("div");
    imageResultEl.classList.add("image-result");
    const imgEl = document.createElement("img");
    const imageLinkEl = document.createElement("a");

    imgEl.src = imageResult.urls.regular;
    imgEl.alt = imageResult.alternative_slugs.en;

    imageLinkEl.href = imageResult.links.html;
    imageLinkEl.textContent = imageResult.alt_description;
    imageLinkEl.target = "_blank";

    imageResultEl.appendChild(imgEl);
    imageResultEl.appendChild(imageLinkEl);

    imagesContainerEl.appendChild(imageResultEl);
  });
  showMoreBtn.classList.remove("hide-btn");
}

export function showLoading(loadingMsg, isLoading = false) {
  if (isLoading) {
    const loadingEl = document.createElement("p");
    loadingEl.textContent = loadingMsg;
    loadingContainerEl.appendChild(loadingEl);
  } else {
    document.querySelector("p").remove();
  }
}
