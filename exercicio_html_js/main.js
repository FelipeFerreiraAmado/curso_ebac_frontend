const form = document.getElementById("campo");
const resultadoElemento = document.getElementById("resultado");

function campo(formA,formB){
    if(formB > formA){
    return `Formulário Válido, campB (${formB}) é maior que campA (${formA})`;
    } else {
        return "Atenção o campB deve ser Maior que o campA";
    }
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const formA = parseFloat(document.getElementById("formA").value);
    const formB = parseFloat(document.getElementById("formB").value);
    const resultado = campo(formA,formB);
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado;

    if (resultado === campoB) {
        alert(`Formulário válido, Campo B (${campoB}) é maior que Campo A! (${campoA}).`);
    } else {
        alert(resultado);
    }
    
    
});