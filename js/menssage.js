const evento = document.getElementById("send")
const enviarForm = () => {
    let nombre = document.getElementById("nombre-d").value
    let mensaje = document.getElementById("article-d").value
    let numero = 573242053079
    var win = window.open(`https://wa.me/${numero}?text=hi, my name is ${nombre}, and i want to donate : ${mensaje} `)
}

evento.addEventListener("click", enviarForm)