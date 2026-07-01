/* js/data.js 
const CATS = [
  { id:'banho', name:'Banho', icon:'sparkles', desc:'Banhos completos com produtos de qualidade para deixar seu pet limpo e cheiroso', img:'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80' },
  { id:'tosa', name:'Tosa', icon:'scissors', desc:'Tosas higiênicas e estéticas com profissionais especializados', img:'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80' },
  { id:'consulta', name:'Consulta Veterinária', icon:'stethoscope', desc:'Atendimento veterinário completo para cuidar da saúde do seu pet', img:'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80' },
  { id:'vacinacao', name:'Vacinação', icon:'syringe', desc:'Vacinas essenciais para proteger seu pet de doenças', img:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80' },
  { id:'higiene', name:'Higiene e Cuidados', icon:'heart', desc:'Serviços especiais de higiene bucal, limpeza de ouvidos e muito mais', img:'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&q=80' },
];

const SERVICES = [
  { id:'banho-completo', name:'Banho Completo', cat:'banho', short:'Banho completo com hidratação e secagem', desc:'Banho completo que inclui shampoo especial, condicionador hidratante, secagem e escovação. Utilizamos produtos de alta qualidade adequados ao tipo de pelo do seu pet.', dur:'45 minutos', prof:'Equipe de Banho e Tosa', price:'R$ 60 – R$ 120', img:'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80', popular:true, care:['Pet deve estar com vacinas em dia','Informar alergias ou sensibilidades'], benefits:['Limpeza profunda','Hidratação do pelo','Eliminação de odores','Pelagem macia e brilhante'] },
  { id:'banho-seco', name:'Banho Seco', cat:'banho', short:'Limpeza rápida sem uso de água', desc:'Opção prática para pets que não podem molhar ou em dias frios. Utiliza produtos especiais que limpam sem necessidade de água.', dur:'30 minutos', prof:'Equipe de Banho e Tosa', price:'R$ 45 – R$ 80', img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', popular:false, care:['Ideal para filhotes e pets idosos','Não substitui banho tradicional regularmente'], benefits:['Limpeza sem água','Rápido e prático','Reduz odores'] },
  { id:'banho-relaxante', name:'Banho Relaxante', cat:'banho', short:'Banho especial com aromaterapia', desc:'Banho terapêutico com produtos aromáticos e massagem relaxante, ideal para pets ansiosos ou estressados.', dur:'60 minutos', prof:'Especialistas em Bem-estar Animal', price:'R$ 90 – R$ 150', img:'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80', popular:false, care:['Informar temperamento do pet','Indicado para pets nervosos'], benefits:['Reduz ansiedade','Promove relaxamento','Aromaterapia calmante'] },
  { id:'banho-terapeutico', name:'Banho Terapêutico', cat:'banho', short:'Tratamento para problemas de pele', desc:'Banho medicinal com produtos específicos para tratamento de problemas dermatológicos.', dur:'50 minutos', prof:'Equipe Veterinária', price:'R$ 100 – R$ 180', img:'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80', popular:true, care:['Prescrição veterinária necessária','Informar tipo de problema de pele'], benefits:['Tratamento de dermatites','Alívio de coceiras','Cicatrização'] },
  { id:'banho-antiparasitas', name:'Banho Antiparasitas', cat:'banho', short:'Combate pulgas e carrapatos', desc:'Banho especial com produtos antiparasitários para eliminação e prevenção de pulgas e carrapatos.', dur:'50 minutos', prof:'Equipe de Banho e Tosa', price:'R$ 80 – R$ 140', img:'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800&q=80', popular:false, care:['Verificar tolerância do pet aos produtos','Não aplicar em pets muito jovens'], benefits:['Elimina parasitas','Proteção prolongada','Alívio imediato'] },
  { id:'tosa-higienica', name:'Tosa Higiênica', cat:'tosa', short:'Tosa em áreas específicas para higiene', desc:'Tosa focada em áreas íntimas, patas e região dos olhos para melhorar a higiene do seu pet.', dur:'30 minutos', prof:'Tosadores Especializados', price:'R$ 40 – R$ 70', img:'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=800&q=80', popular:true, care:['Pet deve estar calmo','Informar sensibilidades'], benefits:['Melhor higiene','Previne infecções','Conforto para o pet'] },
  { id:'tosa-completa', name:'Tosa Completa', cat:'tosa', short:'Corte completo do pelo', desc:'Tosa completa do corpo seguindo o padrão da raça ou preferência do tutor, incluindo acabamento e estilo.', dur:'60–90 minutos', prof:'Tosadores Especializados', price:'R$ 80 – R$ 180', img:'https://images.unsplash.com/photo-1558929996-da64ba858215?w=800&q=80', popular:true, care:['Trazer foto de referência se desejar','Informar alergias'], benefits:['Visual renovado','Controle de temperatura','Facilita higiene'] },
  { id:'tosa-bebe', name:'Tosa Bebê', cat:'tosa', short:'Estilo fofo e arredondado', desc:'Tosa que deixa o pet com aparência de filhote, com pelos mais curtos no corpo e focinho arredondado.', dur:'75 minutos', prof:'Tosadores Especializados', price:'R$ 90 – R$ 160', img:'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80', popular:false, care:['Ideal para raças de pelo médio/longo','Manutenção a cada 2 meses'], benefits:['Visual adorável','Fácil manutenção','Conforto no calor'] },
  { id:'tosa-raca', name:'Tosa Padrão Raça', cat:'tosa', short:'Seguindo padrão oficial da raça', desc:'Tosa técnica seguindo os padrões oficiais estabelecidos para cada raça, ideal para exposições.', dur:'90–120 minutos', prof:'Tosadores Certificados', price:'R$ 120 – R$ 250', img:'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=800&q=80', popular:false, care:['Agendamento com antecedência','Referências de padrão'], benefits:['Padrão oficial','Profissional certificado','Ideal para exposições'] },
  { id:'tosa-verao', name:'Tosa de Verão', cat:'tosa', short:'Corte curto para dias quentes', desc:'Tosa bem curta ideal para dias de calor, proporcionando mais conforto térmico ao pet.', dur:'45 minutos', prof:'Tosadores Especializados', price:'R$ 70 – R$ 130', img:'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80', popular:false, care:['Proteger do sol após tosa','Aplicar protetor solar se necessário'], benefits:['Reduz calor','Facilita higiene','Secagem rápida'] },
  { id:'consulta-rotina', name:'Consulta de Rotina', cat:'consulta', short:'Check-up geral de saúde', desc:'Consulta completa com exame físico geral, avaliação de saúde e orientações preventivas.', dur:'30 minutos', prof:'Dr. Carlos Mendes – CRMV 12345', price:'R$ 120 – R$ 180', img:'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80', popular:true, care:['Levar carteira de vacinação','Anotar sintomas ou comportamentos'], benefits:['Detecção precoce','Orientação preventiva','Histórico de saúde'] },
  { id:'consulta-emergencia', name:'Consulta de Emergência', cat:'consulta', short:'Atendimento urgente', desc:'Atendimento prioritário para casos urgentes e emergências veterinárias.', dur:'40 minutos', prof:'Equipe Veterinária de Plantão', price:'R$ 200 – R$ 300', img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', popular:false, care:['Ligar antes de vir','Trazer informações sobre o ocorrido'], benefits:['Atendimento rápido','Equipe preparada','Disponível 24h'] },
  { id:'consulta-dermatologica', name:'Consulta Dermatológica', cat:'consulta', short:'Especialista em pele', desc:'Consulta com veterinário especializado em dermatologia para problemas de pele e pelo.', dur:'45 minutos', prof:'Dra. Ana Silva – Dermatologista', price:'R$ 180 – R$ 250', img:'https://images.unsplash.com/photo-1530041539828-114de669390e?w=800&q=80', popular:false, care:['Não dar banho 2 dias antes','Trazer histórico médico'], benefits:['Diagnóstico especializado','Tratamento específico','Acompanhamento'] },
  { id:'consulta-idoso', name:'Consulta Geriátrica', cat:'consulta', short:'Cuidados para pets idosos', desc:'Consulta especializada para pets idosos com avaliação completa e orientações de cuidados.', dur:'50 minutos', prof:'Dr. Pedro Santos – Geriatra', price:'R$ 150 – R$ 220', img:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80', popular:true, care:['Trazer exames anteriores','Listar medicamentos em uso'], benefits:['Qualidade de vida','Prevenção de doenças','Plano personalizado'] },
  { id:'consulta-nutricional', name:'Consulta Nutricional', cat:'consulta', short:'Orientação alimentar', desc:'Avaliação nutricional completa com plano alimentar personalizado para seu pet.', dur:'40 minutos', prof:'Dra. Mariana Costa – Nutricionista', price:'R$ 130 – R$ 200', img:'https://images.unsplash.com/photo-1591768575621-5240e5f2fcc8?w=800&q=80', popular:false, care:['Trazer ração atual','Informar rotina alimentar'], benefits:['Peso ideal','Saúde melhorada','Dieta balanceada'] },
  { id:'vacina-v10', name:'Vacina V10', cat:'vacinacao', short:'Proteção contra 10 doenças', desc:'Vacina polivalente que protege contra as principais doenças caninas incluindo cinomose, parvovirose e hepatite.', dur:'15 minutos', prof:'Equipe Veterinária', price:'R$ 80 – R$ 120', img:'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=800&q=80', popular:true, care:['Pet deve estar saudável','Vermifugar antes','Reforço anual'], benefits:['Imunização completa','Proteção duradoura','Prevenção de doenças graves'] },
  { id:'vacina-antirrabica', name:'Vacina Antirrábica', cat:'vacinacao', short:'Proteção contra raiva', desc:'Vacina obrigatória por lei que protege contra a raiva, doença fatal para pets e humanos.', dur:'15 minutos', prof:'Equipe Veterinária', price:'R$ 60 – R$ 90', img:'https://images.unsplash.com/photo-1614347175024-4985d37813cc?w=800&q=80', popular:true, care:['Obrigatória por lei','Aplicar após 4 meses','Reforço anual'], benefits:['Proteção contra raiva','Exigida por lei','Segurança para todos'] },
  { id:'vacina-felina', name:'Vacina Quádrupla Felina', cat:'vacinacao', short:'Proteção para gatos', desc:'Vacina V4 que protege gatos contra rinotraqueíte, calicivirose, panleucopenia e clamidiose.', dur:'15 minutos', prof:'Equipe Veterinária', price:'R$ 90 – R$ 130', img:'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80', popular:false, care:['Vermifugar antes','Gato deve estar bem','Reforço anual'], benefits:['Proteção completa','Prevenção de doenças','Imunidade forte'] },
  { id:'vacina-giardia', name:'Vacina contra Giardíase', cat:'vacinacao', short:'Proteção contra giárdia', desc:'Vacina que previne a giardíase, doença intestinal comum em cães.', dur:'15 minutos', prof:'Equipe Veterinária', price:'R$ 70 – R$ 110', img:'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=800&q=80', popular:false, care:['Duas doses necessárias','Intervalo de 21 dias','Reforço anual'], benefits:['Previne diarreia','Proteção intestinal','Mais qualidade de vida'] },
  { id:'vacina-leishmaniose', name:'Vacina contra Leishmaniose', cat:'vacinacao', short:'Proteção contra leishmaniose', desc:'Vacina que ajuda a prevenir a leishmaniose, doença grave transmitida por mosquitos.', dur:'20 minutos', prof:'Equipe Veterinária', price:'R$ 120 – R$ 180', img:'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80', popular:false, care:['Teste prévio necessário','Três doses iniciais','Reforço anual'], benefits:['Prevenção importante','Proteção em áreas endêmicas','Saúde garantida'] },
  { id:'limpeza-dental', name:'Limpeza Dental', cat:'higiene', short:'Higiene bucal profissional', desc:'Limpeza completa dos dentes com ultrassom, remoção de tártaro e polimento dental.', dur:'60 minutos', prof:'Dra. Juliana Campos – Odontologista', price:'R$ 200 – R$ 400', img:'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?w=800&q=80', popular:true, care:['Jejum de 8 horas','Sedação necessária','Avaliação prévia'], benefits:['Remove tártaro','Previne doenças','Hálito fresco','Saúde bucal'] },
  { id:'corte-unhas', name:'Corte de Unhas', cat:'higiene', short:'Aparo seguro das unhas', desc:'Corte profissional das unhas com técnica adequada para evitar sangramentos e desconforto.', dur:'20 minutos', prof:'Equipe Especializada', price:'R$ 25 – R$ 40', img:'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80', popular:false, care:['Importante para saúde das patas','Mensal ou quinzenal'], benefits:['Conforto ao caminhar','Previne lesões','Evita arranhões'] },
  { id:'limpeza-ouvidos', name:'Limpeza de Ouvidos', cat:'higiene', short:'Higiene auricular completa', desc:'Limpeza cuidadosa dos ouvidos para prevenir otites e infecções.', dur:'25 minutos', prof:'Equipe Veterinária', price:'R$ 40 – R$ 70', img:'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80', popular:false, care:['Importante para raças de orelha caída','Mensal recomendado'], benefits:['Previne otite','Remove sujeira','Conforto auditivo'] },
  { id:'extracao-glandulas', name:'Extração de Glândulas', cat:'higiene', short:'Esvaziamento de glândulas anais', desc:'Procedimento para esvaziar as glândulas anais quando necessário, evitando desconforto e infecções.', dur:'15 minutos', prof:'Equipe Veterinária', price:'R$ 35 – R$ 60', img:'https://images.unsplash.com/photo-1598133893855-9d1d6b8d0b35?w=800&q=80', popular:false, care:['Quando pet arrasta pelo chão','Conforme necessidade'], benefits:['Alívio imediato','Previne infecções','Elimina odor'] },
  { id:'hidratacao-pelo', name:'Hidratação de Pelos', cat:'higiene', short:'Tratamento intensivo dos pelos', desc:'Tratamento profundo com máquinas hidratantes para pelos ressecados ou danificados.', dur:'45 minutos', prof:'Especialistas em Estética Pet', price:'R$ 80 – R$ 140', img:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80', popular:false, care:['Ideal após verão','Repetir mensalmente se necessário'], benefits:['Pelos macios','Brilho intenso','Nutrição profunda','Reduz queda'] },
];
*/
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

function addToCart(svcId) {
  const s = SERVICES.find(x => x.id === svcId);
  let cart = getCart();
  if (!cart.find(c => c.id === svcId)) {
    cart.push({ id: s.id, name: s.name, price: s.price, dur: s.dur });
  }
  saveCart(cart);
  showToast('Serviço adicionado!', `${s.name} está no seu agendamento`);
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