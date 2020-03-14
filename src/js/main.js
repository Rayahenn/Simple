const btn = document.querySelector('.kontakt__submit');
const arrow = document.querySelector('.left-menu__arrow');
const leftMenu = document.querySelector('nav.left-menu');


arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    if (arrow.classList.contains('active')) {
        leftMenu.style.left = "0px";
    }
    else leftMenu.style.left = "-100px";
    
    
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
})