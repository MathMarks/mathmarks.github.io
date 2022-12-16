

const sheetID = "1xkdn7hRifJxXMjexXxCPMBpbPrMZnwbRC7Tth8RwTS0"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?`

const endpoint1 = `${url}${sheetID}${query1}`;
/* 
console.log(endpoint1); */

fetch(endpoint1)
.then(response => response.text())
.then(data => {
    //console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;/* 
    console.log(rows);
    
    console.log(rows['length']); */
    //console.log(rows[0].c[0].v);
    const cidadesWrap = document.getElementsByClassName('cidades')[0];
    renderProducts(rows);

    window.localStorage.setItem('PRODUTOS', JSON.stringify(rows));

    cidadesWrap.addEventListener('click', function () { 

        var localRows = JSON.parse(window.localStorage.getItem('PRODUTOS'));
        arrSelectedRows = [];
        var arrSelectedLabels = [];
        //console.log(localRows);
        for (let i = 0; i < cidadesWrap.getElementsByTagName('label').length; i++) {
            
            if(cidadesWrap.getElementsByTagName('input')[i].checked){

                arrSelectedLabels.push(String(cidadesWrap.getElementsByTagName('label')[i].innerText).trim());

            }
            
            
        }

        localRows.forEach((element,index)=> {
            console.log(arrSelectedLabels.includes(String(element.c[7].v).trim()));
            if(arrSelectedLabels.includes(String(element.c[7].v).trim())){
                //console.log(element.c[7].v, index);
                arrSelectedRows.push(element);
            }
        });

        if(arrSelectedRows.length == 0){
            renderProducts(localRows);
        } else {

            //console.log(arrSelectedRows);
            renderProducts(arrSelectedRows);
            arrSelectedRows = [];

        }

     });
        

    }

);


function imageUsableURL(url){

    if(String(url).includes("drive.google")){

        console.log("Imagem do Drive");
        const imgID = String(url).split("d/")[1].split("/")[0]; //Get the image ID
        const usableURL = `https://drive.google.com/uc?export=view&id=${imgID}`;

        return usableURL;

    } else {

        const usableURL = String(url);

        return usableURL;

    }

}

function createIconsInfo(cidade, condi, article){

    const divExterna = document.createElement('div');
    const spanWrapCid = document.createElement('span');
    const spanIconCid = document.createElement('span');
    const spanTextoCid = document.createElement('span');
    const iconCid = document.createElement('i');

    const spanWrapCond = document.createElement('span');
    const spaniconCond = document.createElement('span');
    const spanTextoCond = document.createElement('span');
    const iconCond = document.createElement('i');

    divExterna.appendChild(spanWrapCid);
    spanWrapCid.appendChild(spanIconCid);
    spanWrapCid.appendChild(spanTextoCid);
    spanIconCid.appendChild(iconCid);

    divExterna.setAttribute('class', 'level is-flex mt-5 is-justify-content-space-between');
    spanWrapCid.setAttribute('class','icon-text');
    spanIconCid.setAttribute('class', 'icon');
    iconCid.setAttribute('class','fa-sharp fa-solid fa-location-dot');
    spanTextoCid.innerText = String(cidade);

    spaniconCond.appendChild(iconCond);
    spanWrapCond.appendChild(spaniconCond);
    spanWrapCond.appendChild(spanTextoCond);
    

    divExterna.appendChild(spanWrapCond);

    spanWrapCond.setAttribute('class','icon-text');
    spaniconCond.setAttribute('class', 'icon');
    iconCond.setAttribute('class','fa-solid fa-star');
    iconCond.style.color = "gold";
    spanTextoCond.innerText = String(condi);


    article.appendChild(divExterna);

}

function renderProducts(rows){

    var count = 0;
    const content = document.getElementsByClassName('my_items')[0];
    content.innerHTML = "";


    for(let i = rows['length'] ; i > 0 ; i){

        const ancestor = document.createElement('div');
        ancestor.setAttribute('class','tile is-ancestor');
        content.appendChild(ancestor);

        for(let j = 0 ; (j < 4) && (i > 0) ; j++){
            i--;
            
            const parent = document.createElement('div');
            const child = document.createElement('article');
            const titulo = document.createElement('p');
            const preco = document.createElement('p');
            const img = document.createElement('img');
            const btnwpp = document.createElement('a');
            const btnweb = document.createElement('a');
            const btndiv = document.createElement('div');
            
            parent.setAttribute('class','tile is-parent is-3');
            child.setAttribute('class','tile is-child box');
            child.style.display = "flex";
            child.style.flexDirection = "column";
            child.style.justifyContent = "space-between";
            titulo.setAttribute('class', 'title has-text-centered is-centered');
            titulo.style.marginTop = "auto";
            preco.setAttribute('class', 'subtitle mt-1 has-text-centered is-centered');
            img.setAttribute('src', `${imageUsableURL(rows[count].c[4].v)}`);

            btnwpp.setAttribute('class', 'button is-primary is-outlined is-fullwidth');
            btnwpp.innerText = "WhatsApp";
            btnwpp.setAttribute('href',`${String(rows[count].c[5].v)}`);
            btnwpp.setAttribute('target','_blank');
            btnwpp.style.marginRight = "15px";
            btnwpp.style.marginBottom = "5px";

            btnweb.setAttribute('class', 'button is-link is-outlined is-fullwidth');
            btnweb.innerText = "Comparar Preços";
            btnweb.setAttribute('href',`${String(rows[count].c[6].v)}`);
            btnweb.setAttribute('target','_blank');

            titulo.innerText = `${String(rows[count].c[0].v)}`;
            preco.innerText = `${String(rows[count].c[3].f)}`;



            ancestor.appendChild(parent);
            parent.appendChild(child);
            child.appendChild(img);
            child.appendChild(titulo);
            child.appendChild(preco);
            child.appendChild(btndiv);
            btndiv.appendChild(btnwpp);
            btndiv.appendChild(btnweb);

            createIconsInfo(String(rows[count].c[7].v), String(rows[count].c[2].v), child);

            count++;

        }

    }

}