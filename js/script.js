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
for (let i = 0; i < lm.length; i++) {
    // list +=`<li>${(/*"Menu :" +*/ lm[i]['Menu'] /*+ " : " + lm[i]['harga']*/)}</li><br>`
    list += `<li>${lm[i].Menu} : Rp. ${lm[i].harga} </li>`
}
document.getElementById('ob').innerHTML = list;
document.getElementById('ob1').innerHTML = "B. Total Pembayaran =  Rp." + priceA;
document.getElementById('ob2').innerHTML = "C. Diskon 10% menjadi = Rp." + priceB;

// TUGAS 3 Penambahan IF 
let jsm = [
    { unem: 'Nasi Pecel' , garha: 10000 , variant: ['original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Jagung' , garha: 25000, variant: ['original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Ayam' , garha: 15000, variant: ['original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Krawu' , garha: 12000, variant: ['original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Rendang', garha: 20000, variant: ['original' , 'pedas' , 'pedas banget']},
    { unem: 'Nasi Lele' , garha: 18000, variant: ['original' , 'pedas' , 'pedas banget']}
]

const pesan = ["Nasi Pecel" , "Nasi Lele" , "Nasi Jagung"];
const isMember = true
let totalPayment = 0;
const level = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
let userm = "";
let ao = "";

for (let i = 0; i < jsm.length; i++) {
    userm += `<li>${jsm[i].unem} : Rp. ${jsm[i].garha} <br> variant: ${jsm[i].variant.join(" , ")}</li>`
}

/*for (let x = 0; x < jsm.length; x++){
    if(pesan.includes(jsm[x].unem)) {
        let variant = [x].values[1];
        let lvl = "";
        
        if(jsm[x].unem === "Nasi Jagung") {
            variant = "Original"
        } else if(jsm[x].unem === "Nasi Rendang"){
            lvl = level[1];
            variant = "Pedas";
        } else if (jsm[x].unem === "Nasi Pecel"){
            if(isMember){
                totalPayment += 5000;
                ao += `<li>Nasi Pecel: Rp. 5000 (PROMO) <br> Variant: ${variant}</li>`;
            }
        }
    }
    if (jsm[x].unem === "Nasi Pecel" && !isMember){
        totalPayment += 5000;
        ao += `<li>Nasi Pecel: Rp. 5000 (PROMO) <br> Variant: ${variant}</li>`;
    }
    if(jsm[x].unem === "Nasi Jagung" || jsm[x].unem === "Nasi Rendang") {
        totalPayment += jsm[x].garha;
        ao += `<li>${jsm[x].unem}: Rp. ${jsm[x].garha} <br> Variant: ${variant} ${lvl > 0 ? "Level: " + lvl : ""}</li>`;

    }
}

let potongan = 0.1;
let pajak = 0.11;
let akhir = totalPayment;

if (isMember){
    akhir = totalPayment - (totalPayment * potongan) + (totalPayment * pajak);
} else {
    akhir = totalPayment;
}*/

document.getElementById('ifel').innerHTML = userm;
document.getElementById('ifel1').innerHTML = "Total Keseluruhan" + akhir;