const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
         navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
     const navMenu = document.getElementById('nav-menu')
     navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () =>{
    const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.inicio__image, .footer__logo, .footer__description, .footer__content, .footer__info`)
sr.reveal(`.inicio__data`, {origin: `bottom`})
sr.reveal(`.nosotros__data, .recently__data`, {origin: `left`})
sr.reveal(`.nosotros__img, .recently__img`, {origin: `right`})
sr.reveal(`.galeria__card`, {interval: `100`})
sr.reveal(`.map-responsive`, {origin: `bottom`})
sr.reveal(`.aviso__button, .aviso__spinach, .aviso__form, .aviso__data`,{origin: `bottom`})
sr.reveal(`.aviso__content`,{origin: `bottom`})
sr.reveal(`.section__subtitle, .section__title`,{origin: `left`})
sr.reveal(`.mapa__img`,{origin: `rigth`})
sr.reveal(`.encabezado-img`,{origin: `bottom`})
sr.reveal(`.pro-container`,{interval: `100`})
sr.reveal(`.section-p1`,{origin: `left`})
sr.reveal(`.section-p2`,{origin: `left`})
sr.reveal(`.producto`,{origin: `left`})
sr.reveal(`.contenedor-productos`,{origin: `left`})


