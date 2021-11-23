window.addEventListener("DOMContentLoaded", function(){

/* Linkando variáveis ------------------------------------------*/

    var precoItem = document.getElementsByClassName("calcValues")[0];
    var freteItem = document.getElementsByClassName("calcValues")[1];
    var declarItem = document.getElementsByClassName("calcValues")[2];
    var calcValues = document.getElementsByClassName("calcValues");
    var dolarInput = document.getElementsByName("dolar")[0];
    var realInput = document.getElementsByName("real")[0];
    var dolarTurismoInput = document.getElementsByName("dolarTurismo")[0];
    var valorIOF = document.getElementById("iof");
    var totalDolar = document.getElementById("totalDolar");
    var totalReais = document.getElementById("totalReais");
    var casoTaxaTotal = document.getElementById("casoTaxaTotal");
    var taxaDecl = document.getElementById("taxaDecl");
    var taxaTotal = document.getElementById("taxaTotal");

    var dolarHoje = 0;

/* Testando links 
    console.log(precoItem.placeholder)
    console.log(freteItem.placeholder)
    console.log(declarItem.placeholder)
    console.log(calcValues[0].placeholder)
    console.log(calcValues[1].placeholder)
    console.log(calcValues[2].placeholder)
    console.log(dolarInput.placeholder)
    console.log(dolarTurismoInput.placeholder)
    console.log(realInput.placeholder)
    console.log(valorIOF.innerHTML)
    console.log(totalDolar.innerHTML)
    console.log(totalReais.innerHTML)
    console.log(casoTaxaTotal.innerHTML)
    console.log(taxaDecl.innerHTML)
    console.log(taxaTotal.innerHTML)
*/

/* recebendo e armazenando preço do dólar */

    var request = new XMLHttpRequest();

    request.open('GET', 'https://economia.awesomeapi.com.br/all/USD-BRL', true);

    request.onload = function(){

        console.log("debug")
        dados = JSON.parse(this.response);
        console.log(dados)
        dolarHoje = parseFloat(parseFloat(dados.USD.ask).toFixed(2));
        realInput.placeholder = "R$ " + String(dolarHoje);
        dolarTurismoInput.placeholder = "R$ " + String((dolarHoje + 0.20).toFixed(2)) ;

    }

    request.send();
/* iniciando conversor Real Dolar */

        dolarInput.addEventListener("change", () => {
            
           var val =  dolarInput.value;
           realInput.value = "";
           dolarTurismoInput.value = "";
           dolarInput.value = "$ " +  String(parseFloat(dolarInput.value).toFixed(2));
           realInput.placeholder = "R$ " + String((val * dolarHoje).toFixed(2));
           dolarTurismoInput.placeholder = "R$ " + String((val * (dolarHoje + 0.20)).toFixed(2));
        });

        realInput.addEventListener("change", () => {

            var val = realInput.value;
            dolarInput.value = "";
            dolarTurismoInput.value = "";
            realInput.value = "R$ " +  String(parseFloat(realInput.value).toFixed(2));
            dolarInput.placeholder = "$ " + String((val/dolarHoje).toFixed(2));
            dolarTurismoInput.placeholder = "$ " + String((val/(dolarHoje + 0.20)).toFixed(2));
        });

        dolarTurismoInput.addEventListener("change", () => {

            var val = dolarTurismoInput.value;
            dolarInput.value = "";
            realInput.value = "";
            dolarTurismoInput.value = "$ " +  String(parseFloat(dolarTurismoInput.value).toFixed(2));
            dolarInput.placeholder = "$ " + String(parseFloat(val).toFixed(2));
            realInput.placeholder = "R$ " + String((val * (dolarHoje + 0.20)).toFixed(2));

        });
/* Final conversor de moedas */

/* inicio calculadora de preço */

for(let i = 0; i < calcValues.length; i++){

    calcValues[i].addEventListener("change", () => {


        var pItem = parseFloat(parseFloat(precoItem.value).toFixed(2));
        var pFrete = parseFloat(parseFloat(freteItem.value).toFixed(2));
        var pDecl = parseFloat(parseFloat(declarItem.value).toFixed(2));
        var dolarT = parseFloat(dolarHoje + 0.2);

        valorIOF.innerHTML = "R$ " + String(((pItem * dolarT) * 0.0638).toFixed(2));
        taxaDecl.innerHTML = "R$ " + String(((pDecl * dolarT) * 0.6).toFixed(2));
        taxaTotal.innerHTML = "R$ " + String(((pItem * dolarT) * 0.6).toFixed(2));
        totalDolar.innerHTML = "$ " + String(pItem  + pFrete);
        totalReais.innerHTML = "R$ " + String((((pItem + pFrete) * dolarT) + ((pDecl * dolarT) * 0.6) + ((pItem * dolarT) * 0.0638)).toFixed(2));
        casoTaxaTotal.innerHTML = "R$ " + String((((pItem + pFrete) * dolarT) + ((pItem * dolarT) * 0.6)).toFixed(2));

    });

}

/* final calculadora de preço */

});