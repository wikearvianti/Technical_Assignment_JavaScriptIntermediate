Soal - 03
Buatlah file 02-asynchronous.js dan copy template soal di bawah. Lalu berikan jawaban tersebut pada 03-asynchronous.js.

Kamu diminta untuk membuat sebuah fungsi getGitHubUser yang akan mengambil profile dari seorang user pada platform GitHub, fungsi tersebut memiliki deskripsi sebagai berikut:

nama => getGitHubUser
description => mengambil profile seorang user yang telah terdaftar pada platform GitHub
parameter
username [String] => username yang sudah terdaftar pada GitHub
return value
mengembalikan null apabila parameter bernilai kosong
mengambalikan Object apabila user telah ditemukan
mengembalikan "not found" apabila tidak menemukan user dengan username yang telah dimasukan oleh user
clue
gunakan fungsi fetch untuk mendapatkan data dari GitHub API
gunakan konsep asynchronous untuk menggambil data menggunakan fetch
gunakan try catch untuk error handling
berikut merupakan endpoint yang dapat kalian gunakan untuk mendapatkan data dari GitHub API

const getGitHubUser = (user_id) => { 
    try {
        let response = await 
        fetch(){
            {
                method: 'GET',
            });
            let jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            console.log(error);
        }
}
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();