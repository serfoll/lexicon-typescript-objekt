# Workshop: Objekt, Globala verktyg och JSON

Här ska vi öva på att strukturera data i objekt, använda inbyggda verktyg i webbläsaren och lära oss hur vi konverterar data mellan text och kod.

---

## Steg 1: Skapa ditt eget Objekt
Här ska du beskriva något från verkligheten. Det kan vara en artist, en bil, ett recept eller din favorit-app, du väljer.

1. Skriv kommentaren: `// Steg 1: Objekt` i din fil.
2. Deklarera ett objekt med `const`.
   * **Egenskaper:** Ge objektet minst ett namn (`string`), ett antal (`number`) och en status (`boolean`) (gärna fler).
   * **Metod:** Lägg till en funktion i objektet (t.ex. `present()`) som loggar en beskrivning av objektet med `this`. (present() är bara exempel, hitta gärna på något eget)
3. **Testa med console.log:** * Anropa din metod: `objekt.metod()`.
   * Hämta ett värde med **punktnotation** (t.ex. `objekt.namn`).
   * Hämta ett värde med **hakparentesnotation** (t.ex. `objekt["namn"]`).

## Steg 2: Math & Date (Verktygslådan)
Nu använder vi webbläsarens inbyggda superkrafter för slump och tid.

1. Skriv kommentaren: `// Steg 2: Math & Date`.
2. **Math:** Skapa en variabel som innehåller ett slumpmässigt heltal mellan 1 och 100. (Tips: Använd `Math.random()` och `Math.floor()`).
3. **Date:** Skapa en instans av dagens datum med `new Date()`.
4. **Logga:** Skriv ut ett meddelande i konsolen som innehåller både ditt slumpade tal och vilket år det är just nu (använd `.getFullYear()`).

## Steg 3: Typkonvertering & Assertion
När data kommer utifrån (som från ett formulär eller JSON) landar det ofta som text.

1. Skriv kommentaren: `// Steg 4: Typkonvertering`.
2. **parseInt:** Skapa en variabel med ett värde som innehåller både siffror och text (t.ex. `"450px"` eller `"10%"`). Använd `parseInt()` för att plocka ut bara siffran.
3. **Number:** Konvertera en ren siffersträng (t.ex. `"500"`) till ett nummer med `Number()`.
4. **Assertion:** Skapa en `any`-variabel som innehåller en text. Använd `as string` för att tala om för TypeScript att det är en sträng så att du kan använda `.length`.

## Steg 4: Slutuppgift – "Kvitto-maskinen"
Här knyter vi ihop allt i ett scenario. Välj ett tema (t.ex. Webshop, Restaurang eller Streaming-tjänst).

1. Skriv kommentaren: `// Steg 4: Slutuppgift`.
2. **Mottagen Data:** Skapa ett objekt som heter inputData eller annat (valfritt). 
Det här objektet simulerar information vi fått från ett formulär t.ex. Objektet ska innehålla minst 3 egenskaper:
   * Namn på en produkt eller tjänst.
   * Ett pris (skrivet som en sträng, t.ex. `"1499"`).
   * En skatt eller rabatt (t.ex. `"25%"`).
3. **Logiken:**
   * Konvertera priset till ett `number`.
   * Använd `parseInt()` för att få ut siffran från skatten/rabatten.
4. **Beräkningen:** Räkna ut det slutgiltiga priset (Pris * (1 + skatt/100)).
5. **Testa Implicit Konvertering:** Prova att logga `prisSträngen + 100` i konsolen. Vad händer? Varför blev det inte rätt summa?
6. **Presentation:** Logga ett snyggt kvitto i konsolen som visar produkten och det korrekta slutpriset att betala.

---

### Inspiration till Steg 4 (om du har idétorka):
* **E-handel:** `'{"item": "Sneakers", "price": "1200", "discount": "20%"}'`
* **Restaurang:** `'{"item": "Margherita", "price": "145", "tip": "10%"}'`
* **Streaming:** `'{"item": "Månadsabonnemang", "price": "149", "vat": "6%"}'`
