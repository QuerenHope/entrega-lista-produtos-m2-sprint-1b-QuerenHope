const tagUl = document.querySelector("ul")
const inputPesquisa = document.getElementById("inputPesquisa")
const precoTotal = document.querySelector("#precoTotal")


function busca() {
    tagUl.innerHTML = ""
    
    precoTotal.innerText = 0
    
    const valueInput = inputPesquisa.value 
    const valor = valueInput.toLowerCase().trim()
    const listaBusca = produtos.filter((produto)=> produto.nome.toLowerCase().includes(valor) || produto.secao.toLowerCase().includes(valor))
    
    renderizarCard(listaBusca)
}

inputPesquisa.addEventListener("keyup", (evento)=>{
    let click = evento.key
    if(click === "Enter") {
        busca()
    }
})

function criaCard(item) {
    
    const tagLi = document.createElement("li")
    const tagImg = document.createElement("img")
    const tagH3 = document.createElement("h3")
    const tagP = document.createElement("p")
    const tagSpan = document.createElement("span")

   tagUl.append(tagLi)
   tagLi.append(tagImg,tagH3,tagSpan,tagP)

   tagImg.src = item.img
   tagH3.innerText = item.nome
   tagSpan.innerText = item.secao
   tagP.innerText = `R$ ${item.preco.toFixed(2)}`
   
} 

const filtrarTodos = document.querySelectorAll(".link")
const filterHort = produtos.filter((produto)=> produto.secao === "Hortifruti")
const filterPan = produtos.filter((produto)=> produto.secao === "Panificadora")
const filterLat = produtos.filter((produto)=> produto.secao === "Laticinios")

console.log(filterHort)

const totalTodos = produtos.reduce((acc,n) => acc + n.preco,0)
const totalHort = filterHort.reduce((acc,n) => acc + n.preco,0)
const totalPanif = filterPan.reduce((acc,n) => acc + n.preco,0)
const totalLat = filterLat.reduce((acc,n) => acc + n.preco,0)


for(let i=0; i<filtrarTodos.length;i++) {
    filtrarTodos[i].addEventListener("click", filterItens)
}

function filterItens(evento) {
    tagUl.innerHTML = ""
    const busca = evento.target.innerText 

    if(busca === "Panificadora"){
       precoTotal.innerText = 0
       precoTotal.innerText = totalPanif
        return filterPan.forEach((item) => criaCard(item))
    }else if(busca === "Hortifruti"){
        precoTotal.innerText = 0
        precoTotal.innerText = totalHort
        return filterHort.forEach((item) => criaCard(item))
    }else if(busca === "Laticinios"){
        precoTotal.innerText = 0
        precoTotal.innerText = totalLat
        return filterLat.forEach((item) => criaCard(item))
    }else {
        precoTotal.innerText = 0
        precoTotal.innerText = totalTodos
        return produtos.forEach((item)=> criaCard(item))
    }

}

const buttonBuscar = document.querySelector("#buttonBuscar")
const pesquisaProdutos = document.querySelector(".campoBuscaPorNome")


function renderizarCard (array) {
    
    let soma = 0
    tagUl.innerHTML = ""
    array.forEach((item)=>{criaCard(item)
        soma+=item.preco
     } )
     precoTotal.innerText = `R$ ${soma.toFixed(2)}`
}
renderizarCard(produtos)
