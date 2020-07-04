function remover_Tarefa(){

    
   var item = document.getElementById("item_Tarefa");

   //Validando se existe tarefas para exclusão 
   if (document.getElementsByClassName("itens_Tarefa").length == 0) {
    return alert("Não existem mais tarefas");
  
}


    
   item.remove();
   console.log(item);

    
      
 }

