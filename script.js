// const backsound = document.getElementById("backsound");
// const sound = document.getElementById("sound");

// // Menambahkan event listener untuk memainkan audio setelah klik pertama
// sound.addEventListener("click", function () {
//   backsound.play();
//   // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
//   sound.removeEventListener("click", arguments.callee);
// });

const backsound = document.getElementById("backsound");
const sound = document.getElementById("sound");

// Menambahkan event listener untuk memainkan audio setelah klik pertama
sound.addEventListener("click", function () {
  backsound.play();
  // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
  // sound.removeEventListener("click", arguments.callee);

  // Menambahkan event listener untuk menghentikan audio saat pengguna keluar dari halaman
  window.addEventListener("beforeunload", function () {
    backsound.pause();
    backsound.currentTime = 0; // Mengatur posisi audio ke awal
  });
});
