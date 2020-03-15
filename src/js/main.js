const btn = document.querySelector('.kontakt__submit');
const arrow = document.querySelector('.left-menu__arrow');
const leftMenu = document.querySelector('nav.left-menu');
const newsItems = [...document.querySelectorAll('.news__item')];
const leftArrow = document.querySelector('i.left');
const rightArrow = document.querySelector('i.right');
const content = document.querySelector('.content');

let counter = 0;

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY > 100) {
        content.style.top = "0px";
    }
    else {
        content.style.top = "100px";
    }
})

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

rightArrow.addEventListener('click', (e) => {

    newsItems.forEach(function (item, index) {
        if(item.classList.contains('current')) {
            item.classList.remove('current')
            item.classList.add('hidden')
            counter++;
             
        }
    })

    if(counter == 12) {
        counter = 0;
    }
    newsItems[counter].classList.add('current')
    newsItems[counter].classList.remove('hidden')
    newsItems[counter+1].classList.add('current')
    newsItems[counter+1].classList.remove('hidden')
    newsItems[counter+2].classList.add('current')
    newsItems[counter+2].classList.remove('hidden')
    newsItems[counter+3].classList.add('current')
    newsItems[counter+3].classList.remove('hidden')
    return counter;
})

leftArrow.addEventListener('click', (e) => {
    if(counter <= 0) {
        counter = 12;
    }
    newsItems.forEach(function (item, index) {
        if(item.classList.contains('current')) {
            item.classList.remove('current')
            item.classList.add('hidden')
            counter--;
             
        }
        console.log(counter)
    })
    //console.log(counter)
    newsItems[counter].classList.add('current')
    newsItems[counter].classList.remove('hidden')
    newsItems[counter+1].classList.add('current')
    newsItems[counter+1].classList.remove('hidden')
    newsItems[counter+2].classList.add('current')
    newsItems[counter+2].classList.remove('hidden')
    newsItems[counter+3].classList.add('current')
    newsItems[counter+3].classList.remove('hidden')
    
})

