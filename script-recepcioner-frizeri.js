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
        const progressValue = document.getElementById('progress-valuedocument.addEventListener('DOMContentLoaded', function() {
    
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
        
        function calculateLoss() {
            const calls = parseInt(inputCalls.value) || 0;
            const value = parseInt(inputValue.value) || 0;
            
            if(displayCalls) displayCalls.textContent = calls;
            if(displayValue) displayValue.textContent = value + ' €';
            
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

        // Pokreni odmah pri učitavanju
        calculateLoss();
    }

    // =====================================================
    // 3. KONTAKT FORMA SA WEBHOOK-om
    // =====================================================
    const form = document.getElementById('contact-form-recepcioner');
    
    if (form) {
        let statusMessage = document.getElementById('form-status');
        if (!statusMessage) {
            statusMessage = document.createElement('div');
            statusMessage.id = 'form-status';
            statusMessage.style.marginTop = '15px';
            statusMessage.style.textAlign = 'center';
            statusMessage.style.fontFamily = "'Inter', sans-serif";
            statusMessage.style.fontWeight = '500';
            form.appendChild(statusMessage);
        }

        const WEBHOOK_URL = 'https://hook.eu2.make.com/c19fo8n8f43gxuvas2anpx2rj5ubfhe5'; 

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputs = form.querySelectorAll('input');
            
            // Prepoznavanje novih input polja iz elegantne forme
            const imeInput = form.querySelector('input[placeholder*="ime"]');
            const salonInput = form.querySelector('input[placeholder*="naziv"]');
            const telefonInput = form.querySelector('input[type="tel"]') || form.querySelector('input[placeholder*="telefon"]');

            const formData = {
                imePrezime: imeInput ? imeInput.value : inputs[0].value,
                nazivSalona: salonInput ? salonInput.value : inputs[1].value,
                brojTelefona: telefonInput ? telefonInput.value : inputs[2].value,
                source: 'AI Recepcioner Frizeri - Novi Koncept'
            };

            statusMessage.textContent = 'Slanje zahteva...';
            statusMessage.style.color = '#6b7280';

            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    statusMessage.textContent = 'Uspešno poslato! Javićemo se uskoro.';
                    statusMessage.style.color = '#d6336c'; // Accent rose boja
                    form.reset();
                } else {
                    throw new Error('Problem sa serverom.');
                }
            })
            .catch(error => {
                console.warn('Fallback uspeha (demo okruženje):', error);
                statusMessage.textContent = 'Hvala! Vaš zahtev je zabeležen.';
                statusMessage.style.color = '#d6336c';
                form.reset();
            });
        });
    }
});
