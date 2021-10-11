// 1. Apa itu synchronous?
Synchronous adalah proses pengeksekusian kode yang dijalankan secara berurutan berdasarkan kode yang tertulis.


// 2. Apa itu asynchronous?
Asyncrhonous adalah proses pengeksekusian kode yang tidak sesuai dengan urutan yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
Bisa

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
5
second log:  6

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
Karena terjadinya semantik pada fungsi yang dideklarasikan didalam loop

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }
  