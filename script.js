// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll background
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
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

    const animatedItems = document.querySelectorAll('.service-card, .pain-card, .case-study');
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

// Inject mobile menu CSS animation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(59, 10, 69, 0.95);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
            z-index: 999;
        }

        .nav-menu.active {
            left: 0;
        }
    }

    body.loaded {
        opacity: 1;
    }

    body {
        opacity: 0;
        transition: opacity 0.4s ease;
    }
`;
document.head.appendChild(style);

