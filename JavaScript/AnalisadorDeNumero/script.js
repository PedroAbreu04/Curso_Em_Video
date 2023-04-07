let num = document.getElementById('num')
let tab = document.getElementById('tabela')
res = document.getElementById('resultado')
let array = []


function add(){
  let n = Number(num.value)
  res.innerHTML = ""

  if(num.value.length == 0){
    alert('Adicione um número')
  }
  else if(n == 0){
    alert('Adicione um número maior que 0')
  }
  else if(n > 100){
    alert('Adicione um número menor que 100')
  }
  else if(array.indexOf(n) == -1){
    array.push(n)
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    tab.appendChild(item)
  }
  else{
    alert('Valor já adicionado')
  }
  num.value = ''
  num.focus()
}

function final(){

  if(array.length == 0){
    alert('Adicione um número')
    num.focus()
  }else{


  let maior = array[0]
  let menor = array[0]
  let soma = 0
  let divi = 0

  for(let i in array){

    soma += array[i]

    if(maior < array[i]){
      maior = array[i]
}
else if(menor > array[i]){
  menor = array[i]
}
}
  divi = soma/array.length

  res.innerHTML = `Ao todo, temos ${array.length} números cadastrados </br>`
  res.innerHTML += `O maior valor informado é o: ${maior} </br>`
  res.innerHTML += `O menor valor informado é o: ${menor} </br>`
  res.innerHTML += `Somando todos os valores temos: ${soma} </br>`
  res.innerHTML += `A média dos valores são ${divi} </br>`

}}