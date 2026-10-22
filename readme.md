# Portfolio Gabriele Bonomo

## File
Tutti i file stanno nella stessa cartella, senza sottocartelle:
- `index.html`: struttura e testi in inglese (lingua di default)
- `styles.css`: colori del CV, tema chiaro e scuro, animazioni
- `script.js`: traduzioni italiane, cambio lingua e tema, statistiche animate, copia email
- `gabriele-bonomo.jpg`: foto

## Pubblicazione su GitHub Pages
1. Crea un repository pubblico chiamato `TUONOMEUTENTE.github.io`.
2. Nel repository: Add file > Upload files, e trascina i 4 file del sito (questo LEGGIMI è facoltativo).
3. Settings > Pages: come sorgente scegli il branch `main`, cartella `/ (root)`, e salva.
4. Dopo qualche minuto il sito è su `https://TUONOMEUTENTE.github.io`.

`index.html` deve stare nella radice del repository, non dentro una cartella.

## Modificare i testi
- Inglese: direttamente in `index.html`.
- Italiano: nell'oggetto `IT` all'inizio di `script.js`, stessa chiave dell'attributo `data-i18n`.
- Link diretto alla versione italiana: `index.html?lang=it`.

## Sostituire la foto
Carica la nuova foto con lo stesso nome `gabriele-bonomo.jpg`, oppure cambia `src` nel tag `<img>` di `index.html`.

## Font
Montserrat, Open Sans e il kanji 気 (Noto Serif JP) vengono caricati da Google Fonts.
