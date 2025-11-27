// config.js
// Daftar kode meja yang valid (sesuaikan A1..A12)
window.TABLE_WHITELIST = [
  "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12"
];

// Opsi: versi read-only untuk mencegah penulisan tidak sengaja
Object.freeze(window.TABLE_WHITELIST);
