/*let nome = document.querySelector("#input-name");
let email = document.querySelector("#input-email");
let senha = document.querySelector("#input-password");
let btl = document.querySelector("#button");



if (nome.value && email.value && senha.value !== "") {
    function cadastrar(){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
            {
            name: nome.value, 
            Email: email.value, 
            password: senha.value
        }
        )
    
        localStorage.setItem('listaUser', JSON.stringify(listaUser))   
    
    }
}else{
    alert("preencha os campos");
}*/

let nome = document.querySelector("#input-name");
let email = document.querySelector("#input-email");
let senha = document.querySelector("#input-password");
let btn = document.querySelector("#button");

// Função para remover borda vermelha ao digitar
function corrigir(input) {
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            input.style.borderColor = "";
        }
    });
}

corrigir(nome);
corrigir(email);
corrigir(senha);

btn.addEventListener("click", function () {

    let valido = true;

    // Resetar cores antes de validar
    nome.style.borderColor = "";
    email.style.borderColor = "";
    senha.style.borderColor = "";

    // Validações
    if (nome.value.trim() === "") {
        nome.style.borderColor = "red";
        valido = false;
    }

    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        valido = false;
    }

    if (senha.value.trim() === "") {
        senha.style.borderColor = "red";
        valido = false;
    }

    // Só salva se tudo estiver preenchido
    let usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Dados salvos com sucesso!");
});


