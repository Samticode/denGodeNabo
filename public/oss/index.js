const navbar = document.getElementById('navbar');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 120) {
        navbar.style.backgroundColor = 'var(--navbar-seethrough)';
        navbar.style.borderBottom = '0.5px solid var(--black';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
});