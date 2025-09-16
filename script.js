//Navbar
const menuItems = [
  { text: "Home", link: "index.html" },
  { text: "Kalkulator", link: "calc.html" },
  { text: "Konverter", link: "konv.html" },
  { text: "BMI", link: "BMI.html" },
  { text: "About", link: "about.html" }
];

const createNavItem = (item) => {
  const link = document.createElement("a");
  link.href = item.link;
  link.textContent = item.text;
  return link;
};

const buildNavbar = (items) => {
  const container = document.getElementById("navbar");
  const nav = document.createElement("nav");
  nav.className = "nav-menu";
  items.forEach(item => {
    nav.appendChild(createNavItem(item));
  });
  container.appendChild(nav);
};

buildNavbar(menuItems);

//Kalkulator
const hitung = (angka1, angka2, opbil) => {
    switch (opbil) {
        case '*':
            return angka1 * angka2;
        case '-':
            return angka1 - angka2;
        case '/':
            return angka1 / angka2;
        case '+':
            return angka1 + angka2;
    }
};

function hasil() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let opbil = document.getElementById('op').value;
    let output = hitung(angka1, angka2, opbil);
    document.getElementById('hasil').innerHTML = `Hasil: ${output}`;
}
const pilihan = (bil1, suhu) => {
    switch (suhu) {
        case 'K':
            return bil1+ 273.15;
        case 'F':
            return (9/5)*bil1+ 32;
        case 'R':
            return (4/5)*bil1;
    }
};

//Konversi Suhu
function konv() {
    let bil1 = parseFloat(document.getElementById('bil1').value);
    let suhu = document.getElementById('suhu').value;
    let konversi = pilihan(bil1, suhu);
    document.getElementById('konver').innerHTML = `Hasil: ${konversi}`;
}

//BMI
function hitungBMI() {
    let berat = parseFloat(document.getElementById('berat').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
    if (!berat || !tinggi || tinggi <= 0) {
        document.getElementById('hasilBMI').innerHTML = "Masukkan angka yang valid!";
        return;
    }

    let bmi = berat / (tinggi * tinggi);
    let kategori = "";
    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi < 24.9) {
        kategori = "Normal";
    } else if (bmi < 29.9) {
        kategori = "Gemuk";
    } else {
        kategori = "Obesitas";
    }
    document.getElementById('hasilBMI').innerHTML = 
        `BMI: ${bmi.toFixed(2)} (${kategori})`;
}
