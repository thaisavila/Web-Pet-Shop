// Erros do Tutor
function erro_nome() {
  const nome_dono = document.getElementById("nome_dono").value 
  if (nome_dono.length < 8){
    document.getElementById("erro_nome").textContent = "É necessário pelo menos 8 caracteres";
    document.getElementById("ok_nome").textContent = ""
  } else{
    document.getElementById("erro_nome").textContent = "";
    document.getElementById("ok_nome").textContent = "Válido"
  }
}

function erro_email(){
  const email = document.getElementById("email").value
  if (!email.includes("@")){
    document.getElementById("erro_email").textContent = "É necessário conter um '@'"
    document.getElementById("ok_email").textContent = ""
  } else{
    document.getElementById("erro_email").textContent = ""
    document.getElementById("ok_email").textContent = "Válido"
  }
}

function erro_cpf(){
  const cpf = document.getElementById("cpf").value
  if (cpf.length !== 11){
    document.getElementById("erro_cpf").textContent = "É necessário conter exatamente 11 dígitos"
    document.getElementById("ok_cpf").textContent = ""
  } else{
    document.getElementById("ok_cpf").textContent = "Válido"
    document.getElementById("erro_cpf").textContent = ""
  }
}

function erro_endereco(){
  const endereco = document.getElementById("endereco").value
  if (endereco.length < 12){
    document.getElementById("erro_endereco").textContent = "É necessário conter pelo menos 12 caracteres"
    document.getElementById("ok_endereco").textContent = ""
  } else{
    document.getElementById("ok_endereco").textContent = "Válido"
    document.getElementById("erro_endereco").textContent = ""
  }
}

function erro_cidade(){
  const cidade = document.getElementById("cidade").value
  if (cidade.length < 5){
    document.getElementById("erro_cidade").textContent = "É necessário conter pelo menos 5 caracteres"
    document.getElementById("ok_cidade").textContent = ""
  } else{
    document.getElementById("ok_cidade").textContent = "Válido"
    document.getElementById("erro_cidade").textContent = ""
  }
}


function erro_senha(){
  const senha_1 = document.getElementById("senha_1").value
  if (senha_1.length < 8){
    document.getElementById("erro_senha").textContent = "É necessário conter pelo menos 8 caracteres"
    document.getElementById("ok_senha").textContent = ""
  } else{
    document.getElementById("ok_senha").textContent = "Válido"
    document.getElementById("erro_senha").textContent = ""
  }
}

function erro_repetir_senha(){
  const senha_1 = document.getElementById("senha_1").value
  const senha = document.getElementById("senha").value
  if (senha !== senha_1){
    document.getElementById("erro_repetir_senha").textContent = "As senhas precisam ser iguais"
    document.getElementById("ok_repetir_senha").textContent = ""
  } else{
    document.getElementById("ok_repetir_senha").textContent = "Válido"
    document.getElementById("erro_repetir_senha").textContent = ""
  }
}

// Erros do Pet
function nome_pet(){
  const nome_pet = document.getElementById("nome_pet").value
  if (nome_pet == ""){
    document.getElementById("erro_nome_pet").textContent = "Esse campo não pode estar vazio"
    document.getElementById("ok_nome_pet").textContent = ""
  } else{
    document.getElementById("erro_nome_pet").textContent = ""
    document.getElementById("ok_nome_pet").textContent = "Válido"
  } 
  }

function especie(){
  const especie = document.getElementById("especie").value
  if (especie == "cachorro" || especie == "gato" || especie == "tartaruga" || especie == "hamster" || especie == "pássaro" || especie == "coelho"){
    document.getElementById("erro_especie").textContent = ""
    document.getElementById("ok_especie").textContent = "Válido"
  } else{
    document.getElementById("erro_especie").textContent = "Espécies disponívies: Cachorro, Gato, Tartaruga, Hamster, Pássaro e Coelho"
    document.getElementById("ok_especie").textContent = ""
  } 
}

function raca(){
  const raca = document.getElementById("raca").value
  if (raca.length<4){
    document.getElementById("erro_raca").textContent = "É necessário pelo menos 4 caracteres"
    document.getElementById("ok_raca").textContent = ""
  } else{
    document.getElementById("erro_raca").textContent = ""
    document.getElementById("ok_raca").textContent = "Válido"
  }
}

function idade_pet() {
  const idade_pet = document.getElementById("idade_pet").value.trim();

  if (Number(idade_pet) <= 0) {
    document.getElementById("erro_idade_pet").textContent = "Digite uma idade válida";
    document.getElementById("ok_idade_pet").textContent = "";
    return false;
  } else {
    document.getElementById("erro_idade_pet").textContent = "";
    document.getElementById("ok_idade_pet").textContent = "Válido";
    return true;
  }
}
  
function peso_pet() {
  const peso_pet = document.getElementById("peso_pet").value;

  if (Number(peso_pet) <= 0) {
    document.getElementById("erro_peso_pet").textContent = "Digite um peso maior que 0";
    document.getElementById("ok_peso_pet").textContent = "";
  } else {
    document.getElementById("erro_peso_pet").textContent = "";
    document.getElementById("ok_peso_pet").textContent = "Válido";
  }
}

function erro_telefone() {
  const telefone = document.getElementById("telefone").value;

  if (telefone.length < 10 || telefone.length > 12 ) {
    document.getElementById("erro_telefone").textContent = "Digite um telefone com 12 digítos(DDD + Número)";
    document.getElementById("ok_telefone").textContent = "";
    return false;
  } else {
    document.getElementById("erro_telefone").textContent = "";
    document.getElementById("ok_telefone").textContent = "Válido";
    return true;
  }
}



// Button Cadastrar
const button = document.getElementById("cadastrar")

function validar_cadastro() {
  erro_nome()
  erro_email()
  erro_cpf()
  erro_endereco()
  erro_cidade()
  erro_senha()
  erro_repetir_senha()
  nome_pet()
  especie()
  raca()
  idade_pet()
  peso_pet()
  erro_telefone()

  if (
    document.getElementById("erro_nome").textContent == "" &&
    document.getElementById("erro_email").textContent == "" &&
    document.getElementById("erro_cpf").textContent == "" &&
    document.getElementById("erro_endereco").textContent == "" &&
    document.getElementById("erro_cidade").textContent == "" &&
    document.getElementById("erro_senha").textContent == "" &&
    document.getElementById("erro_repetir_senha").textContent == "" &&
    document.getElementById("erro_nome_pet").textContent == "" &&
    document.getElementById("erro_especie").textContent == "" &&
    document.getElementById("erro_raca").textContent == "" &&
    document.getElementById("erro_idade_pet").textContent == "" &&
    document.getElementById("erro_peso_pet").textContent == "" &&
    document.getElementById("erro_telefone").textContent == "" 

  ) {
    alert("Cadastro concluído com sucesso")
  } else {
    alert("Preencha os campos corretamente")
  }
}


const form = document.getElementById("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  validar_cadastro();

  const temErro =
    document.getElementById("erro_nome").textContent !== "" ||
    document.getElementById("erro_email").textContent !== "" ||
    document.getElementById("erro_cpf").textContent !== "" ||
    document.getElementById("erro_endereco").textContent !== "" ||
    document.getElementById("erro_cidade").textContent !== "" ||
    document.getElementById("erro_senha").textContent !== "" ||
    document.getElementById("erro_repetir_senha").textContent !== "" ||
    document.getElementById("erro_nome_pet").textContent !== "" ||
    document.getElementById("erro_especie").textContent !== "" ||
    document.getElementById("erro_raca").textContent !== "" ||
    document.getElementById("erro_idade_pet").textContent !== "" ||
    document.getElementById("erro_peso_pet").textContent !== "" ||
    document.getElementById("erro_telefone").textContent !== "";

  if (temErro) {
    return;
  }

  const dadosTutor = {
    nome: document.getElementById("nome_dono").value.trim(),
    cpf: document.getElementById("cpf").value.trim(),
    email: document.getElementById("email").value.trim(),
    endereco: document.getElementById("endereco").value.trim(),
    cidade: document.getElementById("cidade").value.trim(),
    senha: document.getElementById("senha_1").value
  };

  const dadosPet = {
    nome: document.getElementById("nome_pet").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    especie: document.getElementById("especie").value.trim(),
    raca: document.getElementById("raca").value.trim(),
    idade: Number(document.getElementById("idade_pet").value),
    peso: Number(document.getElementById("peso_pet").value)
  };

  try {
    const responseTutor = await fetch("http://127.0.0.1:8000/api/auth/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosTutor)
    });

    const dataTutor = await responseTutor.json();

    if (!responseTutor.ok) {
      alert(dataTutor.detail || "Erro ao cadastrar tutor.");
      return;
    }

    const token = dataTutor.access_token;

    const responsePet = await fetch("http://127.0.0.1:8000/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dadosPet)
    });

    const dataPet = await responsePet.json();

    if (!responsePet.ok) {
      alert(dataPet.detail || "Tutor cadastrado, mas houve erro ao cadastrar o pet.");
      return;
    }

    alert("Cadastro concluído com sucesso!");
    window.location.href = "login.html";

  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Não foi possível conectar ao servidor.");
  }
});