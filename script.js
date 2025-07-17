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

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .stats-card, .benefit-card, .case-study-card, .comparison-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (target.toString().includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statsNumber = entry.target.querySelector('.stats-number');
                const text = statsNumber.textContent;
                
                if (text.includes('%')) {
                    const number = parseInt(text);
                    animateCounter(statsNumber, text);
                } else if (text === '24/7') {
                    // Special case for 24/7
                    statsNumber.textContent = '24/7';
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsCards = document.querySelectorAll('.stats-card');
    statsCards.forEach(card => {
        statsObserver.observe(card);
    });
    
    // Video play/pause on scroll (optional performance optimization)
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Video is in view, allow autoplay if user interacts
                video.setAttribute('preload', 'metadata');
            } else {
                // Video is out of view, pause if playing
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, { threshold: 0.3 });
    
    videos.forEach(video => {
        videoObserver.observe(video);
        
        // Add click event to play/pause
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
    
    // Parallax effect for hero section (subtle)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Form validation and submission (if contact form is added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Utility function to debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Debounced scroll handler
    const debouncedScrollHandler = debounce(function() {
        // Add any scroll-based functionality here
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Add click tracking for analytics (placeholder)
    function trackClick(elementName, action) {
        // Placeholder for analytics tracking
        console.log(`Tracked: ${elementName} - ${action}`);
        
        // Example: Google Analytics event tracking
        // gtag('event', action, {
        //     event_category: 'engagement',
        //     event_label: elementName
        // });
    }
    
    // Track button clicks
    const trackableButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-contact, .nav-cta');
    trackableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackClick('button', `click_${buttonText.toLowerCase().replace(/\s+/g, '_')}`);
        });
    });
    
    // Track external link clicks
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https://wa.me"], a[href^="https://instagram.com"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            trackClick('external_link', `click_${href}`);
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const hamburger = document.getElementById('hamburger');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
        
        // Enter key on buttons
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });
    
    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    // Trap focus in mobile menu when open
    document.addEventListener('keydown', function(e) {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active') && e.key === 'Tab') {
            const focusableInMenu = navMenu.querySelectorAll('a, button');
            const firstFocusable = focusableInMenu[0];
            const lastFocusable = focusableInMenu[focusableInMenu.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
    
    // Lazy loading for images (if more images are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add error handling for videos
    videos.forEach(video => {
        video.addEventListener('error', function() {
            console.error('Video failed to load:', video.src);
            // You could show a fallback image or message here
            const fallback = document.createElement('div');
            fallback.className = 'video-fallback';
            fallback.innerHTML = '<p>Video trenutno nije dostupan. Molimo pokušajte kasnije.</p>';
            video.parentNode.replaceChild(fallback, video);
        });
    });
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
});

// Add CSS for mobile menu animation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
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
        
        .nav-menu .nav-link {
            margin: 1rem 0;
            font-size: 1.2rem;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    .video-fallback {
        background: #374151;
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        color: #d1d5db;
        border: 2px solid rgba(255, 255, 255, 0.1);
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

