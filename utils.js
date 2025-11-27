// utils.js
(function(window){
  'use strict';

  const TWO_HOURS = 2 * 60 * 60 * 1000;
  const WHITELIST = Array.isArray(window.TABLE_WHITELIST) ? window.TABLE_WHITELIST.map(s => String(s).toUpperCase()) : [];

  /* Normalisasi kode meja */
  function normalizeCode(code){
    return String(code || '').trim().toUpperCase();
  }

  /* Cek format dasar (opsional) */
  function isValidFormat(code){
    // Contoh: huruf diikuti 1-2 angka, seperti A1 atau B12
    return /^[A-Z]\d{1,2}$/.test(normalizeCode(code));
  }

  /* Cek apakah kode termasuk whitelist */
  function isAllowedTable(code){
    const c = normalizeCode(code);
    if (!c) return false;
    if (WHITELIST.length === 0) return true; // fallback: jika whitelist kosong, izinkan semua
    return WHITELIST.includes(c);
  }

  /* Penyimpanan ke localStorage */
  function saveTableCode(code){
    const c = normalizeCode(code);
    localStorage.setItem('table_code', c);
    localStorage.setItem('table_code_time', String(Date.now()));
  }

  function clearTableCode(){
    localStorage.removeItem('table_code');
    localStorage.removeItem('table_code_time');
  }

  function getTableCode(){
    return localStorage.getItem('table_code') || '';
  }

  function getTableTime(){
    return Number(localStorage.getItem('table_code_time') || 0);
  }

  function isCodeValid(){
    const code = getTableCode();
    const t = getTableTime();
    if (!code || !t) return false;
    return (Date.now() - t) <= TWO_HOURS;
  }

  function remainingMs(){
    const t = getTableTime();
    if (!t) return 0;
    return Math.max(0, TWO_HOURS - (Date.now() - t));
  }

  /* UI helpers (ringkas, dapat disesuaikan) */
  function showTableError(message){
    const el = document.getElementById('table-expired-msg') || document.querySelector('.table-error');
    if (el){
      el.textContent = message;
      el.classList.remove('hidden');
      el.classList.add('text-red-600');
    } else {
      // fallback: alert
      console.warn('Table error:', message);
    }
  }

  function clearTableError(){
    const el = document.getElementById('table-expired-msg') || document.querySelector('.table-error');
    if (el){
      el.textContent = '';
      el.classList.add('hidden');
    }
  }

  /* Fungsi untuk mengikat behavior tombol "Mulai" (start-order) */
  function attachTableStartHandler(opts){
    // opts: { startBtnId, inputId, onSuccess (fn), onFail (fn) }
    const startBtn = document.getElementById(opts.startBtnId || 'start-order');
    const input = document.getElementById(opts.inputId || 'manual-table');

    if (!startBtn || !input) return;

    startBtn.addEventListener('click', () => {
      const code = input.value || '';
      // cek format dulu (opsional)
      if (!isValidFormat(code)){
        showTableError('Format kode meja tidak valid. Contoh: A1 atau A12.');
        if (typeof opts.onFail === 'function') opts.onFail('format');
        return;
      }
      if (!isAllowedTable(code)){
        showTableError('Kode meja tidak terdaftar. Periksa kode di meja Anda.');
        if (typeof opts.onFail === 'function') opts.onFail('not_allowed');
        return;
      }
      // valid
      saveTableCode(code);
      clearTableError();
      if (typeof opts.onSuccess === 'function') opts.onSuccess(code);
    });
  }

  /* Fungsi untuk attach reset handler */
  function attachTableResetHandler(resetBtnId, onReset){
    const btn = document.getElementById(resetBtnId || 'table-clear');
    if (!btn) return;
    btn.addEventListener('click', () => {
      clearTableCode();
      clearTableError();
      if (typeof onReset === 'function') onReset();
      // trigger storage event for other tabs
      try { localStorage.setItem('table_code_cleared_at', String(Date.now())); } catch(e){}
    });
  }

  /* Auto-expire checker (interval) */
  function startAutoExpire(onExpire, intervalMs = 30000){
    setInterval(() => {
      if (!isCodeValid()){
        // jika sebelumnya ada kode tapi sekarang expired, panggil onExpire
        if (getTableCode() || getTableTime()){
          clearTableCode();
          if (typeof onExpire === 'function') onExpire();
        }
      }
    }, intervalMs);
  }

  /* Expose API ke window.utilsTable */
  window.utilsTable = {
    normalizeCode,
    isValidFormat,
    isAllowedTable,
    saveTableCode,
    clearTableCode,
    getTableCode,
    getTableTime,
    isCodeValid,
    remainingMs,
    showTableError,
    clearTableError,
    attachTableStartHandler,
    attachTableResetHandler,
    startAutoExpire
  };

})(window);
