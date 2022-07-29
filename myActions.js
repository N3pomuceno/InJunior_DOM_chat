
let btn1 = document.querySelector("#button1");
btn1.addEventListener("click", function (){
    let texto = document.querySelector("#quadradoDeTexto");
    if (texto.value == ""){
        alert("Por favor adicione alguma mensagem!")
    } else {
        let mensagem = document.createElement("div");
        let container = document.getElementById("histórico");
        mensagem.innerText = texto.value;
        container.appendChild(mensagem);
        mensagem.classList.add("mensagem");
    
        //Botões
        let editar = document.createElement("button");
        let excluir = document.createElement("button");
        editar.classList.add("editar");
        excluir.classList.add("excluir");
        container.appendChild(editar);
        container.appendChild(excluir);
        editar.innerHTML = "Editar";
        excluir.innerHTML = "Excluir";
    }
})