const backsound = document.getElementById("backsound");
const sound = document.getElementById("sound");

// Menambahkan event listener untuk memainkan audio setelah klik pertama
sound.addEventListener("click", function () {
  backsound.play();
  // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
  sound.removeEventListener("click", arguments.callee);
});
