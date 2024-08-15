//item 1
console.log("Script Carregado")

//item 2 
function CalcularAnos () {
    console.log("botao de calcular clicado")
    let popAInput=document.getElementById(popA).value.trim()
    let taxaAInput=document.getElementById(taxaA).value.trim()
    let popBInput=document.getElementById(popB).value.trim()
    let taxaBInput=document.getElementById(taxaB).value.trim()
    if(popAInput ==="" || taxaAInput ==="" || popBInput ==="" || taxaBInput ==="" ){
        alert()
    }
}
