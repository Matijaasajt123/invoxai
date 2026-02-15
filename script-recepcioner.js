document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // 1. MOBILE MENU (POPRAVKA)
    // =====================================================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        // Klik na hamburger ikonicu
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Opcionalno: Animacija linijica (pretvaranje u X)
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            // Ovde se može dodati CSS klasa za animaciju ako je potrebno
        });

        // Zatvaranje menija kada se klikne na neki link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // =====================================================
    // 2. PREMIUM KALKULATOR GUBITKA
    // =====================================================
    const inputCalls = document.getElementById('input-calls');
    const inputValue = document.getElementById('input-value');
    
    // Provera da li elementi postoje pre pokretanja koda (da ne bi bilo grešaka na drugim stranama)
    if (inputCalls && inputValue) {
        const displayCalls = document.getElementById('calls-display');
        const displayValue = document.getElementById('value-display');
        
        const resMissed = document.getElementById('missed-calls');
        const resRevenue = document.getElementById('lost-revenue');
        const resYearly = document.getElementById('lost-revenue-yearly'); // Novi element za godišnji nivo
        
        const progressCalls = document.getElementById('progress-calls');
        const progressValue = document.getElementById('progress-value');

        // Funkcija za ažuriranje progress bara (boja koja prati kružić)
        function updateProgress(input, progressBar) {
            if (!progressBar) return;
            const min = input.min ? parseFloat(input.min) : 0;
            const max = input.max ? parseFloat(input.max) : 100;
            const val = input.value;
            const percentage = ((val - min) / (max - min)) * 100;
            progressBar.style.width = percentage + '%';
        }

        // Glavna funkcija za računanje
        function calculateLoss() {
            const calls = parseInt(inputCalls.value) || 0;
            const value = parseInt(inputValue.value) || 0;
            
            // Ažuriranje teksta iznad slajdera
            if(displayCalls) displayCalls.textContent = calls;
            if(displayValue) displayValue.textContent = value + ' €';
            
            // Ažuriranje vizuelnih barova
            updateProgress(inputCalls, progressCalls);
            updateProgress(inputValue, progressValue);

            // === FORMULA ===
            // 1. Propušteni pozivi (Industrijski prosek ~28%)
            const missedCallsCount = Math.round(calls * 0.28);
            
            // 2. Izgubljeni prihod (60% tih ljudi bi zakazalo da se neko javio)
            const monthlyLoss = Math.round(missedCallsCount * 0.60 * value);
            
            // 3. Godišnji gubitak
            const yearlyLoss = monthlyLoss * 12;

            // Prikaz rezultata (koristimo .toLocaleString za format 5.000 umesto 5000)
            if(resMissed) resMissed.textContent = missedCallsCount;
            if(resRevenue) resRevenue.textContent = monthlyLoss.toLocaleString('sr-RS') + ' €';
            if(resYearly) resYearly.textContent = yearlyLoss.toLocaleString('sr-RS') + ' €';
        }

        // Slušaoci događaja (reaguju na pomeranje slajdera)
        inputCalls.addEventListener('input', calculateLoss);
        inputValue.addEventListener('input', calculateLoss);

        // Pokreni odmah jednom da se postave početne vrednosti
        calculateLoss();
    }

    // =====================================================
    // 3. KONTAKT FORMA (Slanje podataka)
    // =====================================================
    const form = document.getElementById('contact-form-recepcioner');
    
    if (form) {
        // Kreiramo element za status poruke ako ne postoji u HTML-u
        let statusMessage = document.getElementById('form-status');
        if (!statusMessage) {
            statusMessage = document.createElement('div');
            statusMessage.id = 'form-status';
            statusMessage.style.marginTop = '15px';
            statusMessage.style.textAlign = 'center';
            statusMessage.style.fontWeight = '600';
            form.appendChild(statusMessage);
        }

        // URL Webhook-a (Zameni ovo svojim pravim linkom kada ga napraviš)
        const WEBHOOK_URL = 'https://vas-webhook-url.com/endpoint'; 

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Automatsko preuzimanje inputa (prilagođeno tvojoj HTML strukturi bez ID-jeva)
            const inputs = form.querySelectorAll('input');
            
            // Pretpostavljamo redosled iz HTML-a: Ime, Ordinacija, Telefon
            // Ili koristimo placeholder attributes za preciznost
            const imeInput = form.querySelector('input[placeholder*="Ime"]');
            const ordinacijaInput = form.querySelector('input[placeholder*="Ordinacije"]') || form.querySelector('input[placeholder*="ordinacije"]');
            const telefonInput = form.querySelector('input[type="tel"]') || form.querySelector('input[placeholder*="Telefon"]');

            const formData = {
                imePrezime: imeInput ? imeInput.value : inputs[0].value,
                nazivOrdinacije: ordinacijaInput ? ordinacijaInput.value : inputs[1].value,
                brojTelefona: telefonInput ? telefonInput.value : inputs[2].value,
                source: 'AI Recepcioner Landing Page'
            };

            // Prikaz "Slanje..."
            statusMessage.textContent = 'Slanje...';
            statusMessage.style.color = '#6b7280';

            // Slanje
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    statusMessage.textContent = 'Hvala! Primili smo vaš zahtev.';
                    statusMessage.style.color = '#059669'; // Zelena
                    form.reset();
                } else {
                    throw new Error('Problem sa serverom.');
                }
            })
            .catch(error => {
                // Ako nemaš pravi Webhook, ovo će se uvek desiti, pa ćemo simulirati uspeh za test
                // KADA BUDEŠ IMAO PRAVI URL, OBRIŠI OVAJ DEO ISPOD:
                console.warn('Simulacija uspeha (jer nema pravog webhook-a):', error);
                statusMessage.textContent = 'Hvala! (Demo: Podaci su "poslati")';
                statusMessage.style.color = '#059669';
                form.reset();
                
                // KADA BUDEŠ IMAO PRAVI URL, OTKOMENTARIŠI OVO DOLE A OBRIŠI GORNJE:
                /*
                statusMessage.textContent = 'Došlo je do greške. Pokušajte ponovo.';
                statusMessage.style.color = '#dc2626';
                */
            });
        });
    }
});
