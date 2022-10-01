
const sheetID = "1xkdn7hRifJxXMjexXxCPMBpbPrMZnwbRC7Tth8RwTS0"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?gid=761782944`

const endpoint1 = `${url}${sheetID}${query1}`;

console.log(endpoint1);

fetch(endpoint1)
.then(response => response.text())
.then(data => {

    console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;
    console.log(rows);

    rows.forEach(row => {
        
        console.log(row.c[1].v);

        var classePontuacao = 0;

        if(parseInt(row.c[7].f)<= 2){

            classePontuacao = 'progress is-danger';

        } else if(parseInt(row.c[7].f)<= 4){

            classePontuacao = 'progress is-warning';

        } else if(parseInt(row.c[7].f)<= 6){

            classePontuacao = 'progress is-info';

        } else if(parseInt(row.c[7].f)<= 8){

            classePontuacao = 'progress is-link';

        } else {

            classePontuacao = 'progress is-success';

        }

       

        $('#mainColumnWraper').append(`
        <div class="column is-3 has-text-centered is-centered">
        <div class="card">
            <div class="card-image">
                <figure class="image">
                    <img src="${row.c[2].v}" alt="">
                </figure>
            </div>
            <div class="card-content">
                <div class="midea">
                    <div class="midea-content">
                        <p class="title is-4">${row.c[1].v}</p>
                        <p class="subtile is-6">${row.c[9].v}</p>
                    </div>
                </div>
            </div>
            <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Minha Opinião</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                        <p><strong>Já Assisti?</strong></p>
                        <p>${row.c[6].v}</p><br>
                        <p><strong>Minha nota:</strong> ${row.c[7].f}/10</p>
                        <progress class="${classePontuacao}" value="${parseInt(row.c[7].f)*10}" max="100"></progress>
                        <p><strong>Assistiria novamente?</strong></p>
                        <p>${row.c[8].v}</p>

                    </div>
                  </div>
                </div>
              </div>
            <footer class="card-footer mt-5 level">
                <a href="${row.c[3].v}" class="card-footer-item has-text-weight-semibold">Torrent</a>
                <a href="${row.c[4].v}" class="card-footer-item has-text-weight-semibold">Drive</a>
                <a href="${row.c[5].v}" class="card-footer-item has-text-weight-semibold has-text-warning-dark">
                    <div class="level">
                        <figure class="is-3by1">
                            <img src="https://cdn.freebiesupply.com/images/large/2x/imdb-logo-transparent.png">
                          </figure>
                       
                    </div>
                </a>
            </footer>
        </div>
    </div>
        
        `);


    });

});