/* js/agendamento.js
   Página 5 — lista os serviços adicionados ao carrinho (localStorage),
   permite alterar quantidade, remover itens (com confirmação) e,
   ao finalizar, ESVAZIA o carrinho — é isso que zera o contador do header. */

const API_BASE_AG = 'http://127.0.0.1:8000';
function resolveImgAg(url) {
  if (!url) return 'assets/davi.jpg';
  return url.startsWith('http') ? url : `${API_BASE_AG}${url}`;
}

/* Gerenciamento do carrinho — mesmo formato usado em index.js/serviços.js/detalhes.js */
function getCart() {
  return JSON.parse(localStorage.getItem('petcare_cart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('petcare_cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const cart = getCart();
    const total = cart.reduce((sum, c) => sum + (c.qty || 1), 0);
    badge.textContent = total;
    badge.classList.toggle('visible', total > 0);
  }
}

function formatPrice(v) {
  return v != null ? `R$ ${Number(v).toFixed(2).replace('.', ',')}` : 'R$ —';
}

function calcularTotal(cart) {
  return cart.reduce((sum, c) => sum + (c.priceValue || 0) * (c.qty || 1), 0);
}

/* Sincroniza "Resumo do pedido" (Animal / Porte / Fase da vida) com os
   radios marcados em "Detalhes do Agendamento" */
const ANIMAL_LABELS = { cao: 'Cachorro', gato: 'Gato', passaro: 'Pássaro', coelho: 'Coelho', hamster: 'Hamster', tartaruga: 'Tartaruga' };
const PORTE_LABELS = { pequeno: 'Pequeno', medio: 'Médio', grande: 'Grande' };
const FASE_LABELS = { filhote: 'Filhote', adulto: 'Adulto', idoso: 'Idoso' };

function atualizarResumoPet() {
  const animal = document.querySelector('input[name="animal"]:checked');
  const porte = document.querySelector('input[name="porte"]:checked');
  const fase = document.querySelector('input[name="fase"]:checked');

  const elAnimal = document.getElementById('resumo_animal');
  const elPorte = document.getElementById('resumo_porte');
  const elFase = document.getElementById('resumo_fase');

  if (elAnimal) elAnimal.textContent = animal ? (ANIMAL_LABELS[animal.id] || animal.id) : '—';
  if (elPorte) elPorte.textContent = porte ? (PORTE_LABELS[porte.id] || porte.id) : '—';
  if (elFase) elFase.textContent = fase ? (FASE_LABELS[fase.id] || fase.id) : '—';
}

function renderAgendamento() {
  const cart = getCart();
  const container = document.getElementById('conteudo_detalhes');
  const resumo = document.getElementById('resumo_pedido');
  const totalEl = document.getElementById('total');
  const finalizarBtn = document.getElementById('finalizar_agend');

  if (cart.length === 0) {
    container.innerHTML = `<p style="padding:2rem 0;color:#939393">Nenhum serviço adicionado ainda. Volte para os serviços e adicione algo ao seu agendamento.</p>`;
    document.querySelectorAll('#resumo_pedido .item-resumo').forEach(el => el.remove());
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (finalizarBtn) finalizarBtn.disabled = true;
    return;
  }

  if (finalizarBtn) finalizarBtn.disabled = false;

  // linhas da tabela de serviços selecionados
  container.innerHTML = cart.map(item => `
    <div class="linha_agendamento" data-id="${item.id}" style="display:flex;align-items:center;gap:12px;padding:10px 0;flex-wrap:wrap">
      <div id="div_img_agendamento">
        <img src="${resolveImgAg(item.img)}" alt="${item.name}" width="50px" style="border-radius:8px;object-fit:cover">
      </div>
      <div id="p_agendamento" style="flex:1;min-width:120px">
        <p>${item.name}</p>
      </div>
      <div id="div_quant_agendamento" style="display:flex;align-items:center;gap:8px">
        <button type="button" class="btn-qty" data-action="decrease" data-id="${item.id}">-</button>
        <p>${item.qty || 1}</p>
        <button type="button" class="btn-qty" data-action="increase" data-id="${item.id}">+</button>
      </div>
      <div id="div_valor" style="display:flex;align-items:center;gap:10px">
        <p>${formatPrice((item.priceValue || 0) * (item.qty || 1))}</p>
        <img src="assets/excluir.png" height="20rem" alt="Remover" class="btn-remover" data-id="${item.id}" style="cursor:pointer">
      </div>
    </div>
  `).join('');

  // resumo do pedido (linhas de serviço, antes do total)
  document.querySelectorAll('#resumo_pedido .item-resumo').forEach(el => el.remove());
  const totalRow = resumo.querySelector('#total_escr').closest('.infos_pedido');
  cart.forEach(item => {
    const linha = document.createElement('div');
    linha.className = 'infos_pedido item-resumo';
    linha.innerHTML = `<p class="p1">${item.qty || 1}x ${item.name}</p><p class="p2">${formatPrice((item.priceValue || 0) * (item.qty || 1))}</p>`;
    resumo.insertBefore(linha, totalRow);
  });

  if (totalEl) totalEl.textContent = formatPrice(calcularTotal(cart));
}

function alterarQuantidade(id, delta) {
  let cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;

  const novaQtd = (item.qty || 1) + delta;

  if (novaQtd <= 0) {
    const confirmar = confirm(`Deseja remover "${item.name}" do agendamento?`);
    if (confirmar) {
      cart = cart.filter(c => c.id !== id);
      saveCart(cart);
      renderAgendamento();
    }
    return;
  }

  item.qty = novaQtd;
  saveCart(cart);
  renderAgendamento();
}

function removerItem(id) {
  const cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;
  const confirmar = confirm(`Deseja remover "${item.name}" do agendamento?`);
  if (confirmar) {
    saveCart(cart.filter(c => c.id !== id));
    renderAgendamento();
  }
}

function finalizarAgendamento() {
  const cart = getCart();
  if (cart.length === 0) return;

  // Aqui é o lugar ideal para futuramente enviar o pedido para o back-end
  // (ex: POST /api/agendamentos) antes de limpar o carrinho.

  alert('Agendamento confirmado! Nossa equipe entrará em contato em breve.');

  // Isso é o que ZERA o contador: esvazia o carrinho salvo no localStorage.
  localStorage.removeItem('petcare_cart');
  updateCartBadge();
  renderAgendamento();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderAgendamento();

  atualizarResumoPet();
  document.querySelectorAll('input[name="animal"], input[name="porte"], input[name="fase"]').forEach(input => {
    input.addEventListener('change', atualizarResumoPet);
  });

  document.getElementById('conteudo_detalhes').addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('.btn-qty');
    if (qtyBtn) {
      const id = Number(qtyBtn.dataset.id);
      const delta = qtyBtn.dataset.action === 'increase' ? 1 : -1;
      alterarQuantidade(id, delta);
      return;
    }
    const remBtn = e.target.closest('.btn-remover');
    if (remBtn) {
      removerItem(Number(remBtn.dataset.id));
    }
  });

  const finalizarBtn = document.getElementById('finalizar_agend');
  if (finalizarBtn) {
    finalizarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      finalizarAgendamento();
    });
  }
});