const navbar = document.getElementById('navbar');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 120) {
        navbar.style.backgroundColor = 'var(--navbar-seethrough)';
        navbar.style.borderBottom = '0.5px solid var(--black';
        // navbar.style.mixBlendMode = 'difference';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
});



document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let emailParm = {
        from_name: document.getElementById('name').value,
        from_phone: document.getElementById('number').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_cde0kbq', 'template_np6rres', emailParm, "WuyFBDuOpJYoOisny")
        .then(() => {
            location.reload();
            clearInput();
        });
});

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('message').value = '';
}