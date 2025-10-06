document.addEventListener("DOMContentLoaded", () => {
  // Parent container yang kamu sebut
  const container = document.querySelector('.hx\\:flex.hx\\:flex-col.hx\\:gap-1.hx\\:max-md\\:hidden');
  if (!container) return;

  // Cari heading dengan teks "More"
  const moreHeading = Array.from(
    container.querySelectorAll('.hx\\:font-semibold, [class*="font-semibold"]')
  ).find(el => el.textContent.trim().toLowerCase() === 'more');

  if (!moreHeading) return;

  // Ambil wrapper terdekat biar satu blok ikut pindah (judul + isinya)
  const group =
    moreHeading.closest('[data-sidebar-group], .hextra-sidebar-group, .open, li, div') ||
    moreHeading;

  // Pindahkan ke paling atas
  container.insertBefore(group, container.firstChild);

  // logger
  console.log('✅ move-more.js applied');
});
