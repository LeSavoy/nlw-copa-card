let isIgnite = false
function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite ? "url(./assets/img/bg-explorer.svg)" : "url(./assets/img/bg-ignite.svg)"
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}
