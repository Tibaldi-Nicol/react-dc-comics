esercizio oggi usa:

Installazione di Node.js

Assicurati di avere installato Node.js.

Controlla la versione con node -v e npm -v per verificare che tutto funzioni.

Creazione del progetto con Vite

Apri il terminale e esegui:

npm create vite@latest nome-progetto
Seleziona React come framework e scegli JavaScript o TypeScript come variante.

Entrare nella cartella del progetto e installare le dipendenze

cd nome-progetto
npm install
Avvio del server di sviluppo

npm run dev
Questo comando avvia il server di sviluppo locale, generalmente su http://localhost:5173.

Logica di funzionamento
Vite usa ES Modules per una gestione più veloce del codice durante lo sviluppo.

Offre Hot Module Replacement (HMR) per aggiornamenti istantanei senza dover ricaricare l’intera pagina.

Ha una gestione ottimizzata degli asset e della configurazione.

Significato dei file generati da Vite
package.json → Definisce le dipendenze del progetto e gli script disponibili.

vite.config.js → Configurazione di Vite per personalizzazioni avanzate.

index.html → File principale che include il codice React.

src/main.jsx → Punto di ingresso dell'app React.

src/App.jsx → Componente principale dell’app.

src/assets → Contiene risorse statiche come immagini.

public/ → File statici accessibili direttamente.

Cosa devi creare per un progetto React
Componenti (.jsx o .tsx) nella cartella src/components/ per suddividere l’interfaccia utente.

Eventuali file CSS (.css o .scss) per lo stile.

Logica interna (stato, fetch API, gestione eventi).

Configurazioni extra come routing (react-router-dom) se necessario.


esercizio di oggi traccia

@qui Ciao ragazzi, Esercizio di oggi: DC Comics (React Components)
nome repo: react-dc-comics
Descrizione: Create un nuovo progetto React e definite i componenti necessari per strutturare il layout come da screenshot allegato. Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!
Note: - Il font utilizzato è Open Sans
Bonus: - Creare un componente aggiuntivo per gestire la fascia azzurra con le icone.
Numero minimo di push: 10



