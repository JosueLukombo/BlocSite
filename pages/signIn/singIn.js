/*let email= document.querySelector("#input-email");
let senha = document.querySelector("#input-password");
let botao = document.querySelector("#button");

/*se os elementos forem igual a vazio aparece uma informaçao para preencher
em seguida DBCHAT que é a nossa base de dados verifica se já existe alguma coisa 
se nao existe ele va criar um array vazio chamado user
botao.addEventListener("click" , ()=>{
    if(email.value.trim()=="" && senha.value.trim()=="")
        return alert("Preenche os campos")

    let DBCHAT = JSON.parse(localStorage.getItem("DBCHAT")) || {
        users: [],
        onLineUser: null,
        desc: null
    };
    
    let getUser = DBCHAT.users.find((user)=> {
        if ((user.email== email.value.trim()) & (user.senha== senha.value.trim())) {
            return user
        }
    })

    if(!getUser)
        return alert("Usuario nao encontrado!")

    DBCHAT.onLineUser = getUser
    localStorage.setItem("DBCHAT" , JSON.stringify(DBCHAT))
    alert("User find")
    let foto_perf = ``;
    window.location.href="../home/index.html"


})

*/

let email = document.querySelector("#input-email");
let senha = document.querySelector("#input-password");
let botao = document.querySelector("#button");

botao.addEventListener("click", () => {

    if (email.value.trim() === "" || senha.value.trim() === "")
        return alert("Preencha os campos");

    let DBCHAT = JSON.parse(localStorage.getItem("DBCHAT"));

    if (!DBCHAT) return alert("Nenhum usuário cadastrado!");

    let getUser = DBCHAT.users.find(user =>
        user.email === email.value.trim() &&
        user.senha === senha.value.trim()
    );

    if (!getUser)
        return alert("Usuário não encontrado!");

    // criar sessão
    DBCHAT.onLineUser = getUser;

    localStorage.setItem("DBCHAT", JSON.stringify(DBCHAT));

    window.location.href = "../home/index.html";

});
