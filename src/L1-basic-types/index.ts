// any
let person: any = { name: 'Gian' };
// person();

// unknown
let nilaiUjian: unknown;
nilaiUjian = 100;

console.log(typeof nilaiUjian);

let nilaiAkhir;
if (typeof nilaiUjian === 'number') {
  let nilaiAkhir = nilaiUjian + 100;
  console.log('nilai akhir : ', nilaiAkhir);
}

// boolean
// let benarAtauSalah = (boolean = true);
let benar: true = true;
let salah = false;

// benar = false;

// number & bigint
let harga1: number = 10_000;
let harga2: number = 20_000;

// let angkaKecil: number = 100n;
// let angkaBesar: bigint = 100n;

// string
const userName: string = 'Gian';
console.log(userName.charAt(0));
console.log(userName.toUpperCase());

// symbol
let a = Symbol('a');
let b: symbol = Symbol('a');
console.log(a === b);

