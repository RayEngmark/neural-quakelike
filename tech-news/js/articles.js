/**
 * TechPuls - Articles Database
 *
 * This file contains all articles for the website.
 * AI can easily add new articles by following the schema below.
 *
 * ARTICLE SCHEMA:
 * {
 *   id: string,              // Unique identifier (slug format, e.g., "apple-iphone-16-launch")
 *   title: string,           // Article headline
 *   excerpt: string,         // Short summary (1-2 sentences, shown in cards)
 *   category: string,        // One of: mobil, pc, gaming, software, ai, vitenskap, sikkerhet, elbil
 *   author: string,          // Author name
 *   date: string,            // ISO date format (YYYY-MM-DD)
 *   image: string,           // Image URL or path (use placeholder for now)
 *   imageAlt: string,        // Image alt text for accessibility
 *   featured: boolean,       // If true, can appear in hero section
 *   popular: boolean,        // If true, appears in sidebar "Popular" list
 *   content: string          // Full article body in HTML format
 * }
 *
 * CONTENT FORMATTING:
 * The content field supports HTML. Use these tags:
 * - <p>...</p> for paragraphs
 * - <h2>...</h2> for section headings
 * - <h3>...</h3> for sub-headings
 * - <ul><li>...</li></ul> for bullet lists
 * - <ol><li>...</li></ol> for numbered lists
 * - <blockquote>...</blockquote> for quotes
 * - <strong>...</strong> for bold text
 * - <em>...</em> for italic text
 * - <a href="...">...</a> for links
 *
 * TO ADD A NEW ARTICLE:
 * 1. Create a new object following the schema above
 * 2. Add it to the ARTICLES array at the TOP (newest first)
 * 3. Set featured: true if it should be the main hero article
 * 4. Set popular: true if it should appear in the sidebar
 */

const ARTICLES = [
    {
        id: "apple-vision-pro-2-rumors",
        title: "Apple Vision Pro 2 kan få revolusjonerende eye-tracking og lavere pris",
        excerpt: "Nye rykter tyder på at neste generasjon av Apples mixed reality-headset vil ha betydelige forbedringer og en mer tilgjengelig prislapp.",
        category: "mobil",
        author: "TechPuls AI",
        date: "2024-02-04",
        image: "",
        imageAlt: "Apple Vision Pro headset",
        featured: true,
        popular: true,
        content: `
            <p>Apple jobber angivelig med neste generasjon av Vision Pro, og de første ryktene lover store forbedringer på flere fronter. Ifølge kilder kjent med saken vil Vision Pro 2 ha en betydelig oppgradert eye-tracking-teknologi som kan revolusjonere måten vi interagerer med digitalt innhold.</p>

            <h2>Forbedret eye-tracking</h2>
            <p>Den nye eye-tracking-teknologien skal være så presis at den kan registrere selv de minste øyebevegelsene. Dette åpner for nye muligheter innen:</p>
            <ul>
                <li>Mer naturlig navigering i brukergrensesnittet</li>
                <li>Bedre tilgjengelighet for brukere med nedsatt motorikk</li>
                <li>Avanserte helseovervåkningsfunksjoner</li>
                <li>Mer immersive spillopplevelser</li>
            </ul>

            <h2>Lavere pris</h2>
            <p>En av de største barrierene for Vision Pro har vært prisen på nesten 40.000 kroner. Apple skal nå jobbe aktivt med å få ned kostnadene, blant annet ved å:</p>
            <ul>
                <li>Produsere egne microLED-skjermer</li>
                <li>Optimalisere produksjonsprosessen</li>
                <li>Bruke mer kostnadseffektive materialer der det er mulig</li>
            </ul>

            <blockquote>Vi tror Apple kan kutte prisen med opptil 30% på neste generasjon, noe som vil gjøre produktet tilgjengelig for langt flere forbrukere.</blockquote>

            <h2>Forventet lansering</h2>
            <p>Apple pleier å holde kortene tett til brystet, men analytikere forventer at Vision Pro 2 vil bli annonsert på WWDC 2025, med lansering mot slutten av året. Til da vil vi sannsynligvis se flere oppdateringer til visionOS som legger grunnlaget for de nye funksjonene.</p>

            <p>Vi følger utviklingen og oppdaterer denne artikkelen når nye detaljer blir kjent.</p>
        `
    },
    {
        id: "nvidia-rtx-5090-benchmark",
        title: "NVIDIA RTX 5090 knuser alle rekorder i første benchmark-lekkasjer",
        excerpt: "De første ytelsestallene for NVIDIAs neste flaggskip-grafikkort viser en massiv forbedring over forrige generasjon.",
        category: "pc",
        author: "TechPuls AI",
        date: "2024-02-03",
        image: "",
        imageAlt: "NVIDIA grafikkort",
        featured: false,
        popular: true,
        content: `
            <p>Lekkede benchmark-resultater for NVIDIA GeForce RTX 5090 har begynt å dukke opp på nettet, og tallene er imponerende. Det kommende flaggskip-grafikkortet ser ut til å levere en betydelig ytelsesøkning sammenlignet med RTX 4090.</p>

            <h2>Benchmark-resultater</h2>
            <p>Ifølge de lekkede resultatene presterer RTX 5090 mellom 50-70% bedre enn RTX 4090 i de fleste moderne spill. I enkelte titler som utnytter de nye arkitekturforbedringene fullt ut, kan forskjellen være enda større.</p>

            <h3>3DMark Time Spy</h3>
            <p>I 3DMark Time Spy skal kortet ha oppnådd en score på over 45.000 poeng, noe som er en ny rekord for forbruker-grafikkort. Til sammenligning scorer RTX 4090 typisk rundt 30.000-32.000 poeng.</p>

            <h2>Nye teknologier</h2>
            <p>RTX 5090 kommer med NVIDIAs nye Blackwell-arkitektur som bringer flere forbedringer:</p>
            <ul>
                <li>Nye RT-kjerner med opptil 2x ray tracing-ytelse</li>
                <li>Forbedrede Tensor-kjerner for AI-akselerasjon</li>
                <li>Støtte for DLSS 4 med enda bedre bildekvalitet</li>
                <li>Ny minneteknologi med høyere båndbredde</li>
            </ul>

            <h2>Forventet pris og tilgjengelighet</h2>
            <p>NVIDIA forventes å annonsere RTX 5090 på CES 2025 i januar. Prisen er ventet å ligge rundt samme nivå som RTX 4090 ved lansering, altså rundt 20.000-22.000 kroner i Norge.</p>
        `
    },
    {
        id: "chatgpt-5-multimodal",
        title: "ChatGPT-5 kommer med full multimodal støtte og sanntids-resonering",
        excerpt: "OpenAI forbereder lanseringen av sin mest avanserte AI-modell noensinne, med evnen til å se, høre og tenke samtidig.",
        category: "ai",
        author: "TechPuls AI",
        date: "2024-02-02",
        image: "",
        imageAlt: "AI-illustrasjon",
        featured: false,
        popular: true,
        content: `
            <p>OpenAI er i sluttfasen av utviklingen av GPT-5, som skal bli selskapets mest kapable AI-modell til dags dato. Den nye modellen vil ha full multimodal støtte, noe som betyr at den kan prosessere og generere tekst, bilder, lyd og video i én og samme samtale.</p>

            <h2>Sanntids-resonering</h2>
            <p>En av de mest spennende nye funksjonene er såkalt "sanntids-resonering". Dette lar AI-en tenke gjennom komplekse problemer steg for steg mens den kommuniserer med brukeren, i stedet for å gi et ferdig svar umiddelbart.</p>

            <blockquote>GPT-5 representerer et paradigmeskifte i hvordan AI kan assistere mennesker med komplekse oppgaver - fra vitenskapelig forskning til kreativt arbeid.</blockquote>

            <h2>Forbedret hukommelse</h2>
            <p>Modellen skal også ha betydelig forbedret langtidshukommelse, som gjør at den kan:</p>
            <ul>
                <li>Huske kontekst fra tidligere samtaler over lengre tid</li>
                <li>Bygge opp en forståelse av brukerens preferanser</li>
                <li>Referere til tidligere diskuterte temaer</li>
            </ul>

            <h2>Sikkerhet og etikk</h2>
            <p>OpenAI har brukt ekstra tid på sikkerhetstesting av GPT-5. Selskapet samarbeider med eksterne forskere og myndigheter for å sikre at modellen ikke kan misbrukes til skadelige formål.</p>

            <p>Lanseringen er forventet i løpet av første halvår 2025, først for betalende ChatGPT Plus-abonnenter.</p>
        `
    },
    {
        id: "samsung-galaxy-s25-ultra",
        title: "Samsung Galaxy S25 Ultra får titaniumramme og 200MP kamera",
        excerpt: "Samsungs neste toppmodell tar sikte på å utkonkurrere iPhone med premium materialer og banebrytende kamerateknologi.",
        category: "mobil",
        author: "TechPuls AI",
        date: "2024-02-01",
        image: "",
        imageAlt: "Samsung Galaxy smartphone",
        featured: false,
        popular: false,
        content: `
            <p>Samsung forbereder lanseringen av Galaxy S25 Ultra, og lekkasjene tyder på at dette blir selskapets mest ambisiøse smarttelefon noensinne. Med en titaniumramme og et forbedret 200MP kamerasystem, sikter Samsung høyt.</p>

            <h2>Titaniumkonstruksjon</h2>
            <p>Etter at Apple introduserte titanium i iPhone 15 Pro, følger Samsung etter med S25 Ultra. Titanium gir flere fordeler:</p>
            <ul>
                <li>Lettere enn rustfritt stål</li>
                <li>Mer motstandsdyktig mot riper</li>
                <li>Premium følelse og utseende</li>
                <li>Bedre varmeledning</li>
            </ul>

            <h2>Kameraoppgraderinger</h2>
            <p>Hovedkameraet forblir på 200MP, men med en ny sensor som lover bedre ytelse i svakt lys. Den optiske zoomen oppgraderes til 5x på periskopkameraet, og en ny 3x telezoom erstatter 3x-objektivet.</p>

            <h2>Snapdragon 8 Gen 4</h2>
            <p>Under panseret finner vi Qualcomms nyeste topprosessor, Snapdragon 8 Gen 4. Denne skal levere opptil 30% bedre ytelse og 20% bedre energieffektivitet enn forgjengeren.</p>

            <p>Galaxy S25 Ultra forventes å bli lansert på Galaxy Unpacked i januar 2025, med en pris på rundt 17.000 kroner for grunnmodellen.</p>
        `
    },
    {
        id: "tesla-fsd-norge-godkjenning",
        title: "Tesla Full Self-Driving kan endelig bli godkjent for norske veier",
        excerpt: "Statens vegvesen vurderer nå om Teslas avanserte førerassistanse-system kan tillates på norske veier.",
        category: "elbil",
        author: "TechPuls AI",
        date: "2024-01-31",
        image: "",
        imageAlt: "Tesla bil på norsk vei",
        featured: false,
        popular: true,
        content: `
            <p>Tesla-eiere i Norge har lenge ventet på muligheten til å bruke Full Self-Driving (FSD) på norske veier. Nå kan ventetiden snart være over, etter at Statens vegvesen har startet en formell vurderingsprosess.</p>

            <h2>Hva er FSD?</h2>
            <p>Full Self-Driving er Teslas mest avanserte førerassistanse-system. Det inkluderer funksjoner som:</p>
            <ul>
                <li>Autopilot på motorvei med automatisk filskifte</li>
                <li>Navigering på autopilot mellom avkjøringer</li>
                <li>Automatisk parkering</li>
                <li>Summon - bilen kan kjøre til deg på parkeringsplassen</li>
                <li>Bytrafikk-navigering (beta)</li>
            </ul>

            <h2>Europeiske reguleringer</h2>
            <p>En av hovedutfordringene har vært at europeiske reguleringer er strengere enn amerikanske når det gjelder førerløse systemer. Tesla har måttet tilpasse programvaren for å møte kravene i EU/EØS.</p>

            <blockquote>Vi er i konstruktiv dialog med myndighetene i flere europeiske land, inkludert Norge, om godkjenning av FSD - Tesla</blockquote>

            <h2>Pris og tilgjengelighet</h2>
            <p>I USA koster FSD rundt 12.000 dollar, tilsvarende omtrent 130.000 kroner. Det er uklart om prisen vil være den samme i Norge, eller om Tesla vil tilby et abonnementsalternativ.</p>

            <p>En avgjørelse fra Statens vegvesen forventes innen sommeren 2025.</p>
        `
    },
    {
        id: "microsoft-windows-12-ai",
        title: "Windows 12 blir et fullstendig AI-drevet operativsystem",
        excerpt: "Microsoft satser alt på kunstig intelligens i neste versjon av Windows, med en integrert Copilot som kan styre hele systemet.",
        category: "software",
        author: "TechPuls AI",
        date: "2024-01-30",
        image: "",
        imageAlt: "Windows operativsystem",
        featured: false,
        popular: false,
        content: `
            <p>Microsoft forbereder det som kan bli den største oppgraderingen av Windows på mange år. Windows 12, som er ventet i 2025, vil ha kunstig intelligens integrert i kjernen av operativsystemet.</p>

            <h2>Copilot overalt</h2>
            <p>Microsofts AI-assistent Copilot vil ikke lenger bare være en app du kan åpne - den blir en integrert del av hele Windows-opplevelsen. Du vil kunne:</p>
            <ul>
                <li>Styre datamaskinen med naturlig språk</li>
                <li>Få AI-hjelp i alle apper</li>
                <li>Automatisere repetitive oppgaver</li>
                <li>Få personaliserte anbefalinger basert på bruksmønster</li>
            </ul>

            <h2>Nye maskinvarekrav</h2>
            <p>For å kjøre Windows 12 med alle AI-funksjoner, vil det kreves en NPU (Neural Processing Unit) i prosessoren. Intel, AMD og Qualcomm har alle annonsert brikker med dedikerte AI-akseleratorer.</p>

            <h2>Redesignet brukergrensesnitt</h2>
            <p>Windows 12 får også et betydelig ansiktsløft med et mer moderne og minimalistisk design. Startmenyen, oppgavelinjen og systeminnstillinger blir alle fornyet med et mer konsistent utseende.</p>

            <p>Microsoft forventes å annonsere Windows 12 på Build-konferansen i mai 2025.</p>
        `
    },
    {
        id: "quantum-computer-breakthrough",
        title: "Norske forskere oppnår gjennombrudd innen kvantedatabehandling",
        excerpt: "Et team ved NTNU har utviklet en ny metode for å stabilisere qubits ved romtemperatur, noe som kan akselerere utviklingen av praktiske kvantedatamaskiner.",
        category: "vitenskap",
        author: "TechPuls AI",
        date: "2024-01-29",
        image: "",
        imageAlt: "Kvantedatamaskin illustrasjon",
        featured: false,
        popular: false,
        content: `
            <p>Forskere ved NTNU i Trondheim har oppnådd det som beskrives som et betydelig gjennombrudd innen kvanteteknologi. Teamet har utviklet en ny metode for å holde qubits - kvantebitene som er byggesteinene i kvantedatamaskiner - stabile ved romtemperatur.</p>

            <h2>Hvorfor er dette viktig?</h2>
            <p>Dagens kvantedatamaskiner krever ekstrem kjøling, ofte ned til nær absolutt nullpunkt (-273°C). Dette gjør dem:</p>
            <ul>
                <li>Ekstremt kostbare å drifte</li>
                <li>Vanskelige å skalere opp</li>
                <li>Umulige å gjøre portable</li>
            </ul>

            <p>Ved å eliminere behovet for ekstrem kjøling, kan kvantedatamaskiner bli mye mer praktiske og tilgjengelige.</p>

            <h2>Den nye metoden</h2>
            <p>Forskerne har brukt en spesiell type diamantstruktur med nitrogen-vakans-sentre (NV-sentre) som qubits. Ved å manipulere disse med presise laserpulser, har de klart å opprettholde kvantetilstanden lenge nok til å utføre beregninger.</p>

            <blockquote>Dette er et viktig steg mot praktiske kvantedatamaskiner som kan plasseres i vanlige datasentre - Professor Ola Nordmann, NTNU</blockquote>

            <h2>Veien videre</h2>
            <p>Selv om gjennombruddet er lovende, er det fortsatt mye arbeid som gjenstår. Forskerne må nå jobbe med å skalere opp systemet og forbedre presisjonen i beregningene.</p>

            <p>Forskningen er publisert i tidsskriftet Nature Physics.</p>
        `
    },
    {
        id: "spotify-hifi-lansering",
        title: "Spotify HiFi lanseres endelig - slik fungerer det",
        excerpt: "Etter flere års forsinkelser kommer Spotify endelig med støtte for tapsfri lyd. Vi forklarer hva det betyr for deg.",
        category: "software",
        author: "TechPuls AI",
        date: "2024-01-28",
        image: "",
        imageAlt: "Spotify app på telefon",
        featured: false,
        popular: false,
        content: `
            <p>Spotify har endelig annonsert at HiFi-streaming kommer til plattformen. Etter å ha blitt lovet helt siden 2021, får abonnenter snart tilgang til CD-kvalitet lyd.</p>

            <h2>Hva er Spotify HiFi?</h2>
            <p>Spotify HiFi leverer musikk i tapsfritt format, noe som betyr at lyden ikke er komprimert på samme måte som standard streaming. Konkret betyr dette:</p>
            <ul>
                <li>CD-kvalitet: 16-bit/44.1kHz FLAC</li>
                <li>Bitrate på ca. 1411 kbps vs. 320 kbps for Premium</li>
                <li>Ingen hørbar forskjell fra originalmastringen</li>
            </ul>

            <h2>Hvem vil merke forskjellen?</h2>
            <p>For å høre forskjellen mellom vanlig Premium og HiFi trenger du:</p>
            <ul>
                <li>Kvalitetshodetelefoner eller høyttalere</li>
                <li>Et rolig lyttemiljø</li>
                <li>Musikksjangre som drar nytte av høy dynamikk</li>
            </ul>

            <p>For casual lytting på bluetooth-ørepropper i bussen, vil de fleste ikke merke noen forskjell.</p>

            <h2>Pris og tilgjengelighet</h2>
            <p>Spotify HiFi vil koste 30 kroner ekstra per måned utover vanlig Premium-abonnement. Funksjonen rulles ut gradvis fra mars 2025, med Norge blant de første landene.</p>
        `
    }
];

/**
 * Get all articles
 * @returns {Array} All articles sorted by date (newest first)
 */
function getAllArticles() {
    return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get article by ID
 * @param {string} id - Article ID
 * @returns {Object|null} Article object or null if not found
 */
function getArticleById(id) {
    return ARTICLES.find(article => article.id === id) || null;
}

/**
 * Get featured article (first one marked as featured)
 * @returns {Object|null} Featured article or null
 */
function getFeaturedArticle() {
    return ARTICLES.find(article => article.featured) || ARTICLES[0] || null;
}

/**
 * Get popular articles
 * @param {number} limit - Maximum number of articles to return
 * @returns {Array} Popular articles
 */
function getPopularArticles(limit = 5) {
    return ARTICLES.filter(article => article.popular).slice(0, limit);
}

/**
 * Get articles by category
 * @param {string} category - Category name
 * @returns {Array} Articles in the specified category
 */
function getArticlesByCategory(category) {
    if (category === 'alle') return getAllArticles();
    return ARTICLES.filter(article => article.category === category);
}

/**
 * Get related articles (same category, excluding current)
 * @param {string} currentId - Current article ID to exclude
 * @param {string} category - Category to match
 * @param {number} limit - Maximum number of articles
 * @returns {Array} Related articles
 */
function getRelatedArticles(currentId, category, limit = 3) {
    return ARTICLES
        .filter(article => article.id !== currentId && article.category === category)
        .slice(0, limit);
}

/**
 * Format date to Norwegian format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('nb-NO', options);
}

/**
 * Format relative time (e.g., "2 timer siden")
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time string
 */
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return 'Akkurat nå';
    if (diffHours < 24) return `${diffHours} time${diffHours > 1 ? 'r' : ''} siden`;
    if (diffDays < 7) return `${diffDays} dag${diffDays > 1 ? 'er' : ''} siden`;
    return formatDate(dateString);
}
