(function() {
    if (!localStorage.getItem('cookie-consent')) {
        var banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.style = 'position: fixed; bottom: 0; left: 0; width: 100%; background: #333; color: #fff; padding: 20px; text-align: center; z-index: 10000; font-family: sans-serif;';
        banner.innerHTML = `
            <div style="max-width: 1200px; margin: 0 auto;">
                Questo sito utilizza cookie di profilazione per raccogliere dati a fini commerciali e di vendita a terzi. 
                Continuando accetti la nostra <a href="privacy.html" style="color: #44bbff;">Privacy Policy</a>.
                <button id="accept-cookies" style="margin-left: 20px; padding: 10px 20px; background: #ed4933; color: #fff; border: none; cursor: pointer; border-radius: 4px;">Accetta e Prosegui</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookie-consent', 'true');
            banner.style.display = 'none';
            // Qui puoi attivare gli script di tracciamento (es. Google Analytics, Pixel di Facebook)
            console.log('Consenso acquisito: raccolta dati attivata.');
        });
    }
})();