/* if, else, nested if */

let score = 75;

if (score > 75 ){
    console.log("Selamat kamu lulus");
} else {
    console.log("Maaf, coba lagi tahun depan");
}

let age = 16;
var SIM = true;

if ( age > 18){
    if (SIM == true) {
        console.log("Kamu boleh membawa mobil");
    } else {
        console.log("Kamu harus didampingi orangtua");
    }
} else {
    console.log("Umur kamu belum cukup untuk membawa mobil");
}

/* switch case workout day */
switch (new Date().getDay()) {
    case 0:
      console.log("Hari ini adalah Push Day")
      break;
    case 1:
        console.log("Hari ini adalah Pull Day")
      break;
    case 2:
        console.log("Hari ini adalah Rest Day")
      break;
    case 3:
        console.log("Hari ini adalah Chest Day")
      break;
    case 4:
        console.log("Hari ini adalah Back Day")
      break;
    case 5:
        console.log("Hari ini adalah Rest Day")
      break;
    case 6:
        console.log("Hari ini adalah Leg Day")
  }

/* for statment */
for (let x=8; x>1; x--){
    console.log("for reverse " + x);
}

/* while, do while */
let y=2;
while (y <= 20){
    console.log(y);
    y = y + 4;
}

let z = 15;
do{
    z--;
    console.log("do while reverse " + z);
}   while( z > 5);

/* function */
function Lpersegipanjang (panjang, lebar){
    var luas = (panjang * lebar);
    return luas;
}

var panjang = 18;
var lebar = 5;
var luaspersegipanjang = Lpersegipanjang(panjang, lebar);
console.log("Luas Persegi Panjang: " + luaspersegipanjang);