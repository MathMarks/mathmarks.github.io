

const sheetID = "1xkdn7hRifJxXMjexXxCPMBpbPrMZnwbRC7Tth8RwTS0"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?`

const endpoint1 = `${url}${sheetID}${query1}`;

console.log(endpoint1);

fetch(endpoint1)
.then(response => response.text())
.then(data => {
    //console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;
    console.log(rows);
    const content = document.getElementsByClassName('my_items')[0];
    console.log(rows['length']);
    console.log(rows[0].c[0].v);
    var count = 0;

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
            
            parent.setAttribute('class','tile is-parent is-3');
            child.setAttribute('class','tile is-child box');
            titulo.setAttribute('class', 'title');
            preco.setAttribute('class', 'subtitle');
            img.setAttribute('src', `${imageUsableURL(rows[count].c[4].v)}`);

            btnwpp.setAttribute('class', 'button is-primary is-outlined');
            btnwpp.innerText = "WhatsApp";
            btnwpp.setAttribute('href',`${String(rows[count].c[5].v)}`);
            btnwpp.setAttribute('target','_blank');

            btnweb.setAttribute('class', 'button is-link is-outlined');
            btnweb.innerText = "Comparar Preços";
            btnweb.setAttribute('href',`${String(rows[count].c[6].v)}`);
            btnweb.setAttribute('target','_blank');

            titulo.innerText = `${String(rows[count].c[0].v)}`
            preco.innerText = `${String(rows[count].c[3].f)}`


            ancestor.appendChild(parent);
            parent.appendChild(child);
            child.appendChild(img);
            child.append(titulo);
            child.append(preco);
            child.append(btnwpp);
            child.append(btnweb);

            count++;

        }

    }

});


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