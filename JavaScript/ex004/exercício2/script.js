var x = 0;
function contador() {
    
    x++;
    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `O contador está com ${x} cliques.`
}
function zerar() {
    x = 0;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O contador está com ${x} cliques.`
}
