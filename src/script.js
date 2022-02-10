;(function createLinksTableElemenets() {
    const tableContainer = document.getElementById('ui-ux')

    const linksItems = [
        {
            id: 1,
            title: 'Dribble',
            desc: 'Discover professional layouts and beautiful designs of full web-pages and components.',
            url: 'https://dribbble.com/',
            img: './assets/screenshots/dribble.png',
        },
        {
            id: 2,
            title: 'UI Design Daily',
            desc: 'Many predesigned elements to inspire from.',
            url: 'https://www.uidesigndaily.com/',
            img: './assets/screenshots/ui-design-daily.png',
        },
        {
            id: 3,
            title: 'Trianglify',
            desc: 'Generate beautiful svg backgrounds made of triangles and gradients.',
            url: 'https://trianglify.io/',
            img: './assets/screenshots/trianglify.png',
        },
        {
            id: 4,
            title: 'Remix-icon',
            desc: 'Remix Icon is a set of open source neutral style system symbols elaborately crafted for designers and developers.',
            url: 'https://remixicon.com',
            img: './assets/screenshots/remix-icon.png'
        }
    ]

    linksItems.forEach((i) => {
        const card = document.createElement('div')
        card.classList.add('site-card')
        card.innerHTML = `<a href=${i.url} class="link-reset">
                    <img class="card__img img-fluid" src=${i.img} alt="image of a ${i.title} website" />
                    <h3 class="card__title my-4 mx-4">${i.title}</h1>
                    <p class="card__desc m-4 small">${i.desc}</p>
                </a>`
        tableContainer.appendChild(card)
    })
})()
