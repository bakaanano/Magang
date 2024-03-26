const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
let totalpembayaran = total - (10/100 * total);
document.getElementById('demo').innerHTML = "A. " + harga_makanan;
document.getElementById('demo1').innerHTML = "B. Total Pembayaran = " + total;
document.getElementById('demo2').innerHTML = "C. diskon 10% menjadi =" + totalpembayaran;   
