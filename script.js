document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(59, 10, 69, 0.95)';
        } else {
            header.style.background = 'rgba(59, 10, 69, 0.95)';
        }
    });

    // Intersection animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    const animatedItems = document.querySelectorAll('.service-card, .pain-card, .case-study, .feature-card, .platform-card, .timeline-item, .comparison-item, .about-content');
    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = '0.6s ease';
        observer.observe(item);
    });

    // Parallax effect (FIXED to select .hero)
    window.addEventListener('scroll', function () {
        const hero = document.querySelector('.hero');
        if (hero) {
            const offset = window.pageYOffset * -0.3;
            hero.style.transform = `translateY(${offset}px)`;
        }
    });

    // Page fade-in
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('ai-dropdown-btn');
    const dropdownContent = document.getElementById('ai-dropdown-content');

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Sprečava skakanje stranice
            e.stopPropagation(); // Sprečava da se klik odmah prosledi na window
            dropdownContent.classList.toggle('show');
        });

        // Zatvori meni ako korisnik klikne bilo gde van njega
        window.addEventListener('click', function(e) {
            if (!dropdownBtn.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }
});
// Page fade-in CSS is moved to styles.css for cleaner code
// The mobile menu CSS was moved to styles.css for cleaner code and to fix the conflict.
