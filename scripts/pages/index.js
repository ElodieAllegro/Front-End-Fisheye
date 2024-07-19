/*global photographerTemplate*/

async function getPhotographers() {
  const response = await fetch("data/photographers.json");
  const data = await response.json();
  return { photographers: data.photographers };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();

    // Element link
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `photographer.html?id=${photographer.id}`);
    linkElement.setAttribute(
      "aria-label",
      `Voir la page de detail du photographe ${photographer.name} photographe à ${photographer.city}, ${photographer.country} tarif ${photographer.price}euro /jour`
    );
    linkElement.appendChild(userCardDOM);

    // Element location
    const locationInfo = document.createElement("section");
    locationInfo.classList.add("location_info");
    const locationElement = document.createElement("h4");
    locationElement.textContent = `${photographer.city}, ${photographer.country}`;
    locationInfo.appendChild(locationElement);
    userCardDOM.appendChild(locationInfo);

    // Element tagline
    const taglineInfo = document.createElement("section");
    taglineInfo.classList.add("tagline_info");
    const taglineElement = document.createElement("p");
    taglineElement.textContent = photographer.tagline;
    taglineInfo.appendChild(taglineElement);
    userCardDOM.appendChild(taglineInfo);

    // Element price
    const priceInfo = document.createElement("section");
    priceInfo.classList.add("price_info");
    const priceElement = document.createElement("p");
    priceElement.textContent = `${photographer.price}€/jour`;
    priceInfo.appendChild(priceElement);
    userCardDOM.appendChild(priceInfo);
    photographersSection.appendChild(linkElement);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
