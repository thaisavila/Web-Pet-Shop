/* js/api.js
   Camada única de comunicação com o back-end FastAPI.
   Ajuste API_BASE para a URL onde o back está rodando. */

const API_BASE = 'http://127.0.0.1:8000';

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`Erro ${res.status} ao buscar ${path}`);
  }
  return res.json();
}

const api = {
  listarCategorias: () => apiGet('/api/categorias'),
  detalharCategoria: (id) => apiGet(`/api/categorias/${id}`),
  listarServicosPorCategoria: (catId) => apiGet(`/api/categorias/${catId}/servicos`),
  maisAgendados: (limit = 5) => apiGet(`/api/servicos/mais-agendados?limit=${limit}`),
  detalharServico: (id) => apiGet(`/api/servicos/${id}`),
};

/* imagem_url no banco vem como caminho relativo, ex: "/imagens/banho-tosa.jpeg" */
function resolveImg(url) {
  if (!url) return '';
  return url.startsWith('http') ? url : `${API_BASE}${url}`;
}

/* Mapeia o nome da categoria para um dos ícones já existentes em getIcon().
   Solução simples baseada em palavras-chave — se quiser um ícone exato por
   categoria, o ideal é adicionar uma coluna "icone" na tabela categorias. */
function iconForCategoria(nome = '') {
  const n = nome.toLowerCase();
  if (n.includes('banho') || n.includes('tosa')) return 'sparkles';
  if (n.includes('consulta')) return 'stethoscope';
  if (n.includes('vacin')) return 'syringe';
  if (n.includes('exame')) return 'clock';
  if (n.includes('hosped')) return 'heart';
  if (n.includes('adestr')) return 'user';
  return 'heart';
}

/* Escapa aspas simples para uso seguro dentro de atributos onclick="" */
function escAttr(str = '') {
  return String(str).replace(/'/g, "\\'");
}