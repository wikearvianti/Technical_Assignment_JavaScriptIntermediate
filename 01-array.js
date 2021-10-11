Soal - 01
Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

memiliki 1 parameter yaitu:
arr [Array] => array yang akan kita manipulasi nilainya
return value [Number] berupa sebuah array baru yang sudah terbalik
Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) { 
  return arr.map((item,idx) => arr[arr.length-1-idx])
 }

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


Soal - 02
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

memiliki 1 parameter:
arr [Array of Number] => array 1 dimensi dengan nilai Number
return value [Number] total angka yang melebihi nilai rata-rata
Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
let sum = 0;
let counter = 0;
for(let i=0; i<arr.length; i++){
  sum += arr[i];
}
let avg = sum/arr.length;
for(let a=0; a< arr.length; a++){
  if(arr[a]>avg){
    counter++;
  }
}
}
console.log(getAverage(arr1))
console.log(getAverage(arr2))


Soal - 03
Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

memiliki 2 parameter:
arr [Array] => array multi dimensi yang akan kita proses
num [Number] => angka yang ingin kita cari
return value [Number]
fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
fungsi akan mengembalikan index dari angka yang dicari
Langkah-langkah pengerjaan:
 
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(arr, a) {
  
  const flattenArray = arr.flat()
  const result = flattenArray.indexOf(a);
  return result > 0 ? result : null ;

}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));

