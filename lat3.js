const prompt=require("prompt-sync")();
const luasling = (jari)=>{
    return 3.14*jari*jari;
};
let jari=parseInt(prompt("Masukan Nilai jari-jari = "));
console.log(`Luas Lingkaran adalah = ${luasling(jari)}`);