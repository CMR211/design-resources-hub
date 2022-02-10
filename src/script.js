const links = fetch('./links.json').then((response) => {
    return response.json()
})
;(function createLinksTableElemenets() {
    const typesArray = Array.from(new Set(links.map((i) => i.type)))
    typesArray.forEach((type) => {
        const container = document.getElementById('container')
        const subcontainer = document.createElement('div')
        subcontainer.classList.add('grid', 'mt-5')
        subcontainer.id = type
        subcontainer.innerHTML = `<h2 class="grid-title">${type}</h2>`
        container.appendChild(subcontainer)
    })

    links.forEach((i) => {
        const card = document.createElement('div')
        const container = document.getElementById(i.type)
        card.classList.add('site-card')
        card.innerHTML = `<a href=${i.url} class="link-reset">
                    <img class="card__img img-fluid" src='./assets/screenshots/${i.img}' alt="image of a ${i.title} website" />
                    <h3 class="card__title my-4 mx-4">${i.title}</h1>
                    <p class="card__desc m-4 small">#${i.id} ${i.desc}</p>
                </a>`
        container.appendChild(card)
    })
})()
