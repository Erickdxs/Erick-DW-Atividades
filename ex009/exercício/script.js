function somar() {
    let valor1 = Number.parseInt (document.getElementById('somar1').value);
    let valor2 = Number.parseInt (document.getElementById('somar2').value);
    let resultado = document.getElementById('result')
    resultado.innerHTML = `A soma entre ${valor1} e ${valor2} é igual a ${valor1 + valor2}.`;
    somar1 = ''
    somar2 = ''
}
function subtrair() {
    let subtrair1 = Number.parseInt (document.getElementById('subtrair1').value);
    let subtrair2 = Number.parseInt (document.getElementById('subtrair2').value);
    let resultado2 = document.getElementById('result2')
    result2.innerHTML = ` A soma entre ${subtrair1} e ${subtrair2} é igual a ${subtrair1 - subtrair2}.`;
}