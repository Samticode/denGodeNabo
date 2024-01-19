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


document.getElementById('submitLong').addEventListener('click', (e) => {
    e.preventDefault();
    let emailParm = {
        from_name: document.getElementById('nameLong').value,
        from_phone: document.getElementById('numberLong').value,
        message: document.getElementById('messageLong').value
    }

    emailjs.send('service_cde0kbq', 'template_np6rres', emailParm, "WuyFBDuOpJYoOisny")
        .then(() => {
            location.reload();
            clearInput('nameLong', 'numberLong', 'messageLong');
        }).catch((err) => {
            console.error(err);
        });
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
            clearInput('name', 'number', 'message');
        }).catch((err) => {
            console.error(err);
        });
});

function clearInput(one, two, three) {
    document.getElementById(one).value = '';
    document.getElementById(two).value = '';
    document.getElementById(three).value = '';
}