/*exported photographerTemplate,displayProfil*/

function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

// Fonction pour afficher les données d'un photographe dans la page de detail 
    const displayProfil = (photographer) => {
    const photographer_section = document.querySelector(".photograph-header");
    const picture = `assets/photographers/${photographer.portrait}`;
    const divPhotographer = document.createElement("section");
    divPhotographer.classList.add("photographer-content");
    
    // Ajouter le nom du photographe dans un H1
    const h1 = document.createElement("h1");
    h1.textContent = photographer.name;
    h1.setAttribute("aria-label", `Photographe: ${photographer.name}`);
    photographer_section.appendChild(h1);

    // Ajouter la localisation (ville, pays) dans un H4
    const locationElement = document.createElement("h4");
    locationElement.textContent = `${photographer.city}, ${photographer.country}`;
    locationElement.setAttribute("aria-label", `Localisation: ${photographer.city}, ${photographer.country}`);
    photographer_section.appendChild(locationElement);

    // Ajouter le slogan du photographe dans un paragraphe
    const taglineElement = document.createElement("p");
    taglineElement.textContent = photographer.tagline;
    taglineElement.setAttribute("aria-label", `Slogan: ${photographer.tagline}`);
    photographer_section.appendChild(taglineElement);
   
    //creer une div pour mettre l'image a l'interieur
    const divPicturePhotographer = document.createElement("div");
    divPicturePhotographer.classList.add("photographer-picture");

    // Ajouter l'image du photographe
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", `Portrait de ${photographer.name}`);
    divPicturePhotographer.appendChild(img);
    photographer_section.appendChild(divPicturePhotographer);
    photographer_section.appendChild(divPhotographer);

    divPhotographer.appendChild(h1);
    divPhotographer.appendChild(locationElement);
    divPhotographer.appendChild(taglineElement);
//afficher le prix du photographe dans la div
    const price = document.querySelector('.price');
    price.innerText = `${photographer.price}€/jour`;
    price.setAttribute("aria-label", `Prix: ${photographer.price} euro par jour`);
}