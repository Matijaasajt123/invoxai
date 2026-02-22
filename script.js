document.addEventListener('DOMContentLoaded', function () {

    // =================================================
    //  1. MOBILNI MENI I DROPDOWN (DODATO/POPRAVLJENO)
    // =================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-list');

    // Otvaranje/Zatvaranje mobilnog menija
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Dropdown na klik za mobilne uređaje
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Sprecava da link odvede negde ako se klikne na podmeni
                if(e.target.classList.contains('dropbtn') || e.target.parentElement.classList.contains('dropbtn')) {
                    e.preventDefault();
                }
                this.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });

    // =================================================
    //  2. KOD ZA ANIMACIJE I EFEKTE (SAČUVANO)
    // =================================================

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(42, 10, 74, 0.95)';
            } else {
                header.style.background = 'rgba(42, 10, 74, 1)'; // Vraćeno na solid kad je na vrhu
            }
        });
    }

    // Intersection animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const animatedItems = document.querySelectorAll('.service-card, .pain-card, .case-study, .feature-card, .platform-card, .timeline-item, .comparison-item, .about-content');
    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = '0.6s ease-out';
        observer.observe(item);
    });

    // Parallax effect
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function () {
            const offset = window.pageYOffset * -0.3;
            hero.style.transform = `translateY(${offset}px)`;
        });
    }

    // Page fade-in
    document.body.classList.add('loaded');


    // =================================================
    //  3. KOD ZA KONTAKT FORMU (SAČUVANO)
    // =================================================
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("formStatus");

    if (form) {
        const webhookUrl = form.dataset.webhook;
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            statusEl.textContent = "Slanje u toku...";
            statusEl.style.color = "#a78bfa";
            const formData = new FormData(form);
            const payload = {
                ime_i_prezime: formData.get("fullName"),
                telefon: formData.get("phone"),
                industrija: formData.get("industry"),
                poruka: formData.get("message"),
                source: "invox.ai website",
                timestamp: new Date().toISOString()
            };
            try {
                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error("Webhook error");
                statusEl.textContent = "Upit je uspešno poslat. Javljamo se uskoro.";
                statusEl.style.color = "#34d399";
                form.reset();
            } catch (error) {
                statusEl.textContent = "Greška pri slanju. Pokušajte ponovo.";
                statusEl.style.color = "#f87171";
                console.error(error);
            }
        });
    }

});
