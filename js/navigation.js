
// =========================================
// MOHSINE PORTFOLIO - NAVIGATION
// =========================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


// 1. MOBILE MENU
if (menuToggle && navLinks) {

    // Initial accessibility state
    menuToggle.setAttribute('aria-expanded', 'false');

    function closeMenu() {

        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');

        menuToggle.setAttribute('aria-expanded', 'false');

    }

    function toggleMenu() {

        const isOpen = navLinks.classList.toggle('active');

        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));

    }

    // Open / Close menu
    menuToggle.addEventListener('click', toggleMenu);


    // Close menu after clicking a link
    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', closeMenu);

    });


    // Close menu when clicking outside
    document.addEventListener('click', (event) => {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }

    });


    // Close menu with Escape key
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {
            closeMenu();
        }

    });

}


// 2. ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll('section[id]');
const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

if ('IntersectionObserver' in window) {

    const navObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        const isActive =
                            link.getAttribute('href') ===
                            `#${entry.target.id}`;

                        link.classList.toggle('active', isActive);

                    });

                }

            });

        },

        {
            threshold: 0.3
        }

    );

    sections.forEach(section => {
        navObserver.observe(section);
    });

}
