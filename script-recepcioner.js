document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form-recepcioner');
    const statusMessage = document.getElementById('form-status');

    // ===== VAŽNO: Unesite URL vašeg Webhook-a ovde =====
    const WEBHOOK_URL = 'https://vas-webhook-url.com/endpoint';
    // =====================================================

    form.addEventListener('submit', function(event ) {
        event.preventDefault(); // Sprečava podrazumevano slanje forme

        // Prikupljanje podataka iz forme
        const formData = {
            imePrezime: document.getElementById('imePrezime').value,
            nazivOrdinacije: document.getElementById('nazivOrdinacije').value,
            brojTelefona: document.getElementById('brojTelefona').value,
            source: 'AI Recepcioner Landing Page' // Dodatni podatak o izvoru
        };

        // Prikaz poruke o slanju
        statusMessage.textContent = 'Slanje...';
        statusMessage.style.color = '#6b7280';

        // Slanje podataka na Webhook
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                // Uspešno poslato
                statusMessage.textContent = 'Hvala! Uskoro ćemo vas kontaktirati.';
                statusMessage.style.color = '#059669'; // Zelena boja za uspeh
                form.reset(); // Resetuje polja forme
            } else {
                // Greška na serveru
                throw new Error('Problem sa slanjem. Pokušajte ponovo.');
            }
        })
        .catch(error => {
            // Greška u mreži ili slanju
            statusMessage.textContent = 'Došlo je do greške. Proverite konekciju i pokušajte ponovo.';
            statusMessage.style.color = '#dc2626'; // Crvena boja za grešku
            console.error('Webhook Error:', error);
        });
    });
});
