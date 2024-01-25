const thirdATag = document.querySelector('a:nth-child(3)');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 120) {
        thirdATag.style.color = 'var(--black)';
    } else {
        thirdATag.style.color = 'var(--white)';
    }
});