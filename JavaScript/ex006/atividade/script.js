function tabuada() {

    let valor = Number.parseInt (document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `<p>Tabuada de ${valor}</p>`

    for (let cont =0; cont <=10; cont++){
        resultado.innerHTML += `<p>${valor} x ${cont} = ${valor * cont}</p>`
    }
    
}