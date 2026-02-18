<!-- POTPUNO ZAMENITE SAV STARI JAVASCRIPT SA OVIM BLOKOM -->
<script>
document.addEventListener('DOMContentLoaded', function () {

    // =================================================
    //  1. KOD ZA MENI (MOBILNI + PADUJUĆI) - POPRAVLJENO
    // =================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Otvaranje/zatvaranje mobilnog menija
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Logika za svaki padajući meni
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        if (btn) {
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation(); // Sprečava da se klik odmah prosledi na window

                // Zatvori ostale otvorene menije
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });

                // Otvori/zatvori trenutni meni
                dropdown.classList.toggle('active');
            });
        }
    });

    // Zatvori padajući meni ako se klikne bilo gde van njega
    window.addEventListener('click', function(event) {
        if (window.innerWidth > 900) { // Ova logika radi samo na desktopu
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });

    // Zatvori mobilni meni kada se klikne na link (vaša postojeća funkcionalnost)
    document.querySelectorAll('#nav-list a').forEach(link => {
        link.addEventListener('click', (event) => {
            // Ne zatvaraj ako je klik na dugme za padajući meni
            if (link.classList.contains('dropbtn')) {
                return;
            }
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
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
                header.style.background = 'rgba(42, 10, 74, 0.95)'; // Malo tamnija nijansa
            } else {
                header.style.background = 'rgba(42, 10, 74, 0.95)';
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
</script>
