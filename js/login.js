const formLogin = document.getElementById("form_login");
const emailInput = document.getElementById("email_login");
const senhaInput = document.getElementById("senha_login");
const checkboxConectado = document.getElementById("conectado");
const mensagemLogin = document.getElementById("mensagem_login");
const botaoEntrar = document.getElementById("entrar");

const API_BASE = "http://localhost:8000";

// Botão
formLogin.addEventListener("submit", async function (event) {
  // Comportamento de recarregar
  event.preventDefault();

  // Muda o botão pra entrando
  mensagemLogin.textContent = "";
  botaoEntrar.disabled = true;
  botaoEntrar.textContent = "Entrando...";

  // Monta o corpo da requisição
  const body = {
    email: emailInput.value.trim(),
    senha: senhaInput.value
  };

  try {
    // Requisição
    const response = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    // 
    const contentType = response.headers.get("content-type");
    const dados = contentType && contentType.includes("application/json")
      ? await response.json()
      : null;

    if (!response.ok) {
      alert("Email ou Senha Incorretos")
      throw new Error(dados?.detail || "Email ou senha inválidos");

    }

    if (checkboxConectado.checked) {
      localStorage.setItem("token", dados.access_token);
      localStorage.setItem("usuario", JSON.stringify(dados.usuario));
    } else {
      sessionStorage.setItem("token", dados.access_token);
      sessionStorage.setItem("usuario", JSON.stringify(dados.usuario));
    }

    mensagemLogin.textContent = `Login realizado com sucesso. Olá, ${dados.usuario.nome}!`;

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } catch (error) {
    mensagemLogin.textContent = error.message || "Erro ao fazer login";
    console.error("Erro no login:", error);
  } finally {
    botaoEntrar.disabled = false;
    botaoEntrar.textContent = "Entrar na conta";
  }
});