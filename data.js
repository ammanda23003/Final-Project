// scripts/data.js
// Satu sumber data untuk seluruh halaman (Menu, Favorit, Promo, Cart, Checkout).
// Pastikan <script src="scripts/data.js"></script> dimuat sebelum script halaman yang mengonsumsi MENU_DATA.

window.MENU_DATA = {
  // === MAKANAN ===
  "nasi-goreng-spesial": {
    id: "nasi-goreng-spesial",
    title: "Nasi Goreng Spesial",
    price: 35000,
    img: "Img/nasigorengspesial.png",
    desc: "Nasi Goreng spesial dengan suwiran ayam, udang, dan telur mata sapi",
    category: "makanan",
    isFavorite: true,
    isPromo: true,
    promo: { type: "percent", value: 15, label: "15% OFF" },
    prepTime: 12,
    sauces: ["Manis Pedas", "Kecap", "Sambal"],
    extras: [
      { name: "Telur Ceplok", price: 5000 },
      { name: "Kerupuk", price: 3000 }
    ]
  },
  "mie-ayam-bakso": {
    id: "mie-ayam-bakso",
    title: "Mie Ayam Bakso",
    price: 15000,
    img: "Img/mieayambakso.png",
    desc: "Mie ayam klasik dengan bakso sapi",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 8,
    sauces: ["Cabai Minyak", "Kecap"],
    extras: [
      { name: "Tambah Bakso", price: 5000 },
      { name: "Pangsit Goreng", price: 4000 }
    ]
  },
  "ayam-bakar-madu": {
    id: "ayam-bakar-madu",
    title: "Ayam Bakar Madu",
    price: 55000,
    img: "Img/ayambakarmadu.png",
    desc: "Ayam bakar bumbu madu, disajikan dengan nasi",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 20,
    sauces: ["Madu", "Barbeque"],
    extras: [
      { name: "Sambal", price: 3000 },
      { name: "Nasi Tambahan", price: 6000 }
    ]
  },
  "spaghetti-bolognese": {
    id: "spaghetti-bolognese",
    title: "Spaghetti Bolognese",
    price: 25000,
    img: "Img/spaghettibolognese.png",
    desc: "Pasta dengan saus daging sapi cincang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 14,
    sauces: ["Tomat", "Keju"],
    extras: [
      { name: "Keju Parut", price: 4000 },
      { name: "Garlic Bread", price: 6000 }
    ]
  },
  "soto-betawi": {
    id: "soto-betawi",
    title: "Soto Betawi",
    price: 45000,
    img: "Img/sotobetawi.png",
    desc: "Soto khas Jakarta dengan santan dan daging sapi",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 18,
    sauces: ["Madu", "Mayonaise"], // contoh dari requirement
    extras: [
      { name: "Extra Telur", price: 5000 },
      { name: "Tambahan Daging", price: 5000 }
    ]
  },
  "cumi-goreng-tepung": {
    id: "cumi-goreng-tepung",
    title: "Cumi Goreng Tepung",
    price: 23000,
    img: "Img/cumigorengtepung.png",
    desc: "Cumi digoreng renyah, disajikan dengan saus tartar",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    sauces: ["Tartar", "Pedas"],
    extras: [{ name: "Lemon Slice", price: 2000 }]
  },
  "sate-ayam": {
    id: "sate-ayam",
    title: "Sate Ayam",
    price: 20000,
    img: "Img/sateayam.png",
    desc: "10 tusuk sate ayam dengan bumbu kacang yang khas",
    category: "makanan",
    isFavorite: true,
    isPromo: true,
    promo: { type: "fixed", value: 5000, label: "Rp 5.000 OFF" },
    prepTime: 15,
    sauces: ["Kacang", "Kecap Pedas"],
    extras: [{ name: "Lontong", price: 6000 }]
  },
  "rendang": {
    id: "rendang",
    title: "Rendang",
    price: 45000,
    img: "Img/rendang.png",
    desc: "Daging sapi empuk dengan bumbu rendang kaya rasa",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 30,
    sauces: ["Rendang"],
    extras: [{ name: "Nasi Tambahan", price: 6000 }]
  },
  "gado-gado": {
    id: "gado-gado",
    title: "Gado Gado",
    price: 15000,
    img: "Img/gadogado.png",
    desc: "Salad sayur dengan saus kacang khas Indonesia",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 7,
    sauces: ["Kacang", "Pedas"],
    extras: [{ name: "Kerupuk", price: 3000 }]
  },
  "kwetiau-goreng-seafood": {
    id: "kwetiau-goreng-seafood",
    title: "Kwetiau Goreng Seafood",
    price: 35000,
    img: "Img/kwetiauseafood.png",
    desc: "Kwetiau goreng dengan udang, cumi, dan bakso ikan",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 16,
    sauces: ["Kecap", "Cabai"],
    extras: [{ name: "Bakso Ikan Tambahan", price: 5000 }]
  },
  "beef-burger": {
    id: "beef-burger",
    title: "Beef Burger",
    price: 46000,
    img: "Img/beefburger.png",
    desc: "Burger daging sapi dengan tambahan keju, selada, dan tomat",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 12,
    sauces: ["Mayonaise", "BBQ"],
    extras: [{ name: "Extra Keju", price: 4000 }]
  },
  "sop-buntut": {
    id: "sop-buntut",
    title: "Sop Buntut",
    price: 55000,
    img: "Img/sopbuntut.png",
    desc: "Sop buntut sapi dengan tambahan wortel dan kentang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 25,
    sauces: ["Sambal", "Kecap"],
    extras: [{ name: "Nasi Tambahan", price: 6000 }]
  },
  "ayam-penyet": {
    id: "ayam-penyet",
    title: "Ayam Penyet",
    price: 25000,
    img: "Img/ayampenyet.png",
    desc: "Ayam goreng penyet yang lezat dengan sambal terasi pedas",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 12,
    sauces: ["Terasi", "Cabe Ijo"],
    extras: [{ name: "Tempe Goreng", price: 4000 }]
  },
  "ikan-bakar-jimbaran": {
    id: "ikan-bakar-jimbaran",
    title: "Ikan Bakar Jimbaran",
    price: 55000,
    img: "Img/ikanbakarjimbaran.png",
    desc: "Ikan bakar dengan bumbu khas Bali",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 22,
    sauces: ["Sambal Matah", "Kecap"],
    extras: [{ name: "Lalapan", price: 3000 }]
  },
  "tomyamgoong": {
    id: "tomyamgoong",
    title: "Tom Yum Goong",
    price: 42000,
    img: "Img/tomyumgoong.png",
    desc: "Sup asam pedas khas Thailand dengan tambahan udang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 14,
    sauces: ["Asam Pedas"],
    extras: [{ name: "Nasi Putih", price: 6000 }]
  },
  "beef-teriyaki": {
    id: "beef-teriyaki",
    title: "Beef Teriyaki",
    price: 25000,
    img: "Img/beefteriyaki.png",
    desc: "Irisan daging sapi dengan saus teriyaki manis",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 12,
    sauces: ["Teriyaki", "Pedas Manis"],
    extras: [{ name: "Nasi Tambahan", price: 6000 }]
  },
  "salad-sayur": {
    id: "salad-sayur",
    title: "Salad Sayur",
    price: 45000,
    img: "Img/saladsayur.png",
    desc: "Salad sayur segar dengan saus pilihan",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 6,
    sauces: ["Madu", "Mayonaise"], // contoh sesuai permintaan
    extras: [
      { name: "Extra Telur", price: 5000 },
      { name: "Tambahan Daging", price: 5000 }
    ]
  },
  "pizza-pepperoni": {
    id: "pizza-pepperoni",
    title: "Pizza Pepperoni",
    price: 85000,
    img: "Img/pizzapepperoni.png",
    desc: "Pizza klasik dengan topping pepperoni dan keju mozzarella",
    category: "makanan",
    isFavorite: false,
    isPromo: true,
    promo: { type: "percent", value: 20, label: "20% OFF" },
    prepTime: 18,
    sauces: ["Tomat", "Keju"],
    extras: [{ name: "Extra Pepperoni", price: 7000 }]
  },
  "pancake-madu": {
    id: "pancake-madu",
    title: "Pancake Madu",
    price: 45000,
    img: "Img/pancakemadu.png",
    desc: "Pancake lembut dengan siraman madu asli dan buah berry segar",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    sauces: ["Madu", "Chocolate"],
    extras: [{ name: "Extra Berry", price: 6000 }]
  },
  "ramen-kuah-pedas": {
    id: "ramen-kuah-pedas",
    title: "Ramen Kuah Pedas",
    price: 65000,
    img: "Img/ramenkuahpedas.png",
    desc: "Mi Ramen dengan kuah pedas yang menggoda",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 20,
    sauces: ["Pedas", "Kaldu Original"],
    extras: [{ name: "Telur Ajitama", price: 7000 }]
  },
  "burger-klasik": {
    id: "burger-klasik",
    title: "Burger Klasik",
    price: 60000,
    img: "Img/burgerklasik.png",
    desc: "Burger daging sapi dengan tambahan selada dan keju",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 12,
    sauces: ["Mayonaise", "Mustard"],
    extras: [{ name: "Double Patty", price: 12000 }]
  },
  "spaghetti-carbonara": {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    price: 45000,
    img: "Img/spaghetticarbonara.png",
    desc: "Pasta dengan saus carbonara creamy dan smoked beef",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 14,
    sauces: ["Carbonara"],
    extras: [{ name: "Smoked Beef Extra", price: 8000 }]
  },
  "taco-daging-sapi": {
    id: "taco-daging-sapi",
    title: "Taco Daging Sapi",
    price: 20000,
    img: "Img/tacodagingsapi.png",
    desc: "Taco dengan isian daging sapi cincang pedas",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 8,
    sauces: ["Sour Cream", "Salsa"],
    extras: [{ name: "Guacamole", price: 6000 }]
  },
  "burger-sapi-spesial": {
    id: "burger-sapi-spesial",
    title: "Burger Sapi Spesial",
    price: 35000,
    img: "Img/beefburgerspesial.png",
    desc: "Burger sapi spesial dengan patty tebal dan saus mayo lada hitam",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 14,
    sauces: ["Mayo Lada Hitam", "BBQ"],
    extras: [{ name: "Keju Extra", price: 4000 }]
  },
  "pizza-meat-lovers": {
    id: "pizza-meat-lovers",
    title: "Pizza Meat Lovers",
    price: 85000,
    img: "Img/pizzameatlovers.png",
    desc: "Pizza dengan pepperoni, sosis, ham, dan keju mozzarella",
    category: "makanan",
    isFavorite: true,
    isPromo: true,
    promo: { type: "percent", value: 10, label: "10% OFF" },
    prepTime: 20,
    sauces: ["Tomat", "Keju"],
    extras: [{ name: "Keju Extra", price: 6000 }]
  },
  "ayam-gulai-padang": {
    id: "ayam-gulai-padang",
    title: "Ayam Gulai Padang",
    price: 48000,
    img: "Img/ayamgulaipadang.png",
    desc: "Potongan ayam berkuah santan dengan rempah khas padang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 20,
    sauces: [],
    extras: []
  },
  "bakmi-goreng-spesial": {
    id: "bakmi-goreng-spesial",
    title: "Bakmi Goreng Spesial",
    price: 28000,
    img: "Img/bakmigorengspesial.png",
    desc: "Bakmi tumis dengan sayur, telur, dan irisan ayam",
    category: "makanan",
    isFavorite: true,
    isPromo: false,
    prepTime: 23,
    sauces: [],
    extras: []
  },
  "ikan-asam-manis":{
    id: "ikan-asam-manis",
    title: "Ikan Asam Manis",
    price: 42000,
    img: "Img/ikanasammanis.png",
    desc: "Fillet ikan goreng dengan saus asam manis",
    category: "makanan",
    isFavorite: false,
    isPromo: true,
    promo: {type: "percent", value: 20, label: "20% OFF"},
    prepTime: 30,
    sauces: [],
    extras: []
  },
  "tahu-tempe-kriuk": {
    id: "tahu-tempe-kriuk",
    title: "Tahu Tempe Kriuk",
    price: 15000,
    img: "Img/tahutempekriuk.png",
    desc: "Paket gorengan tahu dan tempa renyah dengan sambal",
    category: "makanan",
    isFavorite: true,
    isPromo: false,
    prepTime: 15,
    sauces: [],
    extras: []
  },
  "nasi-uduk-komplit": {
    id: "nasi-uduk-komplit",
    title: "Nasi Uduk Komplit",
    price: 30000,
    img: "Img/nasiudukkomplit.png",
    desc: "Nasi uduk dengan ayam suwir, telur, dan sambal",
    category: "makanan",
    isFavorite: true,
    isPromo: true,
    promo: {type: "percent", value: 20, label: "20% OFF"},
    prepTime: 20,
    sauces: [],
    extras: [{ name: "Telur Mata sapi", price: 5000 },
      {name: "Ayam suwir", price: 8000}
     ]
  },
  "sop-kacang-merah":{
    id: "sop-kacang-merah",
    title: "Sop Kacang Merah",
    price: 26000,
    img: "Img/sopkacangmerah.png",
    desc: "Sup hangan dengan kacang merah dan daging cincang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    sauces: [],
    extras: []
  },
  "ikan-asin-tumis-cabe": {
    id: "ikan-asin-tumis-cabe",
    title: "Ikan Asin Tumis Cabe",
    price: 32000,
    img : "Img/ikanasintumiscabe.png",
    desc: "Ikan asin tumis pedas dengan bawang dan tomat",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 20,
    sauces: [],
    extras: []
  },
  "pepes-jagung-keju": {
    id: "pepes-jagung-keju",
    title: "Pepes Jagung Keju",
    price: 22000,
    img: "Img/pepesjagungkeju.png",
    desc: "Pepes jagung manis dengan taburan keju panggang",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 25,
    sauces: [],
    extras: []
  },
  "lontong-cap-gomeh":{
    id: "lontong-cap-gomeh",
    title: "Lontong Cap Gomeh",
    price: 35000,
    img: "Img/lontongcapgomeh.png",
    desc: "Lontong dengan sayur, telur, dan kuah kental rempah.",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 20,
    sauces: [],
    extras: []
  },
  "ayam-kremes-lada-hitam": {
    id: "ayam-keras-lada-hitam",
    title: "Ayam Kremes Lada Hitam",
    price: 39000,
    img: "Img/ayamkremesladahitam.png",
    desc: "Ayam kremes dengan saus lada hitam gurih",
    category: "makanan",
    isFavorite: false,
    isPromo: false,
    prepTime: 22,
    sauces: [],
    extras: []
  },

  // === MINUMAN ===
  "es-kopi-latte": {
    id: "es-kopi-latte",
    title: "Es Kopi Latte",
    price: 22000,
    img: "Img/eskopilatte.png",
    desc: "Kopi espresso dengan susu segar",
    category: "minuman",
    isFavorite: true,
    isPromo: false,
    prepTime: 3,
    toppings: [
      { name: "Boba", price: 5000 },
      { name: "Whipped Cream", price: 4000 }
    ],
    extras: [{ name: "Susu Extra", price: 3000 }]
  },
  "es-teh-lemon": {
    id: "es-teh-lemon",
    title: "Es Teh Lemon",
    price: 15000,
    img: "Img/estehlemon.png",
    desc: "Es teh manis dengan perasan jeruk lemon segar",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 2,
    toppings: [
      { name: "Nata de Coco", price: 3000 },
      { name: "Biji Chia", price: 3000 }
    ]
  },
  "jus-jeruk": {
    id: "jus-jeruk",
    title: "Jus Jeruk",
    price: 10000,
    img: "Img/jusjeruk.png",
    desc: "Perasan buah jeruk asli segar",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 3,
    toppings: [
      { name: "Selasih", price: 2000 },
      { name: "Biji Chia", price: 3000 }
    ]
  },
  "cappucino-panas": {
    id: "cappucino-panas",
    title: "Cappucino Panas",
    price: 20000,
    img: "Img/hotcappucino.png",
    desc: "Kopi espresso nikmat dengan busa susu tebal",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 4,
    toppings: [
      { name: "Cokelat Bubuk", price: 2000 },
      { name: "Caramel Drizzle", price: 3000 }
    ]
  },
  "ocean-blue-soda": {
    id: "ocean-blue-soda",
    title: "Ocean Blue Soda",
    price: 23000,
    img: "Img/oceanbluesoda.png",
    desc: "Soda biru segar dengan sirup leci",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 1,
    toppings: [
      { name: "Jelly Leci", price: 3000 },
      { name: "Nata de Coco", price: 3000 }
    ]
  },
  "jus-alpukat": {
    id: "jus-alpukat",
    title: "Jus Alpukat",
    price: 15000,
    img: "Img/jusalpukat.png",
    desc: "Jus alpukat creamy, kaya serat dan vitamin",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 3,
    toppings: [
      { name: "Cokelat Serut", price: 3000 },
      { name: "Kacang Sangrai", price: 3000 }
    ]
  },
  "es-teh-leci": {
    id: "es-teh-leci",
    title: "Es Teh Leci",
    price: 18000,
    img: "Img/estehleci.png",
    desc: "Perpaduan teh, es, dan satu buah leci utuh di atasnya. Manis, dingin, dan sangat pas untuk melepas dahaga.",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 5,
    toppings: [
      { name: "Selasih", price: 2000 },
      { name: "Jelly Leci", price: 3000 }
    ]
  },
  "jus-stroberi": {
    id: "jus-stroberi",
    title: "Jus Stroberi",
    price: 20000,
    img: "Img/jusstroberi.png",
    desc: "Stroberi segar yang diblender dengan sedikit es. Rasa manis yang pas dan alami.",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    toppings: [
      { name: "Biji Chia", price: 3000 },
      { name: "Whipped Cream", price: 4000 }
    ]
  },
  "teh-jahe-madu": {
    id: "teh-jahe-madu",
    title: "Teh Jahe Madu",
    price: 12000,
    img: "Img/tehjahemadu.png",
    desc: "Teh hangan berpadu jahe segar dan madu",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    toppings:[]
  },
  "kopi-vietnamese-iced":{
    id: "kopi-vietnamese-iced",
    title: "Kopi Vietnamese Iced",
    price: 25000,
    img: "Img/kopivietnameseiced.png",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    prepTime: 10,
    toppings: []
  },
  "smoothie-mangga":{
    id: "smoothie-mangga",
    title: "Smoothie Mangga",
    price: 28000,
    img: "Img/smoothiemangga.png",
    desc: "Smoothie mangga dengan kefir untuk rasa lebih segar",
    category: "minuman",
    isFavorite: true,
    isPromo: true,
    promo: {type: "percent", value: 20, label: "20% OFF"},
    prepTime: 15,
    toppings: []
  },
  "cokelat-olahan-tinggi":{
    id: "coklat-olahan-tinggi",
    title: "Coklat Olahan Tinggi",
    price: 22000,
    img: "Img/cokelatolahantinggi.png",
    desc: "Minuman coklat pekat dengan campuran susu panas.",
    category: "minuman",
    isFavorite: true,
    isPromo: false,
    prepTime: 10,
    toppings: []
  },
  "infused-water-buah": {
    id: "infused-water-buah",
    title: "Infused Water Buah",
    price: 9000,
    img: "Img/infusedwaterbuah.png",
    desc: "Air mineral dengan irisan lemon dan mentimun",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "teh-oolong-vanilla":{
    id: "teh-oolong-vanilla",
    title: "Teh Oolong Vanilla",
    price: 18000,
    img: "Img/tehoolongvanilla.png",
    desc: "Teh oolong dengan aroma vanilla yang lembut",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "mocktail-berry-sparkle":{
    id: "mocktail-berry-sparkle",
    title: "Mocktail Berry Sparkle",
    price: 26000,
    img: "Img/mocktailberrysparkle.png",
    desc: "Campuran berry, soda, dan sedikit jeruk nipis",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "latte-kunyit": {
    id: "latte-kunyit",
    title: "Latte Kunyit",
    price: 20000,
    img: "Img/lattekunyit.png",
    desc: "Latte berbasis susu dengan kunyit dan rempah",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "es-susu-kelapa":{
    id: "es-susu-kelapa",
    title: "Es Susu Kelapa",
    price: 21000,
    img: "Img/essusukelapa.png",
    desc: "Susu dingin dengan sirup kelapa dan es",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "teh-lavender-honey":{
    id: "teh-lavender-honey",
    title: "Teh Lavender Honey",
    price: 23000,
    img: "Img/tehlavenderhoney.png",
    desc: "Teh bunga lavender dengan madu alami",
    category: "minuman",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  // Paket
  "paket-hemat-2-orang":{
    id: "paket-hemat-2-orang",
    title: "Paket Hemat 2 Orang",
    price: 85000,
    img: "Img/pakethemat2orang.png",
    desc: "Nasi + 2 lauk + 2 minuman ukuran sedang",
    category: "paket",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "paket-hemat-4-orang": {
    id: "paket-hemat-4-orang",
    title: "Paket Hemat 4 Orang",
    price: 240000,
    img: "Img/pakethemat4orang.png",
    desc: "4 Porsi nasi + 4 lauk + 2 porsi sayur",
    category: "paket",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "paket-sarapan":{
    id: "paket-sarapan",
    title: "Paket Sarapan",
    price: 35000,
    img: "Img/paketsarapan.png",
    desc: "Nasi uduk + telur + Kopi/Teh",
    category: "paket",
    isfavorite: true,
    isPromo: false,
    toppings: [{ name: "Kopi", price: 0 },{name: "Teh", price: 0}]
  },
  "paket-vegetarian-2": {
    id: "paket-vegetarian-2",
    title: "Paket Vegetarian 2",
    price: 90000,
    img: "Img/paketvegetarian2.png",
    desc: " 2 Porsi menu sayur + 2 minuman sehat",
    category: "paket",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  // Snack
  "risol-keju-bakar":{
    id: "risol-keju-bakar",
    title: "Risol Keju Bakar",
    price: 12000,
    img: "Img/risolkejubakar.png",
    desc: "Risol isi sayur dan keju dipanggang renyah",
    category: "snack",
    isFavorite: true,
    isPromo: false,
    toppings: [{name: "Saus keju", price: 2000}, {name: "mayonaise", price: 2500},
      {name: "Saus sambal", price: 0}, {name: "Chili Oil", price: 3000}
    ]
  },
  "pastel-udang-mini":{
    id: "pastel-udang-mini",
    title: "Pastel Udang Mini",
    price: 15000,
    img: "Img/pasteludangmini.png",
    desc: "Pastel kecil isi udang dan sayur",
    category: "snack",
    isFavorite: false,
    isPromo: false,
    toppings: [{name: "Saus keju", price: 2000}, {name: "mayonaise", price: 2500},
      {name: "Saus sambal", price: 0}, {name: "Chili Oil", price: 3000}
    ]
  },
  "keripik-singkong-balado":{
    id: "kripik-singkong-balado",
    title: "Kripik Singkong Balado",
    price: 12000,
    img: "Img/keripiksingkongbalado.png",
    desc: "Kripik singkong renyah, gurih dan pedas manis yang khas",
    category: "snack",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "bola-ubi-goreng":{
    id: "bola-ubi-goreng",
    title: "Bola Ubi Goreng",
    price: 10000,
    img: "Img/bolaubigoreng.png",
    desc: "Bola ubi manis dengan taburan gula palem",
    category: "snack",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "lumpia-semarang":{
    id: "lumpia-semarang",
    title: "Lumpia Semarang",
    price: 18000,
    img: "Img/lumpiasemarang.png",
    desc: "Lumpia isi rebung dan daging cincang",
    category: "snack",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
  "nachos-keju-sambal":{
    id:"nachos-keju-sambal",
    title: "Nachos Keju Sambal",
    price: 18000,
    img: "Img/nachoskejusambal.png",
    category: "snack",
    isFavorite: false,
    isPromo: false,
    toppings: []
  },
};
