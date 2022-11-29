const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.login__img`, {origin: `left`})
sr.reveal(`.login__form`, {origin: `right`})