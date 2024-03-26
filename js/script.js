let menu_makanan = ["Nasi Pecel" , 
                    "KFC" , 
                    "Nasi Rawon"];
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
let diskon = 0.1 * total ;
let totalpembayaran = total - diskon;
//document.getElementById('demo').innerHTML = "A. " + menu_makanan;
document.getElementById('demo1').innerHTML = "B. Total Pembayaran = " + total;
document.getElementById('demo2').innerHTML = "C. diskon 10% menjadi =" + totalpembayaran;   
