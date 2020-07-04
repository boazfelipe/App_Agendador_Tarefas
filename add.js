

function adicionar_Tarefa(){
    var texto = document.getElementById("texto_usuario");
    var tarefas = document.getElementById("lista_geral");
    var nova_Tarefa = document.createElement("li");

    //Validando se existe tarefas para inclusão
    if(texto.value == ""){
        alert("Insira uma tarefa por favor");
        return;
    }    

    nova_Tarefa.textContent = texto.value;
    console.log(nova_Tarefa);
    tarefas.appendChild(nova_Tarefa);
    texto.value = "";
    texto.focus();
   

    //Criando ID para o elemento criado, para usa-lo na função remover
    nova_Tarefa.id = "item_Tarefa"; 

    //Adicionando classe ao item do elemento criado
    nova_Tarefa.className = "itens_Tarefa"
}