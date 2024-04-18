const menu_makanan = ["Nasi Pecel" , 
                    "KFC" , 
                    "Nasi Rawon" ,];
// const makanan1 = 10000;
// const makanan2 = 25000;
// const makanan3 = 15000;
const ph = [10000, 25000 , 15000];
// let diskon = 0.1 * total ;
// let totalpembayaran = total - diskon;


function pra1(menu_makanan) { 
    mema = "";
    for (let i = 0; i < menu_makanan.length; i++) {
        mema += `<li>${menu_makanan[i]}</li> <br>`;
    }
    return mema;
}
let aa = pra1(menu_makanan)

function dsk (diskon9 , total){
    // let diskon9 = 0.1;
    let diso = diskon9 * total
    let ksd = total - diso;
    return diso;
}


function ttl(ph){
    let total = 0;
    for (let i = 0; i < ph.length; i++){
        total += ph[i]; 
    }
    
    return total;
}
let atl = ttl(ph);
let diskon10 = dsk(0.1 , atl);

document.getElementById('demo').innerHTML = aa;
document.getElementById('demo1').innerHTML = "B. Total Pembayaran = " + atl ;
document.getElementById('demo2').innerHTML = "C. Diskon 10% menjadi = " + (atl - diskon10);   


let makanan_menu = [" Es Kopi Susu : Rp. 10000", 
                    " Roti Bakar : Rp. 25000",
                    " Tahu Telor : Rp. 15000",
                    " Nasi Goreng : Rp. 12000"];
const harga1 = 10000;
const harga2 = 25000;
const harga3 = 15000;
const harga4 = 12000;
const harga5 = 20000;
makanan_menu[4] = "Nasi Krawu : Rp. 20000";   
makanan_menu[2] = "Ice Cream : Rp 25000";
let hargaawal = harga1 + harga2 + harga3 + harga4 + harga5;
let disc = 0.1 * hargaawal ;
let hargaakhir = hargaawal - disc;
let Menu = "";

function pra2 (makanan_menu){
    for (let i = 0; i < makanan_menu.length; i++) {
    Menu +=`<li>${makanan_menu[i]}</li><br>`;
    }
}
pra2(makanan_menu);
document.getElementById('tes').innerHTML = Menu;
document.getElementById('tes1').innerHTML = "B. Total Pembayaran = " + hargaawal;
document.getElementById('tes2').innerHTML = "C. Diskon 10% menjadi =" + hargaakhir;

//  TUGAS 2 

let lm = [
    { Menu: 'Es Kopi Susu', harga: 10000 },
    { Menu: 'Roti Bakar', harga: 25000    },
    { Menu: 'Ice Cream', harga: 15000     },
    { Menu: 'Nasi Goreng', harga: 12000   }
]

let priceA = lm[0].harga + lm[1].harga + lm[2].harga + lm[3].harga;
let kondis = 0.1 * priceA;
let priceB = priceA - kondis;
let list = "";
function tgs2 (lm){
    for (let i = 0; i < lm.length; i++) {
        // list +=`<li>${(/*"Menu :" +*/ lm[i]['Menu'] /*+ " : " + lm[i]['harga']*/)}</li><br>`
        list += `<li>${lm[i].Menu} : Rp. ${lm[i].harga} </li>`
    }
}
tgs2(lm);
document.getElementById('ob').innerHTML = list;
document.getElementById('ob1').innerHTML = "B. Total Pembayaran =  Rp." + priceA;
document.getElementById('ob2').innerHTML = "C. Diskon 10% menjadi = Rp." + priceB;

// TUGAS 3 Penambahan IF 
let jsm = [
    { unem: 'Nasi Pecel' , garha: 10000 , variant: ['Original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Jagung' , garha: 25000, variant: ['Original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Ayam' , garha: 15000, variant: ['Original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Krawu' , garha: 12000, variant: ['Original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Rendang', garha: 20000, variant: ['Original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Lele' , garha: 18000, variant: ['Original' , 'pedas' , 'pedas banget']}
]

const pesan = ["Nasi Pecel" , "Nasi Jagung" , "Nasi Rendang"];
const isMember = true
let totalPayment = 0;
const level = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
let userm = "";
let ao = "";

function tgs3(jsm , pesan) { 

    for (let i = 0; i < jsm.length; i++) {
        userm += `<li>${jsm[i].unem} : Rp. ${jsm[i].garha} <br> variant: ${jsm[i].variant.join(" , ")}</li>`
    }

    for (let x = 0; x < pesan.length; x++){
        for(let y = 0; y < jsm.length; y++){
            if(pesan[x] === jsm[y].unem) {
                if(pesan[x] === "Nasi Pecel"){
                    totalPayment += 5000;
                    
                } else {
                    totalPayment += jsm[y].garha;
                }
            }
        }
    }
    for (let z = 0; z <pesan.length; z++){
        for(let p = 0; p < jsm.length; p++){
            if(pesan[z] === jsm[p].unem) {
                if(pesan[z] === "Nasi Pecel"){
                    jsm[p].variant = "Pedas Banget";
                    lvl = level[4]
                    ao += `<li>${pesan[z]} : Rp. 5000 Variant ${jsm[p].variant} Level: ${lvl}</li>`;

                } else if(pesan[z] === "Nasi Rendang") {
                    jsm[p].variant = "Pedas";
                    lvl = level[1]
                    ao += `<li>${pesan[z]} : Rp. ${jsm[p].garha} Variant ${jsm[p].variant} Level: ${lvl}</li>`;
                    
                } else if (pesan[z] === "Nasi Jagung") {
                    jsm[p].variant = "Original"
                    ao += `<li>${pesan[z]} : Rp. ${jsm[p].garha} Variant ${jsm[p].variant} </li>`;
                    
                } else {
                    ao += `<li>${pesan[z]} : Rp. ${jsm[p].garha}</li>`;
                }
                
            }
        }
    }

    
}
tgs3(jsm,pesan)

let potongan = totalPayment * 0.1;
let pajak = totalPayment * 0.11;
let akhir = totalPayment;

function isem(isMember){
    if (isMember){
        akhir = totalPayment - potongan + pajak;
    } else {
        akhir = totalPayment;
    }
}
isem(isMember)
document.getElementById('ifel').innerHTML = userm;
document.getElementById('ifel1').innerHTML = ao;
// document.getElementById('ifel2').innerHTML = isMember;
document.getElementById('ifel3').innerHTML = " Total Keseluruhan : Rp. " + akhir;


// Tugas 4 If Else 
let mahasiswa = [
    {Nama: 'Andreas' , Nilai: 50 , Figma: false},
    {Nama: 'Taufiq' , Nilai: 99 , Figma: false},
    {Nama: 'Nathan' , Nilai: 90 , Figma: false},
    {Nama: 'Rafi' , Nilai: 90 , Figma: true},
    {Nama: 'Yardan' , Nilai: 70 , Figma: false},
    {Nama: 'Vega' , Nilai: 60 , Figma: false},
    {Nama: 'Elvis' , Nilai: 10 , Figma: true},
]

listmhs = "";
let Predikat = "";

function tgs4(mahasiswa) {
for (let i = 0; i < mahasiswa.length; i++) {
    let mana = mahasiswa[i].Nama;
    let laini = mahasiswa[i].Nilai;
    
    if(mahasiswa[i].Figma){
        laini += 10;
    } else {
        laini += 0;
    }
    
    if(laini >= 100){
        Predikat = 'A +';
    }else if(laini >= 80 && laini < 100){
        Predikat = 'A';
    } else if (laini >= 70 && laini < 80){
        Predikat = 'B';
    } else if (laini >= 60 && laini < 70){
        Predikat = 'C';
    } else if (laini >= 50 && laini < 60){
        Predikat = 'D';
    } else {
        Predikat = 'E';
    }

    listmhs += `<li>Nama: ${mana} Nilai: ${laini} Predikat: ${Predikat}</li>`;

}
}
tgs4(mahasiswa);
document.getElementById('lefi').innerHTML = listmhs;
// document.getElementById('lefi1').innerHTML = Predikat;

// Tugas 5 JavaScript
const daftar = {
    status: 200,
    message: 'View data collection',
    data: [
        {id: 1, nama: 'Vega', age: 25},
        {id: 2, nama: 'Yardan', age: 50},
        {id: 3, nama: 'Taufiq', age: 64},
        {id: 4, nama: 'Nathan', age: 14},
        {id: 5, nama: 'Andreas', age: 29},
        {id: 6, nama: 'Rafi', age: 44},
        {id: 7, nama: 'Ilham', age: 53},
        {id: 8, nama: 'Bram', age: 32},
        {id: 9, nama: 'Fandi', age: 10},
        {id: 10, nama: 'Riza', age: 78}
    ]
};

tableBody = document.querySelector('#table tbody');
let i = 0;
let muda = 0;
let sepuh = 0;
let umur = 0;

function tgs5 (daftar) {
while (i < daftar.data.length){
    row = tableBody.insertRow(i);
    cellId = row.insertCell(0);
    cellNama = row.insertCell(1);
    cellUsia = row.insertCell(2);

    cellId.innerHTML = daftar.data[i].id;
    cellNama.innerHTML = daftar.data[i].nama;
    cellUsia.innerHTML = daftar.data[i].age;
    i++;
}

for(let x = 0; x < daftar.data.length; x++){
    umur = daftar.data[x].age ;
    if (umur < 20){
        muda++;
    } else if (umur > 50) {
        sepuh++;
    }
}
}
tgs5(daftar);
document.getElementById('ts').innerHTML = "Total Jumlah Pasien : " + daftar.data.length;
document.getElementById('ts1').innerHTML = "Total Jumlah Pasien dibawah 20 tahun : " + muda;
document.getElementById('ts2').innerHTML = "Total Jumlah Pasien diatas 50 tahun : " + sepuh;

// Tugas 6 JavaScript

const pasien = {
    status: 200,
    message: 'View data collection',
    data: [
        {id: 1, nama: 'Vega', age: 25 , gaji: 11000000 },
        {id: 2, nama: 'Yardan', age: 50 , gaji: 120},
        {id: 3, nama: 'Taufiq', age: 64 , gaji: 130},
        {id: 4, nama: 'Nathan', age: 14 , gaji: 10000000},
        {id: 5, nama: 'Andreas', age: 29 , gaji: 14000000},
        {id: 6, nama: 'Rafi', age: 44 , gaji: 150},
        {id: 7, nama: 'Ilham', age: 53 , gaji: 160},
        {id: 8, nama: 'Bram', age: 32 , gaji: 17000000},
        {id: 9, nama: 'Fandi', age: 10 , gaji: 1900000},
        {id: 10, nama: 'Riza', age: 78 , gaji: 180}
    ]
};

tableBody = document.querySelector('#letab tbody');
let p = 0;
let nom = 0;
let tuwek = 0;
let ttlgj40 = 0;
let gjvip = 0;
let vip = 0;
let urip = 0;
let totalwage = 0;
let wage = 0;

function tgs6(pasien){
while (p < pasien.data.length){
    row = tableBody.insertRow(p);
    celid = row.insertCell(0);
    celna = row.insertCell(1);
    celu = row.insertCell(2);
    celes = row.insertCell(3);

    celid.innerHTML = pasien.data[p].id;
    celna.innerHTML = pasien.data[p].nama;
    celu.innerHTML = pasien.data[p].age;
    celes.innerHTML = pasien.data[p].gaji;
    p++;
}

for(let x = 0; x < pasien.data.length; x++){
    umur = pasien.data[x].age ;
    if (umur < 20){
        nom++;
    } else if (umur > 50) {
        tuwek++;
    }
}


for(let k = 0; k <pasien.data.length; k++){
    urip = pasien.data[k].age
    wage = pasien.data[k].gaji
    vip = pasien.data[3].gaji
    if(urip >= 40){
       ttlgj40 += wage;
    } else if (urip < 20 ){
        vip += wage;
    }
    totalwage += pasien.data[k].gaji
}
}
tgs6(pasien);
document.getElementById('gj').innerHTML = "Total Seluruh Gaji Pasien : " + totalwage;
document.getElementById('gj1').innerHTML = "Total Seluruh Gaji Di atas 40 tahun : " + ttlgj40;
document.getElementById('gj2').innerHTML = "Total Gaji khusus 14 tahun : " + vip;

// Kalkulator
let tampilan = document.getElementById('display');
let angka = '';

function render(angka){
    if (angka !== ''){
    tampilan.value += angka;
    } else {
        tampilan.value = '';
    }
}

function appendToDisplay(value) {
render(value);
}

function clearDisplay() {
render('');
}

function calculate() {
const sementara = tampilan.value;
const hasil = eval(sementara);
clearDisplay();
render(hasil);
}

// Tugas Search (8) JavaScript 
const listNamaTerbaru = {
    status: 200,
    message: 'view data collection',
    data: [
      {id: 1,name: 'Vega',age: 25},
      {id: 2,name: 'Yardan',age: 50},
      {id: 3,name: 'Taufiq',age: 64},
      {id: 4,name: 'Nathan',age: 14},
      {id: 5,name: 'Andreas',age: 29},
      {id: 6,name: 'Rafi',age: 44},
      {id: 7,name: 'Ilham',age: 53},
      {id: 8,name: 'Bram',age: 32},
      {id: 9,name: 'Fandi',age: 10},
      {id: 10,name: 'Riza',age: 78},
    ]
  }
  
function pencarian() {
    const inputSearch = document.querySelector('#inputSearch').value;
    const resultSearch = document.querySelector('#hasilPencarian');
    const lowerCaseInput = inputSearch.toLowerCase();
    // const result = listNamaTerbaru.data.find(person => person.name.toUpperCase() === inputSearch.toUpperCase());
    // const result = listNamaTerbaru.data.find(person => person.name.toLowerCase() === lowerCaseInput);
    const searchData = listNamaTerbaru.data.filter(person => person.name.toLowerCase().includes(lowerCaseInput));
    if (searchData.length > 0) {
        resultSearch.innerHTML = '';
        searchData.forEach(person => {
            resultSearch.innerHTML += `<p>ID: ${person.id}</p><p>Name: ${person.name}</p><p>Age: ${person.age}</p>`;
            if (person.age > 70) {
                resultSearch.innerHTML += '<p>Manula</p>';
            } else if (person.age <= 70 && person.age > 50) {
                resultSearch.innerHTML += '<p>Masih joss</p>';
            } 
        });
    } else {
        resultSearch.innerHTML = '<p>Data tidak ditemukan</p>';
    }
}


    // if (result) {
    //     resultSearch.innerHTML = `<p>ID: ${result.id}</p><p>Name: ${result.name}</p><p>Age: ${result.age}</p>`;
    //     if (result.age > 70) {
    //     resultSearch.innerHTML += '<p>Manula</p>';
    //     } else if (result.age <= 70 && result.age > 50) {
    //     resultSearch.innerHTML += '<p>Masih joss</p>';
    //     } 
    // } else {
    //     resultSearch.innerHTML = '<p>Data tidak ditemukan</p>';
    // }
