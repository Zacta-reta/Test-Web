// Navbar Transparent
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-danger", "shadow");
  } else {
    nav.classList.remove("bg-danger", "shadow");
  }
});

// Ambil elemen input dan daftar
const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");

// Tambahkan event listener untuk input
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");

  // Loop melalui setiap item dalam daftar
  for (const item of items) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "block"; // Tampilkan item jika cocok dengan pencarian
    } else {
      item.style.display = "none"; // Sembunyikan item jika tidak cocok
    }
  }
});
