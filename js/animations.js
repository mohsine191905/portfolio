
// =========================================
// MOHSINE PORTFOLIO - ANIMATIONS
// =========================================


// 1. SCROLL REVEAL
const animatedElements = document.querySelectorAll(`
    .section-heading,
    .about-content,
    .highlight-card,
    .skill-card,
    .timeline-item,
    .project-card,
    .education-card,
    .contact-info,
    .contact-form-wrapper,
    .footer-content
`);

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-visible');

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    animatedElements.forEach((element, index) => {

        element.classList.add('reveal');

        // Stagger animation
        const delay = (index % 4) * 100;

        element.style.setProperty('--reveal-delay', `${delay}ms`);

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers
    animatedElements.forEach((element) => {
        element.classList.add('is-visible');
    });

}


// 2. NAVBAR SCROLL EFFECT
const header = document.querySelector('.header');

function updateHeader() {

    if (!header) return;

    header.classList.toggle('scrolled', window.scrollY > 40);

}

// Run once when the page loads
updateHeader();

// Update while scrolling
window.addEventListener('scroll', updateHeader, {
    passive: true
});
