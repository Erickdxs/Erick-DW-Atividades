function Cadastro() {
    let pNome = document.getElementById('pNome');
    let resultado = document.getElementById('resultado');
    console.log(pNome.value);
    window.alert(`${pNome.value}, seu cadastro foi realizado com sucesso!`);
    resultado.innerHTML = `<p>Sr. ${pNome.value}, seu cadastro foi realizado com sucesso!</p>`;
    resultado.style.backgroundColor = 'red'
    return false;
}