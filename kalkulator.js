const prompt=require("prompt-sync")();
const hasil = (angka1, angka2, opbil) => {
    switch (opbil) {
        case '*':
            return angka1 * angka2;
        case '-':
            return angka1 - angka2;
        case '/':
            return angka1 / angka2;
        case '+':
            return angka1 + angka2;
        default:
            return null;
    }
};
let angka1=parseInt(prompt("Masukan Angka Pertama = "));
let angka2=parseInt(prompt("Masukan Angka Kedua = "));
let opbil;
let output;

do {
    opbil = prompt("Mau diapakan? ( * , - , + , / ) = ");
    output = hasil(angka1, angka2, opbil);

    if (output === null) {
        console.log("Operator ngaco! Coba lagi.\n");
    }
} while (output === null);

console.log(`Hasil kalkulasinya adalah = ${hasil(angka1,angka2,opbil)}`);
