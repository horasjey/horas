<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="image/png" sizes="96x96" rel="icon" href="assets/image/favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script>
    <script src="https://kit.fontawesome.com/4f3ce16e3e.js" crossorigin="anonymous"></script>
    <title>jojo</title>
</head>
<body>
    <audio id="linkmp3">assets/audio/backsound.mp3</audio>
    <div id="bodyblur">
        <img src="assets/image/background.jpg" id="wallpaper"/>
    </div>
    <div id='Content'>
        <div id="suratin" onClick="memulai(); audio.play();">
            <img src="assets/image/amplop.png"/>
        </div>
        <p id="ket">BUKA AMPLOP INI</p>
        <div>
            <blockquote id='bq'>
            <div>
              <img src="assets/gif/gif_1.gif" id="fotoakhir"/>
              <img src="assets/gif/gif_2.gif" id="fotoakhir2"/>
              <img src="assets/gif/gif_3.gif" id="fotoakhir3"/>
              <img src="assets/gif/gif_4.gif" id="fotoakhir4"/>
            </div>
            <p id="kalimat">Hai Apakabar? ,boleh nggak aku ngasih tahu sesuatu</p>
            <p id="kalimatb"></p>
            <p id="kalimatc"></p>
            <p id="kalimat2">sebenernya aku kangen sama kamu tapi malu😆, jadi aku buat web ini maaf ya kalau caranya cupu❤️</p>
            <p id="kalimatb2"> berharap suatu saat nanti kita bisa jalan bareng berdua dengan status kamu bububku🤣🤣🤣🤣🤣 </p>
            <p id="kalimatc2">eh tapi kamu nya pasti nggak akan mau sama aku karena dikira cuek, yah mau gimana lagi aku kan kerja buat masa depan kita berdua nanti❤️❤️😆❤️❤️<b id="ctimer" style="font-size:24px">15</b></p>
            <p id="kalimat3">Tapi biarin aja deh 😜 mau kamu percaya atau tidak</p>
            <p id="kalimatb3">yang penting aku tetep sayang sama kamu meskipun tidak ada komunikasi diantara kita ❤️ 
				kalau kamu juga kangen sama aku coba kirim pesan lewat tombol dibawah
			</p>
			
            <p id="kalimatc3"> </p>
            </blockquote>
        </div>
        <div id="Tombol">
            <a id="By" onClick="multifungsi()">
              <b id="tmbl">Boleh</b>
            </a>
            <a id="Bn" onClick="ditolak()">Nggak palingan nggak penting</a>
            <a id="Bn2" onClick="ditolak2()"></a>
        </div>
    </div>

<script>
ftom = 0;
jikapr = 1;
ftganti = 0;
flag = 1;
flagg = 1;
fungsi = 0;
Bn2.innerHTML = Bn.innerHTML;

function showDiv() {
    nomorWhatsapp = "6281362190902"
	pesanwhatsapp = "aku juga kangen , semoga ya 🤭❤️";
	Bn2.style.display = "none";
	Content.style = "opacity:1;margin-top:15vh;";
	ket.style = "margin-top:30px";
}

function memulai() {
	suratin.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
	ket.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
	setTimeout(mulaikonten, 300)
}

function mulaikonten() {
	otomatis();
	suratin.style = "display:none";
	ket.style = "display:none";
	Content.style = "opacity:1;margin-top:4vh";
	bodyblur.style = "opacity:.6;animation:none";
	wallpaper.style = "transform: scale(2);opacity:1;";
	fotoakhir.style = "display:inline-flex;";
	setTimeout(ftmuncul, 200);
	bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);border-radius:var(--bingkai);margin-top:0";
	fungsi = 1;
	setTimeout(tombol, 500);
}

function ftmuncul() {
	if (ftganti == 0) {
		fotoakhir.style = "display:inline-flex;opacity:1;transform:scale(1)";
	}
	if (ftganti == 1) {
		fotoakhir.src = fotoakhir2.src;
		fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
	}
	if (ftganti == 2) {
		fotoakhir.src = fotoakhir3.src;
		fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
	}
	if (ftganti == 3) {
		fotoakhir.src = fotoakhir4.src;
		fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
	}
}

function fthilang() {
	fotoakhir.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function jjfoto() {
	fotoakhir.style.animation = "rto .8s infinite alternate";
}

function tombol() {
	Tombol.style = "opacity:1;transform: scale(1);";
	Bn.style = "margin:12px 0 12px 12px";
	ftom = 1;
}

function multifungsi() {
	if (ftom == 1) {
		diterima();
	}
	if (ftom == 5) {
		menuju();
	}
}
async function menuju() {
	await swals.fire('', 'Kirim tanggapan kamu ke WhatsApp aku, ya!', 'success');
	window.location = "https://api.whatsapp.com/send?phone=" + nomorWhatsapp + "&text=" + pesanwhatsapp;
	Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
}
setTimeout(showDiv, 100);

const swalst = Swal.mixin({
	timer: 2777,
	allowOutsideClick: false,
	showConfirmButton: false,
	timerProgressBar: true,
	imageHeight: 100,
});
audio = new Audio('' + linkmp3.innerHTML);
const swals = Swal.mixin({
	allowOutsideClick: false,
	cancelButtonColor: '#FF0040',
	imageWidth: 100,
	imageHeight: 100,
});
const style = document.createElement('style');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
const body = document.querySelector("body");

function createHeart() {
	const heart = document.createElement("div");
	heart.className = "fas fa-heart";
	heart.style.left = (Math.random() * 90) + "vw";
	heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
	body.appendChild(heart);
}
setInterval(function name(params) {
	var heartArr = document.querySelectorAll(".fa-heart");
	if (heartArr.length > 100) {
		heartArr[0].remove()
	}
}, 100);
</script>
</body>
</html>
