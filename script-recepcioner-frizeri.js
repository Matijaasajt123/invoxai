document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // 1. MOBILE MENU 
    // =====================================================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // =====================================================
    // 2. PREMIUM KALKULATOR GUBITKA ZA FRIZERE
    // =====================================================
    const inputCalls = document.getElementById('input-calls');
    const inputValue = document.getElementById('input-value');
    
    if (inputCalls && inputValue) {
        const displayCalls = document.getElementById('calls-display');
        const displayValue = document.getElementById('value-display');
        
        const resMissed = document.getElementById('missed-calls');
        const resRevenue = document.getElementById('lost-revenue');
        const resYearly = document.getElementById('lost-revenue-yearly');
        
        const progressCalls = document.getElementById('progress-calls');
        const progressValue = document.getElementById('progress-value');

        function updateProgress(input, progressBar) {
            if (!progressBar) return;
            const min = input.min ? parseFloat(input.min) : 0;
            const max = input.max ? parseFloat(input.max) : 100;
            const val = input.value;
            const percentage = ((val - min) / (max - min)) * 100;
            progressBar.style.width = percentage + '%';
        }

        function calculateLoss() {
            const calls = parseInt(inputCalls.value) || 0;
            const value = parseInt(inputValue.value) || 0;
            
            if(displayCalls) displayCalls.textContent = calls;
            if(displayValue) displayValue.textContent = value + ' €';
            
            updateProgress(inputCalls, progressCalls);
            updateProgress(inputValue, progressValue);

            // === FORMULA ===
            // 1. Propušteni pozivi (Prosek ~28%)
            const missedCallsCount = Math.round(calls * 0.28);
            
            // 2. Izgubljeni prihod (60% bi zakazalo)
            const monthlyLoss = Math.round(missedCallsCount * 0.60 * value);
            
            // 3. Godišnji gubitak
            const yearlyLoss = monthlyLoss * 12;

            if(resMissed) resMissed.textContent = missedCallsCount;
            if(resRevenue) resRevenue.textContent = monthlyLoss.toLocaleString('sr-RS') + ' €';
            if(resYearly) resYearly.textContent = yearlyLoss.toLocaleString('sr-RS') + ' €';
        }

        inputCalls.addEventListener('input', calculateLoss);
        inputValue.addEventListener('input', calculateLoss);

        calculateLoss();
    }

    // =====================================================
    // 3. KONTAKT FORMA
    // =====================================================
    const form = document.getElementById('contact-form-recepcioner');
    
    if (form) {
        let statusMessage = document.getElementById('form-status');
        if (!statusMessage) {
            statusMessage = document.createElement('div');
            statusMessage.id = 'form-status';
            statusMessage.style.marginTop = '15px';
            statusMessage.style.textAlign = 'center';
            statusMessage.style.fontWeight = '600';
            form.appendChild(statusMessage);
        }

        const WEBHOOK_URL = 'https://hook.eu2.make.com/c19fo8n8f43gxuvas2anpx2rj5ubfhe5'; 

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputs = form.querySelectorAll('input');
            
            // Promenjen selektor da prepoznaje "Naziv salona"
            const imeInput = form.querySelector('input[placeholder*="Ime"]');
            const salonInput = form.querySelector('input[placeholder*="salona"]') || form.querySelector('input[placeholder*="Salona"]');
            const telefonInput = form.querySelector('input[type="tel"]') || form.querySelector('input[placeholder*="Telefon"]');

            const formData = {
                imePrezime: imeInput ? imeInput.value : inputs[0].value,
                nazivSalona: salonInput ? salonInput.value : inputs[1].value,
                brojTelefona: telefonInput ? telefonInput.value : inputs[2].value,
                source: 'AI Recepcioner Frizeri Landing Page' // Dodat indikator izvora
            };

            statusMessage.textContent = 'Slanje...';
            statusMessage.style.color = '#6b7280';

            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    statusMessage.textContent = 'Hvala! Primili smo vaš zahtev.';
                    statusMessage.style.color = '#059669'; 
                    form.reset();
                } else {
                    throw new Error('Problem sa serverom.');
                }
            })
            .catch(error => {
                console.warn('Simulacija uspeha (jer nema pravog webhook-a):', error);
                statusMessage.textContent = 'Hvala! (Demo: Podaci su "poslati")';
                statusMessage.style.color = '#059669';
                form.reset();
            });
        });
    }
});
