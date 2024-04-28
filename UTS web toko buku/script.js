// Mendapatkan elemen yang diperlukan dari DOM
const toggleButton = document.getElementById("keranjang");
const toggleContents = document.querySelectorAll(".toggleContent");

// Menggunakan variabel boolean untuk melacak status toggle
let isToggled = false;

// Menambahkan event listener untuk tombol toggle
toggleButton.addEventListener("click", function () {
  // Mengubah status toggle
  isToggled = !isToggled;

  // Menampilkan atau menyembunyikan konten berdasarkan status toggle
  toggleContents.forEach(function (content) {
    if (isToggled) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

const th = document.getElementById("th");
th.addEventListener("click", function (event) {
  event.preventDefault();
});

const trash1 = document.querySelector(".trash1");
const trash2 = document.querySelector(".trash2");
const trash3 = document.querySelector(".trash3");
const trash4 = document.querySelector(".trash4");
const trash5 = document.querySelector(".trash5");

const cart1 = document.querySelector("#cart1");
const cart2 = document.querySelector("#cart2");
const cart3 = document.querySelector("#cart3");
const cart4 = document.querySelector("#cart4");
const cart5 = document.querySelector("#cart5");
const cart6 = document.querySelector("#cart6");
const cart7 = document.querySelector("#cart7");
const cart8 = document.querySelector("#cart8");
const cart9 = document.querySelector("#cart9");
const cart10 = document.querySelector("#cart10");
const cart11 = document.querySelector("#cart11");
const cart12 = document.querySelector("#cart12");
const cart13 = document.querySelector("#cart13");
const cart14 = document.querySelector("#cart14");
const cart15 = document.querySelector("#cart15");

const keranjang1 = document.querySelector(".keranjang1");
const keranjang2 = document.querySelector(".keranjang2");
const keranjang3 = document.querySelector(".keranjang3");
const keranjang4 = document.querySelector(".keranjang4");
const keranjang5 = document.querySelector(".keranjang5");

function trashbtn1() {
  cart1.style.opacity = "0";
}
function trashbtn2() {
  cart2.style.opacity = "0";
}
function trashbtn3() {
  cart3.style.opacity = "0";
}
function trashbtn4() {
  cart4.style.opacity = "0";
}
function trashbtn5() {
  cart5.style.opacity = "0";
}
// Teknologi
function trashbtn6() {
  cart6.style.opacity = "0";
}
function trashbtn7() {
  cart7.style.opacity = "0";
}
function trashbtn8() {
  cart8.style.opacity = "0";
}
function trashbtn9() {
  cart9.style.opacity = "0";
}
function trashbtn10() {
  cart10.style.opacity = "0";
}
// sejarah
function trashbtn11() {
  cart11.style.opacity = "0";
}
function trashbtn12() {
  cart12.style.opacity = "0";
}
function trashbtn13() {
  cart13.style.opacity = "0";
}
function trashbtn14() {
  cart14.style.opacity = "0";
}
function trashbtn15() {
  cart15.style.opacity = "0";
}

function changeOpacity1() {
  cart1.style.opacity = "1";
}
function changeOpacity2() {
  cart2.style.opacity = "1";
}
function changeOpacity3() {
  cart3.style.opacity = "1";
}
function changeOpacity4() {
  cart4.style.opacity = "1";
}
function changeOpacity5() {
  cart5.style.opacity = "1";
}
// teknologi
function changeOpacity6() {
  cart6.style.opacity = "1";
}
function changeOpacity7() {
  cart7.style.opacity = "1";
}
function changeOpacity8() {
  cart8.style.opacity = "1";
}
function changeOpacity9() {
  cart9.style.opacity = "1";
}
function changeOpacity10() {
  cart10.style.opacity = "1";
}
// sejarah
function changeOpacity11() {
  cart11.style.opacity = "1";
}
function changeOpacity12() {
  cart12.style.opacity = "1";
}
function changeOpacity13() {
  cart13.style.opacity = "1";
}
function changeOpacity14() {
  cart14.style.opacity = "1";
}
function changeOpacity15() {
  cart15.style.opacity = "1";
}

// deskripsi komik
function desc1() {
  alert(
    "Naruto adalah kisah tentang seorang ninja remaja bernama Naruto Uzumaki yang bercita-cita menjadi Hokage, pemimpin desa ninja terkuat. Dibesarkan tanpa orang tua, Naruto memiliki semangat yang kuat meskipun diabaikan oleh desanya"
  );
}
function desc2() {
  alert(
    "Jujutsu Kaisen adalah cerita tentang Yuji Itadori, seorang siswa SMA yang terlibat dalam dunia sihir setelah bertemu dengan artefak terkutuk. Dia bergabung dengan sekolah penyihir untuk melawan makhluk-makhluk jahat. Dengan aksi yang intens dan karakter yang kuat, seri ini telah mendapat banyak penggemar di seluruh dunia."
  );
}
function desc3() {
  alert(
    "Haikyu!! adalah kisah tentang Shoyo Hinata, seorang pemain voli SMA yang bertekad menjadi yang terbaik di Jepang. Bersama tim volinya, mereka berjuang untuk meraih kemenangan di turnamen nasional. Dengan aksi voli yang mendebarkan dan pertumbuhan karakter yang menginspirasi, seri ini telah menjadi favorit di kalangan penggemar manga olahraga."
  );
}
function desc4() {
  alert(
    "Kimetsu no Yaiba mengikuti perjalanan Tanjiro Kamado yang bergabung dengan Korps Pembasmi Iblis untuk membalaskan dendam pada iblis dan menyelamatkan adiknya, Nezuko. Dengan aksi yang menegangkan dan gambar yang memukau, seri ini telah menjadi favorit di kalangan penggemar manga."
  );
}
function desc5() {
  alert(
    "Solo Leveling adalah kisah tentang Sung Jin-Woo, seorang pemburu yang mendapatkan kemampuan unik untuk level up dalam dunia di mana manusia bertarung melawan monster. Dia memulai perjalanan solonya untuk menjadi yang terkuat di antara pemburu. Dengan aksi yang mendebarkan dan konsep yang menarik, seri ini telah memenangkan hati banyak penggemar manga."
  );
}
// deskripsi teknologi

function desc6() {
  alert(
    "Buku teknologi perkantoran membahas penggunaan teknologi modern dalam lingkungan kantor. Ini mencakup aplikasi perangkat lunak, perangkat keras komputer, sistem komunikasi, dan strategi manajemen informasi yang diperlukan untuk meningkatkan efisiensi dan produktivitas di tempat kerja."
  );
}
function desc7() {
  alert(
    "Buku tentang media dan teknologi pembelajaran menguraikan berbagai alat dan pendekatan teknologi yang dapat digunakan untuk mendukung proses pembelajaran. Dari penggunaan perangkat lunak pembelajaran hingga platform daring, buku ini membahas cara-cara untuk memanfaatkan teknologi guna menciptakan pengalaman pembelajaran yang lebih interaktif dan efektif."
  );
}
function desc8() {
  alert(
    "Buku ini merupakan panduan singkat tentang teknologi informasi dan komunikasi data, yang mencakup konsep dasar, perkembangan terkini, dan aplikasi praktis dalam dunia modern. Dari pemahaman tentang jaringan komputer hingga pengelolaan data, pembaca akan dipandu melalui berbagai aspek teknologi informasi dan komunikasi yang penting untuk keberhasilan dalam berbagai bidang industri."
  );
}
function desc9() {
  alert(
    "Buku ini merupakan sumber pengetahuan yang membahas penggunaan teknologi informasi dalam konteks pendidikan. Mulai dari integrasi teknologi dalam pengajaran dan pembelajaran hingga pengelolaan data siswa dan analisis kinerja, buku ini memberikan wawasan tentang bagaimana teknologi dapat meningkatkan efektivitas pembelajaran dan meningkatkan pengalaman belajar siswa."
  );
}
function desc10() {
  alert(
    "Buku ini adalah panduan lengkap tentang analisis dan perancangan sistem informasi. Dari pemahaman kebutuhan pengguna hingga merancang solusi yang efisien, pembaca akan dibimbing melalui langkah-langkah metodologis untuk mengembangkan sistem informasi yang sukses."
  );
}
function desc11() {
  alert(
    "Buku ini mengungkap sisi gelap dan tersembunyi dari sejarah dunia yang sering kali tidak dipelajari di sekolah. Dari konspirasi politik hingga misteri arkeologi, pembaca akan dibawa dalam perjalanan yang membingungkan dan memikat melalui kejadian-kejadian yang tersembunyi di balik tirai sejarah. Dengan fakta-fakta yang menarik dan penelitian mendalam, buku ini membuka mata kita terhadap cerita-cerita tersembunyi yang memengaruhi jalannya peristiwa dunia."
  );
}
function desc12() {
  alert(
    "Buku ini adalah pengantar singkat tentang ilmu sejarah, membahas konsep dasar dan metodologi studi sejarah. Dari sumber sejarah hingga teknik analisis, pembaca diperkenalkan pada berbagai pendekatan yang digunakan dalam memahami masa lalu."
  );
}
function desc13() {
  alert(
    "Buku ini mengulas sejarah dan konsep-konsep utama dalam pemikiran ekonomi Islam dari masa awal hingga kontemporer. Dengan fokus pada prinsip-prinsip seperti zakat dan perdagangan, pembaca mendapatkan wawasan tentang aplikasi ekonomi Islam dalam konteks modern."
  );
}
function desc14() {
  alert(
    "Buku ini adalah pengantar singkat tentang sejarah Indonesia, mencakup perkembangan politik, budaya, dan sosial dari zaman prasejarah hingga masa kontemporer."
  );
}
function desc15() {
  alert(
    "Buku ini merupakan bahan bacaan untuk pelajar tingkat 4 yang membahas sejarah secara mendalam. Mulai dari periode kuno hingga masa modern, buku ini menjelaskan perkembangan peristiwa-peristiwa penting dalam sejarah dunia dengan pendekatan yang terstruktur dan menyeluruh. Dengan analisis yang mendalam dan fakta yang relevan, pembaca akan mendapatkan pemahaman yang kuat tentang sejarah dan dampaknya terhadap dunia saat ini."
  );
}
