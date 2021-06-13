document.addEventListener('DOMContentLoaded', function(){
//Só começa o script após toda a página carregada. 

    console.log("Script Conectado!");

    fetch('../data/json/projetos.json').then(function( res){

        return res.json();

    }).then(function(data){

        appendProjeto(data);
        console.log(data["projetos"][0]);
        console.log("Yo!")

    }).catch(function(err){

        console.log(err)

    });


}, false);

function appendProjeto(data){

    var dados = data["projetos"];

    var main = document.getElementsByClassName("main")[0];
    

    for(let i = 0 ; i < dados.length; i++){

        var projeto = document.createElement("a");
        var imgElement = document.createElement("img");
        var divTitulo = document.createElement("div");
        var divDesc = document.createElement("div");

        projeto.setAttribute("class","item");
        projeto.setAttribute("href","#");
        imgElement.setAttribute("src","");
        divTitulo.setAttribute("class", "titulo");
        divDesc.setAttribute("class", "desc");

        divTitulo.innerHTML = dados[i]["titulo"];
        divDesc.innerHTML = dados[i]["desc"];

        projeto.appendChild(imgElement);
        projeto.appendChild(divTitulo);
        projeto.appendChild(divDesc);

        main.appendChild(projeto);

    console.log("Nome: " + dados[i]["titulo"] + "   Descrição: " + dados[i]["desc"]);

    }

}