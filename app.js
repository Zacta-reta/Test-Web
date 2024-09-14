document.addEventListener("alpine:init", () => {
  Alpine.data("product", () => ({
    items: [
      {
        id: 1,
        name: "GS Astra Otopart Basah Hybird GS NS 40",
        img: "GSHybird.jpeg",
        price: 680000,
        category: "Hybird",
      },
      {
        id: 2,
        name: "GS Astra Otopart Basah Hybird GS NS 40 Z",
        img: "GSHybird.jpeg",
        price: 700000,
        category: "Hybird",
      },
      {
        id: 3,
        name: "GS Astra Otopart Basah Hybird GS NS 60",
        img: "GSHybird.jpeg",
        price: 770000,
        category: "Hybird",
      },
      {
        id: 4,
        name: "GS Astra Otopart Basah Hybird GS NS 50 Z",
        img: "GSHybird.jpeg",
        price: 950000,
        category: "Hybird",
      },
      {
        id: 5,
        name: "GS Astra Otopart Basah Hybird GS NS 70",
        img: "GSHybird.jpeg",
        price: 1020000,
        category: "Hybird",
      },
      {
        id: 6,
        name: "GS Astra Otopart Basah Hybird GS NS 70 Z",
        img: "GSHybird.jpeg",
        price: 1300000,
        category: "Hybird",
      },
      {
        id: 7,
        name: "GS Astra Otopart MF/KERING GS NS 40",
        img: "GSMF.jpg",
        price: 820000,
        category: "Kering",
      },
      {
        id: 8,
        name: "GS Astra Otopart MF/KERING GS NS 40 Z",
        img: "GSMF.jpg",
        price: 850000,
        category: "Kering",
      },
      {
        id: 9,
        name: "GS Astra Otopart MF/KERING GS NS 60",
        img: "GSMF.jpg",
        price: 950000,
        category: "Kering",
      },
      {
        id: 10,
        name: "GS Astra Otopart MF/KERING GS N50Z/55D23L",
        img: "GSMF.jpg",
        price: 1100000,
        category: "Kering",
      },
      {
        id: 11,
        name: "GS Astra Otopart MF/KERING GS NS 70",
        img: "GSMF.jpg",
        price: 1200000,
        category: "Kering",
      },
      {
        id: 12,
        name: "GS Astra Otopart MF/KERING GS N70Z",
        img: "GSMF.jpg",
        price: 1600000,
        category: "Kering",
      },
      {
        id: 13,
        name: "GS Astra Otopart MF/KERING GS LN 2",
        img: "GSMF.jpg",
        price: 1700000,
        category: "Kering",
      },
      {
        id: 14,
        name: "GS Astra Otopart MF/KERING GS LN 3",
        img: "GSMF.jpg",
        price: 2200000,
        category: "Kering",
      },
      {
        id: 15,
        name: "GS Astra Otopart GS PREMIUM 95DD31L",
        img: "GSPremium.jpeg",
        price: 1450000,
        category: "Premium",
      },
      {
        id: 16,
        name: "GS Astra Otopart GS PREMIUM N100",
        img: "GSPremium.jpeg",
        price: 1550000,
        category: "Premium",
      },
      {
        id: 17,
        name: "Incoe Gold NS 40 R/L",
        img: "IncoeGoldNS40.jpeg",
        price: 580000,
        category: "Gold",
      },
      {
        id: 18,
        name: "Incoe Gold NS 60 R/L",
        img: "IncoeGoldNS60.jpeg",
        price: 680000,
        category: "Gold",
      },
      {
        id: 19,
        name: "Incoe Gold N50Z",
        img: "IncoeGoldN50Z.jpeg",
        price: 820000,
        category: "Gold",
      },
      {
        id: 20,
        name: "Incoe Gold NS 70",
        img: "IncoeGoldNS70.jpeg",
        price: 850000,
        category: "Gold",
      },
      {
        id: 21,
        name: "Incoe Gold N70Z",
        img: "IncoeGoldNS70.jpeg",
        price: 1100000,
        category: "Gold",
      },
      {
        id: 22,
        name: "Incoe MF NS 40 R/L",
        img: "IncoeMF.jpeg",
        price: 650000,
        category: "Kering",
      },
      {
        id: 23,
        name: "Incoe MF NS 60 R/L",
        img: "IncoeMF.jpeg",
        price: 750000,
        category: "Kering",
      },
      {
        id: 24,
        name: "Incoe MF N50Z",
        img: "IncoeMF.jpeg",
        price: 900000,
        category: "Kering",
      },
      {
        id: 25,
        name: "Incoe MF 555-59",
        img: "IncoeMF.jpeg",
        price: 1250000,
        category: "Kering",
      },
      {
        id: 26,
        name: "Incoe MF 580-24",
        img: "IncoeMF.jpeg",
        price: 1550000,
        category: "Kering",
      },
      {
        id: 27,
        name: "Incoe Premium N100",
        img: "IncoePremium.jpeg",
        price: 1350000,
        category: "Premium",
      },
      {
        id: 28,
        name: "Amaron Hi Life / Amaron Flo 42B20/L(BH)",
        img: "AMRFLO.jpg",
        price: 1328000,
        category: "Amaron Hi Life",
      },
      {
        id: 29,
        name: "Amaron Hi Life / Amaron Flo 55B24R/L | Amaron Flo R/SLS",
        img: "AMRFLO.jpg",
        price: 1586000,
        category: "Amaron Flo",
      },
      {
        id: 30,
        name: "Amaron Hi Life 85D23R/L",
        img: "AMRFLO.jpg",
        price: 2051000,
        category: "Amaron Flo",
      },
      {
        id: 31,
        name: "Amaron Hi Life 95D26R/L",
        img: "AMRFLO.jpg",
        price: 2106000,
        category: "Amaron Flo",
      },
      {
        id: 32,
        name: "Amaron Hi Life 105D31R/L",
        img: "AMRFLO.jpg",
        price: 2753000,
        category: "Amaron Flo",
      },
    ],
  }));

  // Sistem pop up shopping cart
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    // add
    add(newItem) {
      // cek barang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // jika tidak ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // Jika barang ada
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    // remove
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id != id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});
//Konversi mata uang
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Translate Data
const form = document.querySelector("#checkoutForm");
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open("http://wa.me/6281977792060?text=" + encodeURIComponent(message));
});

//Kirim Ke WA
const formatMessage = (obj) => {
  return `
  Data Pelanggan
    Nama : ${obj.name}
    Alamat : ${obj.alamat}
  Data Pesanan
    ${JSON.parse(obj.items).map(
      (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
    )}
  Total :${rupiah(obj.total)}
    `;
};
