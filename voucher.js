// voucher.js
// Pool voucher global: 600 kode dengan persen diskon dan kuota harian.
// Stabil, deterministik, dan mudah diperluas.

// Konfigurasi jumlah voucher
const TOTAL_VOUCHERS = 600;

// Persentase yang digunakan (akan diulang melingkar)
const PERCENT_POOL = [
  5, 10, 12, 15, 20, 22, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75
];

// Penentuan prefix berdasarkan tier diskon
function prefixByPercent(pct) {
  if (pct >= 50) return 'BIG';
  if (pct >= 20) return 'MID';
  return 'SM';
}

// Penentuan dailyLimit berdasarkan percent (sesuaikan kebijakan di sini)
// Contoh kebijakan: <20% → 10; 20–34% → 8; 35–49% → 6; ≥50% → 5
function dailyLimitByPercent(pct) {
  if (pct < 20) return 10;
  if (pct < 35) return 8;
  if (pct < 50) return 6;
  return 5;
}

// Helper: konversi ke base36 uppercase (deterministik)
function toBase36(n) {
  return Math.max(1, Math.floor(n)).toString(36).toUpperCase();
}

// Bangun kode unik deterministik: PREFIX + index padded + "-" + suffix base36
function buildCode(prefix, idx) {
  const left = String(idx).padStart(4, '0');
  // Suffix deterministik dari kombinasi index (agar terlihat acak tapi stabil)
  const suffix = (toBase36(idx * 97) + toBase36(idx * 123 + 7)).slice(-6);
  return `${prefix}${left}-${suffix}`;
}

// Bangun pool voucher
(function buildVoucherPool() {
  const pool = [];
  for (let i = 1; i <= TOTAL_VOUCHERS; i++) {
    const percent = PERCENT_POOL[(i - 1) % PERCENT_POOL.length];
    const prefix = prefixByPercent(percent);
    const code = buildCode(prefix, i);
    const dailyLimit = dailyLimitByPercent(percent);

    pool.push({
      code,          // contoh: BIG0001-AB12CD
      percent,       // contoh: 15
      dailyLimit     // contoh: 10 (sesuai kebijakan di atas)
    });
  }

  // Ekspos ke window
  window.VOUCHER_POOL = pool;
})();
