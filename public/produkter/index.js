const thirdATag = document.querySelector('a:nth-child(3)');
const links = document.querySelectorAll('.linksss');

function changeColorOnScroll(element) {
    if (window.scrollY > 120) {
        element.style.color = 'var(--black)';
    } else {
        element.style.color = 'var(--white)';
    }
}

window.addEventListener('scroll', () => {
    changeColorOnScroll(thirdATag);

    if (window.innerWidth < 500) {
        links.forEach(link => {
            changeColorOnScroll(link);
        });
    }
});