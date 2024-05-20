/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ingredients = document.getElementById('ingredients')

console.log(ingredients)



/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const getTitlePerIndex = document.getElementsByTagName("h1")[0]
console.log(getTitlePerIndex)

const getTitleWithFor = document.getElementsByTagName("h1")

for (const item of getTitleWithFor) {
    console.log(item)
}


/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const recipe = document.getElementsByClassName('recipe')

for (const item of recipe) {
    console.log(item)
}

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const subtitles = document.getElementsByTagName('h2')

for (const item of subtitles) {
    item.style.color = "blue"
}
    

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const inputs = document.querySelectorAll('input')

for (const item of inputs) {
    item.style.borderColor = 'red' /* no css o nome desse atributo é border-color, mas quando acessamos via js ele fica em camelCase se for 2 nomes*/
}
