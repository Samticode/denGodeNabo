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
    } else if (indexCarouselItem === 4) {
        changeDisplays(indexCarouselItem)
    } else {
        changeDisplays(indexCarouselItem)
    }
    
    indexCarouselItem = (indexCarouselItem + 1) % 6;
    return;
}

function changeDisplays(index) {
    const carouselItemActive = document.querySelector('.carouselItem.active');

    carouselItemActive.classList.remove('active');
    carouselItem[index].classList.add('active');
    
    return;
}

setInterval(changeCarouselItem, 2000);