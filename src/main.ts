// Steg 1: Object
const fiende: {
  namn: string;
  skada: number;
  hp: number;
  ras: string;
  present: () => void;
  anfall: () => void;
} = {
  namn: "Great Wolf",
  skada: 20,
  hp: 50,
  ras: "wolf",
  present() {
    console.log(
      `Namn: ${this.namn}, Ras: ${this.ras}, HP: ${this.hp}, Skada: ${this.skada}`,
    );
  },
  anfall() {
    console.log(`${this.namn} har gjort ${this.skada} i skada!`);
  },
};

fiende.present();
const fiendeNamn: string = fiende["namn"];
const fiendeSkada: number = fiende.skada;
console.log(`Namn: ${fiendeNamn}, skada: ${fiendeSkada}`);

fiende.anfall();

// Steg 2: Math & Date
const randNum: number = Math.floor(Math.random() * 100) + 1; // generera ett värde mellan 1 och 100
const nu: Date = new Date();
console.log(`slump tal: ${randNum}, nuvarande år: ${nu.getFullYear()}`);

// Steg 3: Typkonvertering & Assertion
const parsedNum: number = parseInt("10rem");
const convertedNum: number = Number("1337");
const asserted: any = "Elite";
const assertedLen: number = (asserted as string).length;

console.log(
  `parsedInt(): ${parsedNum}, Number(): ${convertedNum}, "as string" length: ${assertedLen}`,
);

// Steg 4: Slutuppgift
const inputData = {
  item: "Concert ticket",
  price: "350",
  vat: "25%",
};

const item: string = inputData.item;
const price: number = Number(inputData.price);
const vat: number = parseInt(inputData.vat);
const cost: number = price * (1 + vat / 100);
console.log(inputData.price + 100); // + blir omvandlare och slår ihop  värden till ett tal, vill man beräkna omvandla o beräkna samtidigt kan man sätta ett + förre strägene
console.log(+inputData.price + 100);
const cart: string = `Produkt: ${item} \nPris: ${price} \nMOMS:  ${vat}% \n___________________________ \nAtt betala: ${cost}kr`;
console.log(cart);
