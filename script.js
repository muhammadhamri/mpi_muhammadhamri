// const backsound = document.getElementById("backsound");

// const sound = document.getElementById("sound");
// const home = document.getElementsByClassName(".home h3 a");

// // Menambahkan event listener untuk memainkan audio setelah klik pertama
// sound.addEventListener("click", function () {
//   backsound.play();
// });

// home.addEventListener("click", function () {
//   backsound.pause();
// });

// const backsound = document.getElementById("backsound");
// const sound = document.getElementById("sound");
// const sound2 = document.getElementById("sound2");
// let isAudioPlaying = false; // Variabel untuk melacak status audio

// // Menambahkan event listener untuk memainkan audio setelah klik pertama pada sound
// sound.addEventListener("click", function () {
//   backsound.play();
//   isAudioPlaying = true; // Audio sedang dimainkan
// });

// // Menambahkan event listener pada sound2 untuk menghentikan audio
// sound2.addEventListener("click", function () {
//   if (isAudioPlaying) {
//     backsound.pause();
//     backsound.currentTime = 0; // Mengatur posisi audio ke awal
//     isAudioPlaying = false; // Audio telah dihentikan
//   }
// });

// // Menambahkan event listener untuk menghentikan audio saat pengguna keluar dari halaman
// window.addEventListener("beforeunload", function () {
//   if (isAudioPlaying) {
//     backsound.pause();
//     backsound.currentTime = 0; // Mengatur posisi audio ke awal
//   }
// });

// const backsound = document.getElementById("backsound");
// const sound = document.getElementById("sound");
// const home = document.querySelector(".home h2"); // Menggunakan querySelector untuk mendapatkan elemen

// // Menambahkan event listener untuk memainkan audio setelah klik pertama
// sound.addEventListener("click", function () {
//   backsound.play();
// });

// home.addEventListener("click", function () {
//   backsound.pause();
// });

const backsound = document.getElementById("backsound");
const sound = document.getElementById("sound");
const home = document.querySelector("body h3 a"); // Menggunakan querySelector untuk mendapatkan elemen

// Menambahkan event listener untuk memainkan audio setelah klik pertama
sound.addEventListener("click", function () {
  backsound.play();
});

// Menambahkan event listener untuk pause audio saat pengguna meninggalkan halaman
window.addEventListener("beforeunload", function () {
  backsound.pause();
});
