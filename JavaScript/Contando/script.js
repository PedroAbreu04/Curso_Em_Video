function contar() {
  var inicio = document.getElementById('comeco')
  var fim = document.getElementById('final')
  var passo = document.getElementById('pulo')
  var resul = document.getElementById('resultado')

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('[Erro] Faltam dados')
    resul.innerHTML = 'Impossivel contar!'
  } else {
    resul.innerHTML = `Contando: `
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p == 0) {
      window.alert('Passo inválido! Considerando Passo = 1')
      p = 1
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        resul.innerHTML += `${c} \u{1F449}`
      }
    } else {

      for (let c = i; c >= f; c -= p) {
        resul.innerHTML += `${c} \u{1F449}`
      }
    }
    resul.innerHTML += `\u{1F3C1}`
  }
}
