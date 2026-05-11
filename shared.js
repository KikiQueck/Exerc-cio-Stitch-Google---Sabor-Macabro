// Shared navigation builder for Sabor Macabro - root index page
(function () {
  const links = [
    { label: 'Início', href: './index.html', active: true },
    { label: 'Loja', href: './loja/index.html', active: false },
    { label: 'Receitas', href: './receitas/index.html', active: false },
    { label: 'Sobre & Contato', href: './sobre/index.html', active: false },
  ];

  const navEl = document.getElementById('nav-links');
  if (navEl) {
    navEl.innerHTML = links.map(l =>
      `<a href="${l.href}" class="nav-link ${l.active ? 'nav-active' : ''}">${l.label}</a>`
    ).join('');
  }

  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    menu.innerHTML = links.map(l =>
      `<a href="${l.href}" class="block py-3 px-6 text-on-surface-variant hover:text-primary transition-colors" style="font-size:20px;font-family:'Syne',sans-serif;font-weight:600;">${l.label}</a>`
    ).join('');
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
})();
