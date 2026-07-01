/* Ícones globais */
function getIcon(name, size=20, color='currentColor') {
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2"`;
  const icons = {
    sparkles: `<svg ${s}><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    scissors: `<svg ${s}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
    stethoscope: `<svg ${s}><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/><path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
    syringe: `<svg ${s}><path d="M18 2l4 4"/><path d="M17 7l-4-4"/><path d="M7 21l-4-4 9.5-9.5 4 4z"/><path d="M9.5 12.5L12 15M10 7l7 7"/></svg>`,
    heart: `<svg ${s}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
    star: `<svg ${s} fill="${color}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    arrow: `<svg ${s}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    clock: `<svg ${s}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    user: `<svg ${s}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    calendar: `<svg ${s}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    trash: `<svg ${s}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
    cart: `<svg ${s}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  };
  return icons[name] || '';
}

/* Gerenciamento básico do carrinho baseado em localStorage */
function getCart() {
  return JSON.parse(localStorage.getItem('petcare_cart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('petcare_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, nome, valorEstimado, duracaoMedia) {
  let cart = getCart();
  if (!cart.find(c => c.id === id)) {
    const price = (valorEstimado || valorEstimado === 0) ? `R$ ${Number(valorEstimado).toFixed(2)}` : '';
    cart.push({ id, name: nome, price, dur: duracaoMedia || '' });
  }
  saveCart(cart);
  showToast('Serviço adicionado!', `${nome} está no seu agendamento`);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if(badge) {
    const cart = getCart();
    badge.textContent = cart.length;
    badge.classList.toggle('visible', cart.length > 0);
  }
}

/* Toast */
let toastTimer;
function showToast(title, desc='') {
  const el = document.getElementById('toast');
  if(!el) return;
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-desc').textContent = desc;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* Inicialização comum de cabeçalho e menu */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  const hamBtn = document.getElementById('hamburger-btn');
  if(hamBtn) {
    hamBtn.addEventListener('click', () => {
      const m = document.getElementById('mobile-menu');
      const open = m.classList.toggle('open');
      document.getElementById('ham-icon').classList.toggle('hidden', open);
      document.getElementById('ham-close').classList.toggle('hidden', !open);
    });
  }
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if(header) header.classList.toggle('scrolled', window.scrollY > 10);
  });
});
function closeMobile() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('ham-icon').classList.remove('hidden');
  document.getElementById('ham-close').classList.add('hidden');
}