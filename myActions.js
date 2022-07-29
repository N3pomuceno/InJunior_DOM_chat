
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

        //Função de botões
        editar.addEventListener("click", () => {
            //Edição de mensagem
            //Comando para pegar o que está dentro da mensagem.

            //Comando para guardar informação do que está escrito no text box

            //Comando para tacar o texto da mensagem no textbox

            //Comando para alterar o 'enviar' do botão para 'editar'

            //Fazer o processo de volta: pegar o que estava guardado e colocar de volta no textbox
            //
        })
        excluir.addEventListener("click", () => {
            excluir.remove();
            editar.remove();
            mensagem.remove();
        })
    }
})