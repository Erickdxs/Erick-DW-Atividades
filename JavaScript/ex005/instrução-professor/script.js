/* Verificar se o usuário pode ou não votar. 
menores de 16 anos não vota;
Entre 16 e 18 anos voto opcional;
Maiores de 18 anos voto obrigatório;
Acima de 70 anos voto opcional; */

let idade = 18;
if( idade <16) {
    console.log('Não vota!')
} else if (idade >= 16 && idade <18 || idade>= 70) {
    console.log('voto opcional')
} else{
    console.log('Voto Obrigatório!')
}