const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const adicionado = document.querySelector("#adicionado")

frm.addEventListener("submit", (e) => {
     e.preventDefault()
     const product = frm.inProduto.value.trim().charAt(0).toUpperCase() + frm.inProduto.value.trim().slice(1).toLowerCase();
     const quantidade = Number(frm.inQuantidade.value)
     const valor = Number(frm.inValor.value)

     const valorTotal = Number(valor * quantidade)


     if (product === "" || isNaN(quantidade) || quantidade <= 0) {
          alert("Por favor, preencha os campos corretamente!");
          return;
     }
     adicionado.innerHTML = `Produto adicionado com sucesso!`
     resp1.innerHTML += `<p>Produto: ${product} - Quantidade: ${quantidade} - Valor unitário: R$ ${valor.toFixed(2)} - Valor Total: R$ ${valorTotal.toFixed(2)} </p>`
     resp1.style.color = "red"
    
     frm.reset();
     frm.inProduto.focus(); // Foca novamente no campo de produto
})