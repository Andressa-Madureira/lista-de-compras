const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const product = frm.inProduto.value
    const quantidade = Number(frm.inQuantidade.value)

    
    if (product === "" || isNaN(quantidade) || quantidade <= 0) {
     alert("Por favor, preencha os campos corretamente!");
     return;
 }
})