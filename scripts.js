const key = "0c5b70d73dc6ca4bd9f7307bde9157ed"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.img-nuvem').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML = 'umidade: ' + Math.floor(dados.main.humidity) + '%'
    document.querySelector('.nublado').innerHTML = dados.weather[0].description
}

async function buscarcidade(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then((resposta) => resposta.json())
    colocarNaTela(dados)
}
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        cliquei()
    }
})

function cliquei() {
    let cidade = document.querySelector('.input-cidade').value

    buscarcidade(cidade)

}