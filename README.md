# Instructional Design Portfolio

Questo progetto è un portfolio professionale per **Instructional Designer & Learning Specialist**, basato sul template "Dopetrope" di HTML5 UP e personalizzato per mostrare progetti e-learning, competenze pedagogiche e case study formativi.

## 🚀 Caratteristiche
- **Design Responsive:** Ottimizzato per desktop, tablet e smartphone.
- **Sezioni Dedicate:** 
  - **Home:** Introduzione e focus sulle aree di expertise (E-learning, Curriculum Design, Strategia).
  - **Progetti:** Vetrina dei lavori con sidebar per dettagli tecnici.
  - **Blog:** Spazio per articoli, riflessioni e approfondimenti sulla formazione.
  - **Chi sono:** Pagina biografica strutturata con timeline per esperienze, studi e skills.
- **Contatti:** Footer semplificato con link diretti a social e email.

## 📂 Struttura delle cartelle

```text
html5up/
├── index.html            # Pagina principale (Home)
├── progetti.html         # Vetrina dei progetti e case study
├── blog.html             # Articoli e riflessioni
├── chi-sono.html         # Biografia, skills, esperienze e studi
├── LICENSE.txt           # Licenza Creative Commons (HTML5 UP)
├── README.md             # Documentazione del progetto
│
├── assets/               # Risorse del sito
│   ├── css/              # File CSS compilati (main.css)
│   ├── js/               # Script (jQuery, Breakpoints, Main.js)
│   ├── sass/             # File sorgente SASS per modifiche avanzate allo stile
│   └── webfonts/         # Icone FontAwesome e font di sistema
│
└── images/               # Cartella per le tue immagini e demo
    ├── pic01.jpg         # Immagine principale bio
    ├── pic02.jpg...      # Immagini progetti e portfolio
    └── bg.png            # Sfondi ed elementi grafici
```

## 🛠️ Come personalizzare il sito

1. **Testi:** Apri i file `.html` con un editor di testo (come VS Code) e cerca i testi tra i tag (es. `<h2>`, `<p>`, `<h3>`) per inserire i tuoi contenuti.
2. **Immagini:** Sostituisci i file nella cartella `images/` con i tuoi file, mantenendo preferibilmente gli stessi nomi o aggiornando il percorso nel codice HTML:
   ```html
   <img src="images/tuo-progetto.jpg" alt="Descrizione progetto" />
   ```
3. **Contatti:** Nel footer di ogni pagina, cerca la sezione `<h2>Contatti</h2>` e inserisci la tua email e il link al tuo profilo LinkedIn.
4. **Skills:** Nella pagina `chi-sono.html`, modifica la lista `<ul>` sotto "Competenze & Software" per riflettere i tuoi strumenti (es. Storyline, Rise, Captivate).

## 🌐 Anteprima Locale
Per vedere il sito in locale:
- Fai doppio clic su `index.html` per aprirlo nel browser.
- Oppure usa un server locale come `Live Server` (estensione VS Code) o esegui `python -m http.server` nel terminale per una gestione corretta dei percorsi.

---
*Basato sul template "Dopetrope" di [HTML5 UP](https://html5up.net). Rilasciato sotto licenza CCA 3.0.*
