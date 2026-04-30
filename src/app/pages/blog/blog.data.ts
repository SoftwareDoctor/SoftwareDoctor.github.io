export type BlogCategory = 'all' | 'hr' | 'ai' | 'psicologia' | 'id' | 'formazione';

export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  content: string;
  category: Exclude<BlogCategory, 'all'>;
  sources: string[];
  keyConcepts: string[];
  cta: {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'emozioni-barrett',
    title: 'Le emozioni non sono quello che credi — leggere Barrett cambia tutto',
    image: '/images/pic-barrett.jpg',
    alt: 'Copertina Come sono fatte le emozioni di Lisa Feldman Barrett',
    description:
      'Pensavi che paura, rabbia e gioia fossero reazioni automatiche del cervello? Lisa Feldman Barrett dimostra che le emozioni sono costruzioni — e questa scoperta ti dà molto più potere di quanto immagini.',
    category: 'psicologia',
    content: `
      <header>
        <h2>Le emozioni non sono reazioni. Sono costruzioni.</h2>
        <p>Una delle certezze più radicate su come funzioniamo è che le emozioni ci capitino —
        automatiche, universali, fuori dal nostro controllo. La scienza dice qualcosa di molto
        diverso. E saperlo cambia tutto.</p>
      </header>

      <p>Hai mai notato che la stessa situazione genera emozioni completamente diverse in persone
      diverse? Un esame, una critica, una folla — c'è chi prova paura, chi eccitazione, chi noia.
      E anche tu, in momenti diversi della vita, puoi rispondere alla stessa cosa in modi opposti.
      Per decenni la psicologia ha spiegato questo con le differenze individuali. Lisa Feldman Barrett
      propone qualcosa di più radicale: le emozioni non sono universali perché non sono biologicamente
      "programmate". Sono <strong>costruzioni attive del cervello</strong>.</p>

      <h3>Il modello classico: emozioni come reazioni fisse</h3>
      <p>Il modello tradizionale — quello che probabilmente hai studiato — descrive le emozioni come
      reazioni biologicamente fisse: esiste un circuito della paura, uno della rabbia, uno della gioia,
      ognuno con la sua espressione facciale universale e la sua area cerebrale dedicata.
      Vedi un pericolo → il cervello attiva la paura → il corpo reagisce. Automatico. Universale.</p>

      <p>Paul Ekman, con i suoi studi sulle espressioni facciali negli anni '60 e '70, aveva convinto
      la comunità scientifica che esistessero almeno sei emozioni di base riconoscibili in tutte le culture.
      Questo modello ha dominato psicologia, neuroscienze e persino il diritto penale per decenni.</p>

      <p>Il problema: le prove empiriche non reggono. Decenni di neuroimaging non hanno mai trovato
      un'area cerebrale esclusivamente dedicata a una singola emozione. Le espressioni facciali variano
      enormemente tra culture. E lo stesso stato corporeo può essere vissuto come paura, eccitazione o
      rabbia a seconda del contesto.</p>

      <h3>La teoria delle emozioni costruite</h3>
      <p>Nel 2017 Barrett pubblica <em>How Emotions Are Made</em> (in italiano:
      <em>Come sono fatte le emozioni</em>, Giunti Psicologia, 2023), presentando la sua
      <strong>Teoria delle Emozioni Costruite</strong> (Theory of Constructed Emotion, TCE).
      La tesi centrale: le emozioni non sono risposte a ciò che accade nel mondo — sono
      <strong>predizioni</strong> che il cervello genera in anticipo, basandosi sull'esperienza
      passata, sulle sensazioni corporee e sul contesto culturale.</p>

      <p>Il cervello, secondo Barrett, non è un organo reattivo ma un organo <strong>predittivo</strong>.
      In ogni momento genera simulazioni di ciò che probabilmente sta accadendo — e usa queste
      simulazioni per dare senso agli input sensoriali in arrivo. Le emozioni emergono da questo processo:
      il cervello interpreta le sensazioni del corpo (interocezione) usando categorie apprese, e costruisce
      un'esperienza emotiva coerente con il contesto.</p>

      <blockquote>
        "Le emozioni sono costruzioni del mondo, non reazioni ad esso."
        <cite>— Lisa Feldman Barrett, <em>Social Cognitive and Affective Neuroscience</em>, 2017</cite>
      </blockquote>

      <h3>Il ruolo dell'interocezione</h3>
      <p>Un concetto chiave nella teoria di Barrett è l'<strong>interocezione</strong>: la capacità
      del cervello di percepire e interpretare i segnali provenienti dall'interno del corpo — battito
      cardiaco, respiro, tensione muscolare, sensazioni viscerali. Questi segnali non arrivano al
      cervello come emozioni già formate: arrivano come dati grezzi, ambigui. È il cervello che li
      interpreta, li categorizza e li trasforma in un'esperienza emotiva specifica.</p>

      <p>Questo spiega perché la stessa accelerazione cardiaca può essere vissuta come paura durante
      una minaccia o come eccitazione prima di un evento atteso: il segnale corporeo è lo stesso, ma
      il contesto cambia la costruzione emotiva.</p>

      <p>La ricerca pubblicata su <em>Nature Reviews Neuroscience</em> (Barrett &amp; Simmons, 2015)
      ha mostrato come le previsioni interoceptive del cervello siano fondamentali nella costruzione
      degli stati affettivi, supportando l'ipotesi che l'interocezione sia al cuore del modello interno
      del cervello.</p>

      <h3>Cosa cambia per noi: implicazioni pratiche</h3>
      <p>Se le emozioni sono costruzioni — e non reazioni fisse — allora abbiamo
      <strong>molto più controllo</strong> di quanto immaginiamo. Non nel senso di "reprimere" le
      emozioni, ma nel senso di poter intervenire sui fattori che le costruiscono:</p>

      <ul>
        <li><strong>Granularità emotiva:</strong> più parole abbiamo per descrivere ciò che sentiamo,
        più il cervello costruisce emozioni sfumate e gestibili. Ricerche mostrano che le persone con
        alta granularità emotiva soffrono meno di ansia e depressione.</li>
        <li><strong>Cura del corpo:</strong> sonno, alimentazione, movimento influenzano direttamente
        il "budget corporeo" (body budget) del cervello — e quindi la qualità delle emozioni costruite.</li>
        <li><strong>Contesto e concetti:</strong> cambiare il modo in cui interpretiamo una situazione
        non è solo "pensiero positivo" — è letteralmente cambiare i materiali con cui il cervello
        costruisce l'emozione.</li>
      </ul>

      <h3>Perché questo libro vale la lettura</h3>
      <p>Barrett non scrive solo per i neuroscienziati. Scrive per chiunque voglia capire perché
      si sente come si sente — e cosa può fare al riguardo. La sua teoria non è consolatoria né
      semplicistica: è scientificamente solida, pubblicata sulle riviste più autorevoli del settore,
      e al tempo stesso profondamente liberatoria. Sapere che le emozioni si costruiscono significa
      che possono essere, almeno in parte, ri-costruite.</p>

      <p>Come psicologo, trovo questa prospettiva fondamentale nel lavoro clinico. Spostare il frame
      da "le emozioni mi capitano" a "il mio cervello le costruisce" è già, di per sé, un atto
      terapeutico.</p>
    `,
    sources: [
      'Barrett, L. F. (2017). <em>The theory of constructed emotion.</em> Social Cognitive and Affective Neuroscience, 12(1), 1–23.',
      'Barrett & Simmons (2015). <em>Interoceptive predictions in the brain.</em> Nature Reviews Neuroscience, 16, 419–429.',
      'Kleckner et al. (2017). <em>Evidence for a large-scale brain system supporting allostasis and interoception.</em> Nature Human Behaviour.',
      'Lindquist et al. (2012). <em>The brain basis of emotion: a meta-analytic review.</em> Behavioral and Brain Sciences, 35(3), 121–143.',
    ],
    keyConcepts: [
      'Teoria delle Emozioni Costruite (TCE)',
      'Cervello predittivo',
      'Interocezione',
      'Granularità emotiva',
      'Budget corporeo (body budget)',
      'Allostasi',
    ],
    cta: {
      title: 'Vuoi esplorare il tuo mondo emotivo?',
      text: 'Se questo articolo ti ha incuriosito e senti che lavorare sulle tue emozioni potrebbe aiutarti, possiamo parlarne in un primo colloquio — senza impegni.',
      buttonText: 'Prenota un colloquio gratuito',
      buttonLink: '/consulenza-psicologica',
    },
  },
  {
    slug: 'neurofeedback-cervello',
    title: 'Neurofeedback: il personal trainer del tuo cervello',
    image: '/images/pic-neurofeedback.jpg',
    alt: 'Illustrazione di onde cerebrali EEG e neurofeedback',
    description:
      'Immagina di poter vedere le onde del tuo cervello in tempo reale e allenarle come un muscolo. Non è fantascienza: è il neurofeedback, e funziona su ansia, sonno, concentrazione e molto altro.',
    category: 'psicologia',
    content: `
      <header>
        <h2>Allena il cervello come un muscolo. Non è una metafora.</h2>
        <p>Il neurofeedback è una tecnica non invasiva che permette di osservare l'attività
        elettrica del proprio cervello in tempo reale — e di imparare a modificarla.
        Sessant'anni di ricerca lo supportano.</p>
      </header>

      <p>Quando andiamo in palestra, alleniamo muscoli specifici attraverso esercizi ripetuti e
      feedback immediati: il peso che senti, lo specchio, la fatica. Il cervello impara allo stesso
      modo — attraverso la ripetizione e il feedback. Il neurofeedback usa esattamente questo
      principio: ti mostra cosa sta facendo il tuo cervello in questo momento, e ti aiuta ad
      allenarlo verso stati più funzionali.</p>

      <h3>Cos'è il neurofeedback e come funziona</h3>
      <p>Il neurofeedback è una forma specializzata di biofeedback che si focalizza sull'attività
      elettrica cerebrale. Durante una sessione, sensori EEG (elettroencefalogramma) vengono
      posizionati sul cuoio capelluto per rilevare le onde cerebrali in tempo reale. Questi segnali
      vengono tradotti in un output visivo o sonoro — spesso un film, un gioco o un grafico — che
      il soggetto può osservare sullo schermo.</p>

      <p>Il meccanismo è semplice ma potente: quando il cervello produce il ritmo desiderato, il film
      continua a scorrere o la musica suona. Quando si allontana dall'obiettivo, si interrompe.
      Il cervello, ricevendo questo feedback momento per momento, impara gradualmente ad autoregolarsi
      — senza sforzo conscio, senza farmaci.</p>

      <p>Ogni quarto di secondo, l'attività elettrica viene confrontata con l'obiettivo. In 20 sessioni,
      il cervello riceve in media <strong>144.000 opportunità di apprendimento</strong> — un numero
      impossibile da raggiungere in qualsiasi altra condizione di vita quotidiana.</p>

      <h3>Le onde cerebrali: cosa sono e cosa ci dicono</h3>
      <p>Il cervello comunica attraverso impulsi elettrici che oscillano a frequenze diverse, chiamate
      onde cerebrali. Ognuna corrisponde a uno stato mentale specifico:</p>
      <ul>
        <li><strong>Delta (0–4 Hz):</strong> sonno profondo, rigenerazione</li>
        <li><strong>Theta (4–8 Hz):</strong> stati creativi, meditazione, ma anche distrazione e rimuginio</li>
        <li><strong>Alfa (8–13 Hz):</strong> rilassamento vigile, calma, integrazione</li>
        <li><strong>Beta (13–30 Hz):</strong> attenzione, pensiero analitico, ma anche ansia se in eccesso</li>
        <li><strong>Gamma (30–100 Hz):</strong> elaborazione cognitiva avanzata, apprendimento</li>
      </ul>
      <p>Un cervello sano è un cervello flessibile: produce il ritmo giusto per la situazione giusta.
      Quando certi pattern diventano rigidi — troppo beta in situazioni di riposo, troppo theta durante
      compiti attentivi — possono emergere difficoltà come ansia cronica, insonnia, deficit di
      attenzione o stati depressivi.</p>

      <h3>Cosa dice la scienza: le evidenze</h3>
      <p>Il neurofeedback ha alle spalle oltre <strong>60 anni di ricerca clinica</strong>. Ecco cosa
      mostrano i principali studi:</p>

      <h4>ADHD — il livello massimo di evidenza</h4>
      <p>L'applicazione più studiata è il Disturbo da Deficit di Attenzione e Iperattività.
      La meta-analisi di <strong>Arns et al. (2009)</strong>, condotta su 15 studi e oltre 700 pazienti,
      ha concluso che il neurofeedback produce effetti comparabili ai farmaci stimolanti nella riduzione
      di disattenzione e impulsività, con risultati che si mantengono nel tempo. Le linee guida
      internazionali attribuiscono al neurofeedback per l'ADHD il <strong>5° livello di efficacia</strong>
      — il massimo — classificandolo come "efficace e specifico".</p>

      <h4>Ansia e stress</h4>
      <p>Il neurofeedback insegna al cervello a produrre più onde alfa — associate al rilassamento vigile
      — riducendo l'eccesso di beta frontale correlato all'iperattivazione ansiosa. Lo studio di
      <strong>Hammond (2005)</strong> ha mostrato come la pratica regolare riduca i sintomi ansiosi e
      migliori il controllo emotivo in modo duraturo.</p>

      <h4>PTSD</h4>
      <p>Una revisione sistematica e meta-analisi pubblicata su PubMed (2024) ha evidenziato effetti
      significativi del neurofeedback sulla regolazione dell'amigdala e sulla riduzione della
      sintomatologia post-traumatica. Le tecnologie più recenti combinano EEG e fMRI in tempo reale
      per raggiungere strutture cerebrali profonde altrimenti difficilmente accessibili.</p>

      <h4>Depressione</h4>
      <p>La ricerca ha identificato un pattern caratteristico nella depressione: un'asimmetria
      dell'attività alfa nella corteccia prefrontale, con ipoattivazione sinistra. Il neurofeedback
      può intervenire direttamente su questa asimmetria, con meta-analisi che evidenziano riduzioni
      clinicamente rilevanti dei sintomi depressivi.</p>

      <h4>Performance cognitiva e sportiva</h4>
      <p>Il neurofeedback non è utilizzato solo in ambito clinico. Agenzie come la <strong>NASA</strong>
      lo impiegano per migliorare la vigilanza dei piloti. Atleti d'élite lo usano per ottimizzare la
      concentrazione sotto pressione. Professionisti in contesti ad alta intensità cognitiva lo adottano
      per migliorare la gestione dello stress e le capacità decisionali.</p>

      <h3>Come si svolge una sessione</h3>
      <p>Prima di iniziare, viene effettuata una mappatura cerebrale con EEG quantitativo (qEEG) per
      identificare i pattern specifici della persona e definire gli obiettivi del training. Ogni sessione
      dura circa un'ora, di cui 30–40 minuti di training attivo. Il soggetto rimane seduto comodamente,
      con sensori sul capo, mentre osserva lo schermo. Non è richiesto nessun sforzo attivo: è il
      cervello che impara.</p>

      <p>I benefici tipicamente emergono dopo 10–20 sessioni, con cambiamenti che — a differenza dei
      farmaci — tendono a mantenersi nel tempo perché il cervello ha sviluppato nuove modalità di
      funzionamento.</p>

      <h3>Limiti e cosa aspettarsi realisticamente</h3>
      <p>Il neurofeedback non è una soluzione rapida né universale. Richiede costanza e motivazione.
      Non sostituisce la psicoterapia né, quando necessario, il supporto farmacologico — ma può
      integrarsi efficacemente con entrambi. È fondamentale rivolgersi a professionisti qualificati
      che eseguano una valutazione accurata prima di iniziare qualsiasi percorso.</p>
    `,
    sources: [
      'Arns, M. et al. (2009). <em>Efficacy of neurofeedback treatment in ADHD.</em> Clinical EEG and Neuroscience, 40(3), 180–189.',
      'Hammond, D. C. (2005). <em>Neurofeedback treatment of depression and anxiety.</em> Journal of Adult Development, 12(2–3), 131–137.',
      'Meta-analisi PTSD e neurofeedback. PubMed Central, PMC10993781 (2024).',
      'Sterman, M. B. (2000). <em>EEG operant conditioning and seizure disorders.</em> Clinical Electroencephalography, 31(1), 45–55.',
    ],
    keyConcepts: [
      'Delta — 0–4 Hz — sonno profondo',
      'Theta — 4–8 Hz — creatività, rimuginio',
      'Alfa — 8–13 Hz — rilassamento vigile',
      'Beta — 13–30 Hz — attenzione, ansia',
      'Gamma — 30–100 Hz — apprendimento avanzato',
    ],
    cta: {
      title: 'Vuoi sapere se il neurofeedback fa per te?',
      text: 'Ogni percorso parte da una valutazione personalizzata. In un primo colloquio possiamo capire insieme se e come questa tecnica può essere utile nel tuo caso specifico.',
      buttonText: 'Prenota un colloquio gratuito',
      buttonLink: '/consulenza-psicologica',
    },
  },
];

