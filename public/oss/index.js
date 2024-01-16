const navbar = document.getElementById('navbar');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 120) {
        navbar.style.backgroundColor = 'var(--navbar-seethrough)';
        navbar.style.borderBottom = '0.5px solid var(--black)';
        // navbar.style.mixBlendMode = 'difference';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
});



const carouselItem = document.querySelectorAll('#carouselItem');
let indexCarouselItem = 0;

function changeCarouselItem() {
    if (indexCarouselItem === 0) {
        changeDisplays(indexCarouselItem)
    } else if (indexCarouselItem === 1) {
        changeDisplays(indexCarouselItem)
    } else if (indexCarouselItem === 2) {
        changeDisplays(indexCarouselItem)
    } else if (indexCarouselItem === 3) {
        changeDisplays(indexCarouselItem)
    } else {
        changeDisplays(indexCarouselItem)
    }
    
    indexCarouselItem = (indexCarouselItem + 1) % 5;
    return;
}

function changeDisplays(index) {
    const carouselItemActive = document.querySelector('.carouselItem.active');

    carouselItemActive.classList.remove('active');
    carouselItem[index].classList.add('active');
    
    return;
}

setInterval(changeCarouselItem, 4000);