//let nome = "Denise"

//console.log(nome) //escopo global

//function imprimirNome(){
   // let nome ="João"
   // console.log(nome) //escopo local
//}

//imprimirNome();


// let pode mudar e const não

//const imprimeNome = (nome) => {
   // return console.log(nome)
//}

//imprimeNome("Josph")
//imprimeNome("Deh")



const externa = () => {
    let fraseGlobal = " eu sou uma funcao externa"

    function interna(){
         return console.log(fraseGlobal)
    }

    return interna

}
let functionExterna = externa()

console.log(functionExterna());