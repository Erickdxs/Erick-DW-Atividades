/* Array - Listas */

let lista = []; /* Lista vazia */
let idade = [2, 4, 6, 8, 10]
let nomes = ['Vinicius', 'Vania', 'Volcarona', 'Lemes']

console.log(lista)
console.log(idade[4])
console.log(nomes[3])

console.log(`O tamanho da lista nomes é ${nomes.length}`)

for (var cont = 0; cont <=3; cont++) {
    console.log(`Usuário - ${nomes[cont]}`)
}

lista.unshift(51) /* Adiciona um valor no ínicio do Array */

console.log(lista)

lista.push(67) /* Adiciona um valor no final do Array */

lista.pop()/* Remove o último elemento da lista */

lista.shift() /* Remove o primeiro elemento da lista */

lista.sort() /* Classificar em ordem crescente */

lista.reverse() /* Classificar em ordem descrescente */
console.log(lista)
nomes.splice( 0, 1, 'Junior', 'Jânio')
console.log(nomes)

console.log(nomes.indexOf('Junior'))

var cadastro = [
    ['Junior',88, 90],
    ['Volcarona', 66, 25],
]
console.log(cadastro)