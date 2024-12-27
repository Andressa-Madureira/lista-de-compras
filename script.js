const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const adicionado = document.querySelector("#adicionado")

     let totalProdutos = 0;
     let totalValor = 0;


frm.addEventListener("submit", (e) => {


     e.preventDefault()
     const product = frm.inProduto.value.trim().charAt(0).toUpperCase() + frm.inProduto.value.trim().slice(1).toLowerCase();
     const quantidade = Number(frm.inQuantidade.value.trim())
     const valor = Number(frm.inValor.value.trim())


     if (product === "" || isNaN(quantidade) || quantidade <= 0) {
          alert("Por favor, preencha os campos corretamente!");
          return;
     }


     const produtoFormatado = product.charAt(0).toUpperCase() + product.slice(1).toLowerCase();
    const valorTotal = valor * quantidade;

   
    totalProdutos += quantidade;
    totalValor += valorTotal;


     adicionado.innerHTML = `O produto "${product}" foi adicionado com sucesso!`;
     const item = document.createElement("p"); // Cria um elemento parágrafo
     item.innerHTML = `Produto: ${product} - Quantidade: ${quantidade} - Valor unitário: R$ ${valor.toFixed(2)} - Valor Total: R$ ${valorTotal.toFixed(2)}`;
 
     
     const btnExcluir = document.createElement("button"); // cria o botao para excluir o produto
     btnExcluir.textContent = "Excluir";
     btnExcluir.style.marginLeft = "10px";
     btnExcluir.style.color = "white";
     btnExcluir.style.backgroundColor = "red";
     btnExcluir.style.border = "none";
     btnExcluir.style.cursor = "pointer";
 

     item.appendChild(btnExcluir);
 
   
     resp1.appendChild(item);
 
     
     btnExcluir.addEventListener("click", () => { //remove o item criado
         resp1.removeChild(item); // Remove o item 
         totalProdutos -= quantidade; // Subtrai a quantidade removida
         totalValor -= valorTotal; // Subtrai o valor total do produto removido
     
     });
 
     // Atualizar o total acumulado
     resp2.innerHTML = `<p>Total de produtos: ${totalProdutos}</p><p>Valor total acumulado: R$ ${totalValor.toFixed(2)}</p>`;
 
     frm.reset();
     frm.inProduto.focus();
 });
