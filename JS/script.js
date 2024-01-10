

//const titulo = document
//console.log(titulo);

// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  // ---------- VALIDAÇÃO USERNAME ---------- //
  let usernameInput = document.getElementById("username");
  let usernameLabel = document.querySelector('label[for="username"]');
  let usernameHelper = document.getElementById("username-helper");
  
  togglePopup(usernameInput, usernameLabel)
  
  // Validar valor do input
  usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.length < 3){
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
      estilizarInputIncorreto(usernameInput, usernameHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput, usernameHelper);
    }
  })
  
 // ---------- VALIDAÇÃO TEL ---------- //
 let telInput = document.getElementById("tel");
 let telLabel = document.querySelector('label[for="tel"]');
 let telHelper = document.getElementById("tel-helper");

 togglePopup(telInput, telLabel)

   // Validar valor do input
 telInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 10){
    // Adicionar estilos dinâmicos se o valor tiver menos de 10 caracteres
    telHelper.innerText = "Seu numero de telefone precisa ter 10 ou mais caracteres";
    estilizarInputIncorreto(telInput, telHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(telInput, telHelper);
  }
})


  // ---------- VALIDAÇÃO EMAIL ---------- //
  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  togglePopup(emailInput, emailLabel)
  
  // Validar valor do input
  emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
    }
  })

  // ---------- VALIDAÇÃO TEXTO ---------- //
  let textoInput = document.getElementById("texto");
  let textoLabel = document.querySelector('label[for="texto"]');
  let textoHelper = document.getElementById("texto-helper");
  
  togglePopup(textoInput, textoLabel)
  
  // Validar valor do input
  textoInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.length < 20){
      // Adicionar estilos dinâmicos se o valor tiver menos de 20 caracteres
      textoHelper.innerText = "Sua mensagem precisa ter 20 ou mais caracteres";
      estilizarInputIncorreto(textoInput, textoHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(textoInput, textoHelper);
    }
  })


  
/*
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const lab = document.querySelectorAll('.input-label');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
*/
