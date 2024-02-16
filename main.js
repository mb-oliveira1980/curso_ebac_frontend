const form = document.getElementById('form')
form.addEventListener('submit', function(evento){evento.preventDefault()})


let botao = document.getElementById('btn')



function mostraValores(){
    let resultado = document.getElementById('result')
    let valorA = document.getElementById('valorA')
    let valorB = document.getElementById('valorB')
    valorA = parseInt(valorA.value)
    valorB = parseInt(valorB.value)
    if (valorA > valorB){
        resultado.innerText = "O valor do campo A é maior que o valor do campo B."
        resultado.innerText += "\nPortanto o formulário NÃO é válido."
    } else {
        resultado.innerText = "O valor do campo B é maior que o valor do campo A."
        resultado.innerText += "\nPortanto o formulário é válido."
    }

    //resultado.innerText = `Os valores digitados são ${valorA.value} e ${valorB.value}`
}

botao.addEventListener('click', mostraValores)


