// scripts/data.js
// Satu sumber data untuk seluruh halaman (Menu, Favorit, Promo, Cart, Checkout).
// Pastikan <script src="scripts/data.js"></script> dimuat sebelum script halaman yang mengonsumsi MENU_DATA.

window.MENU_DATA = {
  // makanan
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
    prepTime: 12
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
    prepTime: 8
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
    prepTime: 20
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
    prepTime: 14
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
    prepTime: 18
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
    prepTime: 10
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
    prepTime: 15
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
    prepTime: 30
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
    prepTime: 7
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
    prepTime: 16
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
    prepTime: 12
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
    prepTime: 25
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
    prepTime: 12
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
    prepTime: 22
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
    prepTime: 14
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
    prepTime: 12
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
    prepTime: 6
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
    prepTime: 18
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
    prepTime: 10
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
    prepTime: 20
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
    prepTime: 12
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
    prepTime: 14
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
    prepTime: 8
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
    prepTime: 14
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
    prepTime: 20
  },

  // minuman
  "es-kopi-latte": {
    id: "es-kopi-latte",
    title: "Es Kopi Latte",
    price: 22000,
    img: "Img/eskopilatte.png",
    desc: "Kopi espresso dengan susu segar",
    category: "minuman",
    isFavorite: true,
    isPromo: false,
    prepTime: 3
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
    prepTime: 2
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
    prepTime: 3
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
    prepTime: 4
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
    prepTime: 1
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
    prepTime: 3
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
    prepTime: 5
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
    prepTime: 10
  }
};
