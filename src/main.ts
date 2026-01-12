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
