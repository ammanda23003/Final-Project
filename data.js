// data.js
// Satu sumber data untuk seluruh halaman (Menu, Favorit, Cart).
// Pastikan <script src="data.js"></script> dimuat sebelum script halaman yang mengonsumsi MENU_DATA.

window.MENU_DATA = {
  // makanan (isFavorite: true untuk yang muncul di halaman Favorit)
  "nasi-goreng-spesial": {
    id: "nasi-goreng-spesial",
    title: "Nasi Goreng Spesial",
    price: 35000,
    img: "Img/Nasi Goreng Spesial.png",
    desc: "Nasi Goreng spesial dengan suwiran ayam, udang, dan telur mata sapi",
    category: "makanan",
    isFavorite: true
  },
  "mie-ayam-bakso": {
    id: "mie-ayam-bakso",
    title: "Mie Ayam Bakso",
    price: 15000,
    img: "Img/Mie Ayam Bakso.png",
    desc: "Mie ayam klasik dengan bakso sapi",
    category: "makanan",
    isFavorite: false
  },
  "ayam-bakar-madu": {
    id: "ayam-bakar-madu",
    title: "Ayam Bakar Madu",
    price: 55000,
    img: "Img/Ayam Bakar Madu.png",
    desc: "Ayam bakar bumbu madu, disajikan dengan nasi",
    category: "makanan",
    isFavorite: false
  },
  "spaghetti-bolognese": {
    id: "spaghetti-bolognese",
    title: "Spaghetti Bolognese",
    price: 25000,
    img: "Img/Spaghetti Bolognese.png",
    desc: "Pasta dengan saus daging sapi cincang",
    category: "makanan",
    isFavorite: false
  },
  "soto-betawi": {
    id: "soto-betawi",
    title: "Soto Betawi",
    price: 45000,
    img: "Img/sotobetawi.png",
    desc: "Soto khas Jakarta dengan santan dan daging sapi",
    category: "makanan",
    isFavorite: false
  },
  "cumi-goreng-tepung": {
    id: "cumi-goreng-tepung",
    title: "Cumi Goreng Tepung",
    price: 23000,
    img: "Img/cumigorengtepung.png",
    desc: "Cumi digoreng renyah, disajikan dengan saus tartar",
    category: "makanan",
    isFavorite: false
  },
  "sate-ayam": {
    id: "sate-ayam",
    title: "Sate Ayam",
    price: 20000,
    img: "Img/Sate Ayam.png",
    desc: "10 tusuk sate ayam dengan bumbu kacang yang khas",
    category: "makanan",
    isFavorite: true
  },
  "rendang": {
    id: "rendang",
    title: "Rendang",
    price: 45000,
    img: "Img/Rendang.png",
    desc: "Daging sapi empuk dengan bumbu rendang kaya rasa",
    category: "makanan",
    isFavorite: false
  },
  "gado-gado": {
    id: "gado-gado",
    title: "Gado Gado",
    price: 15000,
    img: "Img/gadogado.png",
    desc: "Salad sayur dengan saus kacang khas Indonesia",
    category: "makanan",
    isFavorite: false
  },
  "kwetiau-goreng-seafood": {
    id: "kwetiau-goreng-seafood",
    title: "Kwetiau Goreng Seafood",
    price: 35000,
    img: "Img/kwetiauseafood.png",
    desc: "Kwetiau goreng dengan udang, cumi, dan bakso ikan",
    category: "makanan",
    isFavorite: false
  },
  "beef-burger": {
    id: "beef-burger",
    title: "Beef Burger",
    price: 46000,
    img: "Img/Classic Burger.png",
    desc: "Burger daging sapi dengan tambahan keju, selada, dan tomat",
    category: "makanan",
    isFavorite: false
  },
  "sop-buntut": {
    id: "sop-buntut",
    title: "Sop Buntut",
    price: 55000,
    img: "Img/Sop Buntut.png",
    desc: "Sop buntut sapi dengan tambahan wortel dan kentang",
    category: "makanan",
    isFavorite: false
  },
  "ayam-penyet": {
    id: "ayam-penyet",
    title: "Ayam Penyet",
    price: 25000,
    img: "Img/ayampenyet.png",
    desc: "Ayam goreng penyet yang lezat dengan sambal terasi pedas",
    category: "makanan",
    isFavorite: false
  },
  "ikan-bakar-jimbaran": {
    id: "ikan-bakar-jimbaran",
    title: "Ikan Bakar Jimbaran",
    price: 55000,
    img: "Img/ikanbakarjimbaran.png",
    desc: "Ikan bakar dengan bumbu khas Bali",
    category: "makanan",
    isFavorite: false
  },
  "tomyamgoong": {
    id: "tomyamgoong",
    title: "Tom Yum Goong",
    price: 42000,
    img: "Img/tomyumgoong.png",
    desc: "Sup asam pedas khas Thailand dengan tambahan udang",
    category: "makanan",
    isFavorite: false
  },
  "beef-teriyaki": {
    id: "beef-teriyaki",
    title: "Beef Teriyaki",
    price: 25000,
    img: "Img/beefteriyaki.png",
    desc: "Irisan daging sapi dengan saus teriyaki manis",
    category: "makanan",
    isFavorite: false
  },
  "salad-sayur": {
    id: "salad-sayur",
    title: "Salad Sayur",
    price: 45000,
    img: "Img/Salad.png",
    desc: "Salad sayur segar dengan saus pilihan",
    category: "makanan",
    isFavorite: false
  },
  "pizza-pepperoni": {
    id: "pizza-pepperoni",
    title: "Pizza Pepperoni",
    price: 85000,
    img: "Img/Pizza Peperoni.png",
    desc: "Pizza klasik dengan topping pepperoni dan keju mozzarella",
    category: "makanan",
    isFavorite: false
  },
  "pancake-madu": {
    id: "pancake-madu",
    title: "Pancake Madu",
    price: 45000,
    img: "Img/pancakemadu.png",
    desc: "Pancake lembut dengan siraman madu asli dan buah berry segar",
    category: "makanan",
    isFavorite: false
  },
  "ramen-kuah-pedas": {
    id: "ramen-kuah-pedas",
    title: "Ramen Kuah Pedas",
    price: 65000,
    img: "Img/Ramen.png",
    desc: "Mi Ramen dengan kuah pedas yang menggoda",
    category: "makanan",
    isFavorite: false
  },
  "burger-klasik": {
    id: "burger-klasik",
    title: "Burger Klasik",
    price: 60000,
    img: "Img/Classic Burger.png",
    desc: "Burger daging sapi dengan tambahan selada dan keju",
    category: "makanan",
    isFavorite: false
  },
  "spaghetti-carbonara": {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    price: 45000,
    img: "Img/Spaghetti Carbonara.png",
    desc: "Pasta dengan saus carbonara creamy dan smoked beef",
    category: "makanan",
    isFavorite: false
  },
  "taco-daging-sapi": {
    id: "taco-daging-sapi",
    title: "Taco Daging Sapi",
    price: 20000,
    img: "Img/tacodagingsapi.png",
    desc: "Taco dengan isian daging sapi cincang pedas",
    category: "makanan",
    isFavorite: false
  },
  "burger-sapi-spesial": {
    id: "burger-sapi-spesial",
    title: "Burger Sapi Spesial",
    price: 35000,
    img: "Img/beefburgerspesial.png",
    desc: "Burger sapi spesial dengan patty tebal dan saus mayo lada hitam",
    category: "makanan",
    isFavorite: false
  },
  "pizza-meat-lovers": {
    id: "pizza-meat-lovers",
    title: "Pizza Meat Lovers",
    price: 85000,
    img: "Img/pizzameatlovers.png",
    desc: "Pizza dengan pepperoni, sosis, ham, dan keju mozzarella",
    category: "makanan",
    isFavorite: true
  },

  // minuman
  "es-kopi-latte": {
    id: "es-kopi-latte",
    title: "Es Kopi Latte",
    price: 22000,
    img: "Img/Es Kopi Latte.png",
    desc: "Kopi espresso dengan susu segar",
    category: "minuman",
    isFavorite: true
  },
  "es-teh-lemon": {
    id: "es-teh-lemon",
    title: "Es Teh Lemon",
    price: 15000,
    img: "Img/Es Teh Lemon.png",
    desc: "Es teh manis dengan perasan jeruk lemon segar",
    category: "minuman",
    isFavorite: false
  },
  "jus-jeruk": {
    id: "jus-jeruk",
    title: "Jus Jeruk",
    price: 10000,
    img: "Img/Jus Jeruk Segar.png",
    desc: "Perasan buah jeruk asli segar",
    category: "minuman",
    isFavorite: false
  },
  "cappucino-panas": {
    id: "cappucino-panas",
    title: "Cappucino Panas",
    price: 20000,
    img: "Img/hotcappucino.png",
    desc: "Kopi espresso nikmat dengan busa susu tebal",
    category: "minuman",
    isFavorite: false
  },
  "ocean-blue-soda": {
    id: "ocean-blue-soda",
    title: "Ocean Blue Soda",
    price: 23000,
    img: "Img/Ocean Blue Soda.png",
    desc: "Soda biru segar dengan sirup leci",
    category: "minuman",
    isFavorite: false
  },
  "jus-alpukat": {
    id: "jus-alpukat",
    title: "Jus Alpukat",
    price: 15000,
    img: "Img/jusalpukat.png",
    desc: "Jus alpukat creamy, kaya serat dan vitamin",
    category: "minuman",
    isFavorite: false
  }
};
