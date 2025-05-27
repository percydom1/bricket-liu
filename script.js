function tampilkanPesan() {
  alert("Terima kasih telah menghubungi kami!");
}

function kirimForm() {
  const nama = document.getElementById("LiuDOM").value;
  const email = document.getElementById("liudom00@gmail.com").value;
  const pesan = document.getElementById("816515").value;

  alert(`Terima kasih ${nama}, pesan kamu sudah dikirim!\nEmail: ${email}\nPesan: ${pesan}`);
  return false; // Supaya tidak reload halaman
}
// Menandai link aktif otomatis berdasarkan URL
const links = document.querySelectorAll("nav a");
const currentURL = window.location.href;

links.forEach(link => {
  if (currentURL.includes(link.getAttribute("href"))) {
    link.classList.add("aktif");
  }
});
// Menambahkan animasi saat elemen masuk ke layar
const elemenAnimasi = document.querySelectorAll('.animasi');

function cekPosisi() {
  elemenAnimasi.forEach(el => {
    const posisiTop = el.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;

    if (posisiTop < tinggiLayar - 100) {
      el.classList.add('muncul');
    }
  });
}

// Jalankan saat scroll dan saat load
window.addEventListener('scroll', cekPosisi);
window.addEventListener('load', cekPosisi);
