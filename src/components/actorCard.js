/**
 * 
 * @param {*} imageUrl 
 * @returns Element img actor
 */
function createActorImg(imageUrl) {
    const actorImgElement = document.createElement('img');
    const InitPosterPath = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'
    actorImgElement.setAttribute('src', InitPosterPath+imageUrl);
    actorImgElement.classList = 'actor-img'
    return actorImgElement
}

/**
 * 
 * @param {*} name 
 * @returns Element h3 with actor name
 */
function createActorName(name) {
    const actorNameElement = document.createElement('h3')
    actorNameElement.textContent = name
    actorNameElement.classList = 'actor-name'
    return actorNameElement
}

/**
 * 
 * @param {*} actor 
 * @returns Element card for actor
 */
export function createActorCard(actor) {
    const actorCardElement = document.createElement('div')
    actorCardElement.classList = 'actor-card'

    actorCardElement.appendChild(createActorImg(actor.profile_path))
    actorCardElement.appendChild(createActorName(actor.original_name))

    return actorCardElement
}