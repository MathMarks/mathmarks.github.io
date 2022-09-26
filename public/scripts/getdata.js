

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
    //console.log(rows);
    const content = document.getElementsByClassName('content')[0];
    rows.forEach(row => {

        
        const div = document.createElement('div');
        const titulo = document.createElement('div');
        const data = document.createElement('div');
        const descr = document.createElement('div');
        const imageDiv = document.createElement('div');
        const imgEle = document.createElement('img');

        div.setAttribute('class', 'content_row');
        titulo.setAttribute('class', 'title');
        data.setAttribute('class', 'data');
        descr.setAttribute('class', 'descr');
        imageDiv.setAttribute('class', 'image');

        content.appendChild(div);

        div.appendChild(titulo);
        div.appendChild(data);
        div.appendChild(descr);
        div.appendChild(imageDiv);
        imageDiv.appendChild(imgEle);

        titulo.innerText = row.c[0].v;
        data.innerText = row.c[1].f;
        descr.innerText = row.c[2].v;
        imgEle.setAttribute('src', String(row.c[3].v));


        console.log(row.c[0].v);//title
        console.log(row.c[1].f);//data
        console.log(row.c[2].v);//title
        console.log(row.c[3].v);//title



    });
    

});
