function convertir() {
    var valore = parseInt(document.getElementById ("valor").value);
    var resultado = 0;
    var dolar = 145;
    var euro = 200
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El tipo de cambio oficial a Dolar es: $" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El tipo de cambio oficial a Euro es: $" + resultado.toFixed(2));
    }
    else{
        alert("Debe completar todos los datos")
    }
}