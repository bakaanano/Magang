let menu_makanan = ["Nasi Pecel" , 
                    "KFC" , 
                    "Nasi Rawon" ,];
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
let diskon = 0.1 * total ;
let totalpembayaran = total - diskon;
//document.getElementById('demo').innerHTML = "A. " + menu_makanan;
document.getElementById('demo1').innerHTML = "B. Total Pembayaran = " + total;
document.getElementById('demo2').innerHTML = "C. Diskon 10% menjadi =" + totalpembayaran;   


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
for (let i = 0; i < makanan_menu.length; i++) {
    Menu +=`<li>${makanan_menu[i]}</li><br>`;
}
document.getElementById('tes').innerHTML = Menu;
document.getElementById('tes1').innerHTML = "B. Total Pembayaran = " + hargaawal;
document.getElementById('tes2').innerHTML = "C. Diskon 10% menjadi =" + hargaakhir;


/*let mm = [" Es Kopi Susu : Rp. 10000", 
            " Roti Bakar : Rp. 25000",
            " Ice Cream : Rp. 15000",
            " Nasi Goreng : Rp. 12000",
            "Ayam Goreng : Rp. 20000"];
*/

let lm = [
    {Menu: 'Es Kopi Susu', harga : 'Rp. 10.000'},
    {Menu: 'Roti Bakar', harga : 'Rp. 25000'},
    {Menu: 'Ice Cream', harga : 'Rp. 15000'},
    {Menu: 'Nasi Goreng', harga: 'Rp. 12000'}
]
const price1 = 10000;
const price2 = 25000;
const price3 = 15000;
const price4 = 12000;
let priceA = price1 + price2 + price3 + price4;
let kondis = 0.1 * priceA;
let priceB = priceA - kondis;
let list = "";
for (let i = 0; i < lm.length; i++) {
    list +=`<li>${(/*"Menu :" +*/ lm[i]['Menu'] + " : " + lm[i]['harga'])}</li><br>`; 
}
document.getElementById('ob').innerHTML = list;
document.getElementById('ob1').innerHTML = "B. Total Pembayaran = " + priceA;
document.getElementById('ob2').innerHTML = "C. Diskon 10% menjadi =" + priceB;

