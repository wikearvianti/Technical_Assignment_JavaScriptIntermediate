Soal - 01
Kamu diminta untuk memperbaiki baris kode dibawah agar ia dapat menggunakan fungsi yang berada pada file 06-module-helpers.js, ada beberapa hal yang perlu kalian perbaiki diantaranya adalah:

menambahkan attribute yang diperlukan untuk memanggil sebuah module JavaScript di dalam 06-module.html
perbaiki proses import fungsi sayHello yang berada di dalam file 06-module.html
export fungsi sayHello secara "default" agar ia bisa kita panggil secara langsung
perbaiki proses eksekusi dari fungsi sayHello

//JAWABAN
export default function sayHello() {
    console.log("Hello");
  }

export function greeting(name){
    alert(`hello ${name}`)
}


Soal - 02
Kamu diminta untuk melakukan implementasi terhadap suatu fungsi greeting yang mana akan menampilkan sebuah alert dengan pesan "Hello, $NAME", berikut merupakan langkah-langkah pengerjaannya:

kita perlu meng-export fungsi greeting, agar ia dapat diakses oleh <script> tag didalam file 06-module.html
memanggil fungsi greeting didalam file 06-module.html
ambil data "name" pada saat user menekan tombol submit
(kamu dapat mengggunakan onclick atau onsubmit)
implementasikan fungsi greeting serta berikan data "name" sebagai parameter dan letakan hasilnya didalam sebuah variable "message"
buat sebuah alert yang akan menampilkan isi dari variable "message"