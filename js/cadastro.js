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

function erro_telefone(){
  const telefone = document.getElementById("telefone").value
  if (telefone.length !== 11){
    document.getElementById("erro_telefone").textContent = "É necessário conter exatamente 11 dígitos"
    document.getElementById("ok_telefone").textContent = ""
  } else{
    document.getElementById("ok_telefone").textContent = "Válido"
    document.getElementById("erro_telefone").textContent = ""
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

function erro_bairro(){
  const bairro = document.getElementById("bairro").value
  if (bairro.length < 6){
    document.getElementById("erro_bairro").textContent = "É necessário conter pelo menos 6 caracteres"
    document.getElementById("ok_bairro").textContent = ""
  } else{
    document.getElementById("ok_bairro").textContent = "Válido"
    document.getElementById("erro_bairro").textContent = ""
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

function erro_estado(){
  const estado = document.getElementById("estado").value
  if (estado.length < 2){
    document.getElementById("erro_estado").textContent = "É necessário conter pelo menos 2 caracteres"
    document.getElementById("ok_estado").textContent = ""
  } else{
    document.getElementById("ok_estado").textContent = "Válido"
    document.getElementById("erro_estado").textContent = ""
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


function data_nasc_pet(){
  const data_nasc_pet = document.getElementById("data_nasc_pet").value
  if (data_nasc_pet == ""){
    document.getElementById("erro_nasc_pet").textContent = "A data de nascimento não pode estar vazia"
    document.getElementById("ok_nasc_pet").textContent = ""
  } else{
    document.getElementById("erro_nasc_pet").textContent = ""
    document.getElementById("ok_nasc_pet").textContent = "Válido"
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

// Button Cadastrar
const button = getElementById("cadastrar")

function validar_cadastro() {
  erro_nome()
  erro_email()
  erro_cpf()
  erro_telefone()
  erro_endereco()
  erro_bairro()
  erro_cidade()
  erro_estado()
  erro_senha()
  erro_repetir_senha()

  nome_pet()
  data_nasc_pet()
  especie()
  raca()

  if (
    document.getElementById("erro_nome").textContent == "" &&
    document.getElementById("erro_email").textContent == "" &&
    document.getElementById("erro_cpf").textContent == "" &&
    document.getElementById("erro_telefone").textContent == "" &&
    document.getElementById("erro_endereco").textContent == "" &&
    document.getElementById("erro_bairro").textContent == "" &&
    document.getElementById("erro_cidade").textContent == "" &&
    document.getElementById("erro_estado").textContent == "" &&
    document.getElementById("erro_senha").textContent == "" &&
    document.getElementById("erro_repetir_senha").textContent == "" &&
    document.getElementById("erro_nome_pet").textContent == "" &&
    document.getElementById("erro_nasc_pet").textContent == "" &&
    document.getElementById("erro_especie").textContent == "" &&
    document.getElementById("erro_raca").textContent == ""
  ) {
    alert("Cadastro concluído com sucesso")
  } else {
    alert("Preencha os campos corretamente")
  }
}