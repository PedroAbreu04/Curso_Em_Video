function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var tempo = window.document.getElementById("tempo")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = 'Agora são ' + hora + ' horas'
    if(hora >= 0 && hora< 12){
        
        img.src = "./img/manha.png"
        document.body.style.background = "#acaba7"
        tempo.innerHTML = 'Está de Manhã'

    } else if (hora >= 12 && hora < 18){

        img.src = "./img/tarde.png"
        document.body.style.background = "#98be97"
        tempo.innerHTML = "Está de Tarde"

    }else {

        img.src = "./img/noite.png"
        document.body.style.background = "#578785"
        tempo.innerHTML = "Está de Noíte"

    }
}