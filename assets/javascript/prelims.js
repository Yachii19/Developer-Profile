const headerEl = document.querySelector('#header');
const catLogoEl = document.querySelector('#cat-logo-container');
const nameEl = document.querySelector('#name');
const navEls = document.querySelectorAll('#nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        headerEl.classList.add('header-scroll');
        catLogoEl.classList.add('cat-logo-container-scroll');
        nameEl.classList.add('name-scroll');
        navEls.forEach(link => link.classList.add('navigation-scroll'));
    } else if (window.scrollY < 80) {
        header.classList.remove('header-scroll');
        catLogoEl.classList.remove('cat-logo-container-scroll');
        nameEl.classList.remove('name-scroll');
        navEls.forEach(link => link.classList.remove('navigation-scroll'));
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('dropdown-btn');
    const dropdown = document.getElementById('dropdown');

    button.addEventListener('click', function() {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            setTimeout(() => dropdown.style.display = 'none', 300);
        } else {
            dropdown.style.display = 'block';
            setTimeout(() => dropdown.classList.add('show'), 10);
        }

        navLinks.forEach(link => link.classList.remove('active'));
    });

    const navLinks = document.querySelectorAll('#dropdown-nav li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');
        });

        
    });


    
});


    