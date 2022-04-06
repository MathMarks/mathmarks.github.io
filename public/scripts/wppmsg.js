window.addEventListener("DOMContentLoaded", function(){

    console.log("Allo!! XD")
});

function realizaConvercao(){

    var numeroCel = document.getElementById("numeroTel");
    var mensagem = document.getElementById("msgText");
    var resultado = document.getElementsByClassName("resultado")[0];

    resultado.innerHTML = converter(numeroCel, mensagem);
    

}

function copyToClipboard(){

    var item = document.getElementsByClassName("resultado")[0];

    navigator.clipboard.writeText(item.innerHTML);

    alert("Link copiado com sucesso!!");

}

function converter(numero, texto){

    var prelink = "https://wa.me/55";

    var result = prelink + String(numero.value) + "?text=" + String(texto.value).replaceAll(" ","%20");

    return result;

}

function abrePagina(){

    var resultado = document.getElementsByClassName("resultado")[0];

    resultadoTexto = resultado.innerHTML;

    if(resultadoTexto === "Exemplo de resultado: wa.me/5562998765432"){

        window.alert("Nenhum link foi gerado ainda, por favor insira os dados e clique em converter.");
        
    } else {

        window.open(resultadoTexto, '_blank');

    }

}