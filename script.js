// script.js
window.onload = function() {
    var modal = document.getElementById("welcomeModal");
    var span = document.getElementsByClassName("close")[0];

    // Menampilkan modal
    modal.style.display = "block";

    // Menutup modal ketika tombol close diklik
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Menutup modal jika pengguna mengklik di luar modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Menangani pengiriman form kontak
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Pesan terkirim!\nNama: " + name + "\nEmail: " + email + "\nPesan: " + message);
        } else {
            alert("Semua bidang harus diisi!");
        }
    });
};
