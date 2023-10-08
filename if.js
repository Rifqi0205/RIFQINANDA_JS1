let nilai = 85;

let pesan = "RIFQI NANDA";

if (nilai >= 95) {
  pesan = "Selamat! Anda mendapatkan nilai A";
} else if (nilai >= 90) {
  pesan = "Anda mendapatkan nilai B";
} else if (nilai >= 60) {
  pesan = "Anda mendapatkan nilai C";
} else {
  pesan = "Anda mendapatkan nilai D";
}

console.log(`Nilai Anda: ${nilai}`);
console.log(pesan);
