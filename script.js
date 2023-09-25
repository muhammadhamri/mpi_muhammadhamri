const backsound = document.getElementById("backsound");
const backsound1 = document.getElementById("backsound1");
const sound = document.getElementById("sound");
const sound1 = document.getElementById("sound1");

// Menambahkan event listener untuk memainkan audio setelah klik pertama
sound.addEventListener("click", function () {
  backsound.play();
  // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
  sound.removeEventListener("click", arguments.callee);
});

sound1.addEventListener("click", function () {
  backsound1.play();
  backsound.pause();
  // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
  sound.removeEventListener("click", arguments.callee);
});

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
