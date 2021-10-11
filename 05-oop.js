oal - 01
Kalian diminta untuk melakukan sebuah analisis sederhana terhadap sebuah baris kode

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama? 
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
  fun1: function() {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  }
};

obj.fun1();
obj.fun2();

//JAWABAN
1. fun1 {fun1: ƒ, fun2: ƒ}
fun2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
2. Tidak, hasil diatas menunjukkan bahwa hasil dari fun2 itu kosong
3. Karena fun1 menggunakan function normal, dan fun2 menggunakan function arrow

Soal - 02
Kalian diminta untuk membuat sebuah analisa terhadap beberapa pertanyaan dibawah:

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

//JAWABAN
1. Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
2. Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas
  atau fitur penting dari objek tersebut.Course
3. Inheritance adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
4. Polymorpishm berasal dari dua kata, yaitu poly yang berarti banyak dan morphism yang berarti bentuk.
  Polymorpishm yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk.

Soal - 03
Kamu diminta untuk membuat sebuah class dengan spesifikasi sebagai berikut: skilvul

class tersebut benama Phone
memiliki 3 properties yaitu:
brand: String
storage: Number
ram: Number
memiliki 4 method yaitu:
getBrandName [String] => akan mendapatkan isi dari field brand
setBrandName [void] => akan mengubah nilai dari field brand
printSpecification [void] => mencetak spesifikasi dari ponsel tersebut dengan format "Ponsel ini memiliki storage: $STORAGE dan ram: $RAM"
setSpecification [void] => akan mengubah nilai dari field storage dan ram
Untuk mempermudah pengerjaan kami sudah menyediakan code template

//JAWABAN
class Phone { 
  constructor(brand, storage, ram){
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
getBrandName(){
  return.brand;
}
setBrandName(newBrand){
  this.brand = newBrand;
}
printSpecification(){
 return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
}
setSpecification(storage, ram){
  this.storage = storage;
  this.ram = ram;
}
}
const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


Soal - 04
Kamu diminta untuk membuat beberapa class dengan spesifikasi sebagai berikut: skilvul

Course
properties:
subject [String] => nama pelajaran
quota [Number] => jumlah peserta atau siswa
attendance [Number] => jumlah minimum kehadiran sebagai syarat untuk mengikuti ujian
methods:
getSubject [String] => mengembalikan nama course saat ini
getAttendance [Number] => mengembalikan attenance course saat ini
decreaseQuota [void] => mengurangi jumlah quota dengan 1
CourseOffering
properties:
course [String] => mata pelajran yang diambil oleh siswa
grade [Number] => nilai yang diraih oleh siswa
attendance [Number] => total kehadiran siswa pada suatu kelas, secara default dia memiliki nilai 0
Student
properties:
name [String] => nama lengkap siswa
gender [String] => jenis kelamin
courseOfferings [Array of CourseOffering] => daftar mata pelajaran yang diambil oleh siswa
methods:
takeNewCourse [void] => fungsi ini akan menambahkan course yang ingin kita ambil kedalam property courseOfferings, kita tidak boleh mengambil atau menambahkan mata pelajaran yang sudah kita ambil kedalam property courseOfferings
courseAttendance [void] => menambahkan kehadiran dengan 1 poin
courseTest [void] => akan memasukan nilai secara acak kedalamm property grade, namun sebelum kita dapat mengambil ujian kita haruslah lolos absensi terlebih dahulu

//JAWABAN
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
  
    takeNewCourse(course) {
      if (this.courseOfferings.length === 0) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [courseOffering];
        course.decreaseQuota();
      } else {
        const isAlreadyExist = this.courseOfferings.find(
          (courseOffering) =>
            courseOffering.course.getSubject() === course.getSubject()
        );
  
        if (isAlreadyExist === undefined) {
          const courseOffering = new CourseOffering(course);
          this.courseOfferings = [...this.courseOfferings, courseOffering];
          course.decreaseQuota();
        }
      }
    }
  
    takeATest(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
        this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
      } else {
        console.log(
          `please fill your absen ${course.getSubject()}`
        );
      }
    }
  
    courseAttendance(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      this.courseOfferings[idx].attendance += 1;
    }
  }
  
  class CourseOffering {
    constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
    }
  }
  
  class Course {
    constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
    }
  
    getSubject() {
      return this.subject;
    }
  
    getAttendance() {
      return this.attendance;
    }
  
    decreaseQuota() {
      this.quota -= 1;
    }
  }
  
  const biology = new Course('biology', 10, 3);
  const physics = new Course('physics', 10, 2);
  
  const johnWatson = new Student('john watson', 'male');
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);