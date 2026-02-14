let nome = document.querySelector("#input-name");
let email = document.querySelector("#input-email");
let senha = document.querySelector("#input-password");
let btn = document.querySelector("#button");

let user = {
    id: null,
    nome: null,
    email: null,
    senha: null
}

btn.addEventListener("click", function () {

  if ( nome.value.trim() !== "" && email.value.trim() !== "" && senha.value.trim() !== "" ) {

    user.id = Math.floor(Math.random()*999)
    user.nome = nome.value.trim()
    user.email = email.value.trim()
    user.senha = senha.value.trim()

    // buscar dados existentes ou criar array vazio
    let DBCHAT = JSON.parse(localStorage.getItem("DBCHAT")) || {
        users: [],
        onLineUser: null
    };

    DBCHAT.users.push(user)

    // salvar novamente
    localStorage.setItem("DBCHAT", JSON.stringify(DBCHAT));

    alert(`Olá ${user.nome}, Conta criada com sucesso !`)

    nome.value = "";
    email.value = "";
    senha.value = "";

    window.location.href="../signIn/index.html"
    
  } else {
    nome.style.border="1px solid red";
    email.style.border = "1px solid red";
    senha.style.border = "1px solid red";
  }
});


