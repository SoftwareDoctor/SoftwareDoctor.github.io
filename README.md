# Instructional Design Portfolio - Andrea Italiano

Questo progetto è un portfolio professionale per **Instructional Designer & Learning Specialist**, basato sul template "Dopetrope" di HTML5 UP e personalizzato per mostrare progetti e-learning, competenze pedagogiche e case study formativi.

## 🚀 Caratteristiche Principali
- **Design Responsive:** Ottimizzato per desktop, tablet e smartphone.
- **Sezioni Dedicate:** 
  - **Home:** Introduzione e focus sulle aree di expertise (E-learning, Consulenza Psicologica).
  - **Progetti:** Vetrina dei lavori con griglia moderna a due colonne.
  - **Blog:** Spazio per articoli con sistema di filtri per categoria.
  - **Chi sono:** Pagina biografica strutturata con timeline e focus sulle competenze core.
  - **Consulenza:** Pagina dedicata con integrazione diretta per la prenotazione appuntamenti.

## 🛠️ Aggiornamenti e Ottimizzazioni Avanzate (Recenti)

Il sito è stato sottoposto a un restyling tecnico e funzionale completo seguendo le migliori pratiche del settore.

### 1. SEO & Visibilità
È stata implementata una strategia SEO multi-livello per migliorare l'indicizzazione sui motori di ricerca:
- **Meta-Tag Strategici:** Ogni pagina ha ora titoli e descrizioni unici ottimizzati per parole chiave (Instructional Design, E-learning, Psicologia).
- **Social Sharing (Open Graph):** Tag `og:title`, `og:description` e `og:image` inseriti in ogni pagina per anteprime professionali su LinkedIn e Facebook.
- **Dati Strutturati (JSON-LD):** Implementato Schema.org su `index.html` per identificare Andrea Italiano come professionista e migliorare la presenza nei risultati Google.
- **Supporto Crawler:** Creati i file `sitemap.xml` e `robots.txt` per guidare correttamente gli algoritmi di scansione.

### 2. Analytics & Tracking
Predisposta l'infrastruttura per l'analisi del traffico e del comportamento utente:
- **Google Tag Manager (GTM):** Inserito in tutte le pagine (Placeholder ID: `GTM-XXXXXXX`). Permette di gestire GA4 e Search Console senza toccare il codice.
- **Microsoft Clarity:** Integrato per registrazioni sessioni e Heatmap (Placeholder ID: `CLARITY-XXXXX`).
- **Internal Search Tracking:** Aggiunta barra di ricerca nel blog con parametri URL predisposti per il tracciamento delle query interne.

### 3. Design & UI/UX
Restyling grafico mirato a migliorare la modernità e la facilità d'uso:
- **Design Interlocking:** Implementata una forma geometrica a "V" (clip-path) che permette alle sezioni di incastrarsi fluidamente tra loro.
- **Navbar Fixed:** Menu superiore fisso con sfondo azzurro "carta pesta" e testo in grassetto, sempre visibile durante lo scroll.
- **Modern Card UI:** Contenuti racchiusi in card bianche con ombreggiatura morbida e angoli arrotondati (`12px`).
- **Tipografia & Respiro:** Interlinea aumentata e rimozione del corsivo per una leggibilità superiore; padding standardizzati per dare più respiro ai contenuti.
- **Paginazione Dinamica:** Sistema di navigazione tra pagine con numeri cliccabili sia nel Blog che nei Progetti.

### 4. Funzionalità & Integrazioni
- **Calendly Integration:** Sostituito il vecchio form di contatto nella pagina Consulenza con il widget ufficiale di Calendly per la gestione automatizzata degli appuntamenti.
- **LinkedIn Icon Fix:** Aggiornamento a FontAwesome 6 per garantire la perfetta visibilità delle icone social.
- **Code Cleanup:** Rimossi asset inutilizzati e corretti riferimenti CSS obsoleti per migliorare le performance di caricamento.

## 📂 Struttura delle cartelle

```text
html5up/
├── index.html            # Pagina principale (Home) + JSON-LD
├── progetti.html         # Vetrina progetti con paginazione JS
├── blog.html             # Blog con filtri categoria e ricerca
├── chi-sono.html         # Biografia e competenze
├── consulenza-psicologica.html # Pagina con widget Calendly
├── contatti.html         # Form di contatto compatto
├── sitemap.xml           # Per l'indicizzazione Google
├── robots.txt            # Istruzioni per i motori di ricerca
│
├── assets/               
│   ├── css/              
│   │   ├── main.css      # Stile originale
│   │   └── professional.css # Tutte le nuove personalizzazioni UI/UX
│   ├── js/               
│   │   ├── main.js       # Logica interattiva principale
│   │   └── cookie-banner.js
```

## 🌐 Configurazione Finale
Per attivare il tracciamento reale:
1. Apri i file `.html`.
2. Cerca `GTM-XXXXXXX` e sostituiscilo con il tuo ID di Google Tag Manager.
3. Cerca `CLARITY-XXXXX` e sostituiscilo con il tuo ID di Microsoft Clarity.

---
*Manutenzione e Ottimizzazione a cura di Andrea Italiano.*
