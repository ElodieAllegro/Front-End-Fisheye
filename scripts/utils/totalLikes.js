/*exported updateTotalLikes,countTotalLike*/


/**
 * Permet de compte le nombre de likes
 * @param media {array} Liste des médias
 * @returns int
 * */

const countTotalLike = (medias) => {
    const total = medias.reduce((acc, curr) => acc + curr.likes, 0); 
    const totalLikesNumber = document.querySelector('.totalLikes-number');
    totalLikesNumber.innerText = total;
    return total
}