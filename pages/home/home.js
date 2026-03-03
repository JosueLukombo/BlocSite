/*let tarefas= document.querySelector("#tarefas");
let btn= document.querySelector("#btn");
let lista= document.querySelector("#list")

btn.addEventListener("click", function () {

let cont=tarefas.value;
    if ( cont.trim() !== "" ) {

      
  let add = `<li style="color:red;"> ${cont}</li>`
  
  lista.innerHTML+=add;
  console.log(cont)
      
    } 
  });
  */
  let lista = document.querySelector("#list");
  let input = document.querySelector("#tarefas");
  let botao = document.querySelector("#btn");
  let userName = document.querySelector("#nome-usuario");
  
let DBCHAT = JSON.parse(localStorage.getItem("DBCHAT"));

if (!DBCHAT || !DBCHAT.onLineUser) {
    alert("Precisa fazer login!");
    window.location.href = "../signIn/index.html";
}

userName.innerText = `Olá, ${DBCHAT.onLineUser.nome}`;



if (!DBCHAT.onLineUser.tarefas) {
    DBCHAT.onLineUser.tarefas = [];
}

function mostrarTarefas() {
    lista.innerHTML = "";

    DBCHAT.onLineUser.tarefas.forEach((tarefa, index) => {

        let li = document.createElement("li");
        li.innerText = tarefa;

        // botão remover
        let btnRemover = document.createElement("button");
        btnRemover.innerText = "❌";
        btnRemover.onclick = () => {
            removerTarefa(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

botao.addEventListener("click", () => {

    if (input.value.trim() === "")
        return alert("Digite uma tarefa");

    DBCHAT.onLineUser.tarefas.push(input.value.trim());

    atualizarUsuario();
    input.value = "";
    mostrarTarefas();
});


function removerTarefa(index) {

    DBCHAT.onLineUser.tarefas.splice(index, 1);

    atualizarUsuario();
    mostrarTarefas();
}


function atualizarUsuario() {

    let indexUser = DBCHAT.users.findIndex(
        user => user.id === DBCHAT.onLineUser.id
    );

    DBCHAT.users[indexUser] = DBCHAT.onLineUser;

    localStorage.setItem("DBCHAT", JSON.stringify(DBCHAT));
}

let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
    DBCHAT.onLineUser = null;
    localStorage.setItem("DBCHAT", JSON.stringify(DBCHAT));
    window.location.href = "../signIn/index.html";
});

mostrarTarefas();