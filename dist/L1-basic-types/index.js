"use strict";
// any
let person = { name: 'Gian' };
// person();
// unknown
let nilaiUjian;
nilaiUjian = 100;
console.log(typeof nilaiUjian);
let nilaiAkhir;
if (typeof nilaiUjian === 'number') {
    let nilaiAkhir = nilaiUjian + 100;
    console.log('nilai akhir : ', nilaiAkhir);
}
// boolean
// let benarAtauSalah = (boolean = true);
let benar = true;
let salah = false;
// benar = false;
// number & bigint
let harga1 = 10000;
let harga2 = 20000;
// let angkaKecil: number = 100n;
// let angkaBesar: bigint = 100n;
// string
const userName = 'Gian';
console.log(userName.charAt(0));
console.log(userName.toUpperCase());
// symbol
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b);
