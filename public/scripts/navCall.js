

document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementsByTagName('body')[0];
const scriptBulma = document.createElement('script');

scriptBulma.setAttribute('src','./public/scripts/bulmaScripts.js');
body.appendChild(scriptBulma);


loadAppend(document.getElementsByTagName('head')[0], './views/partials/headneeds.html');
load(document.getElementsByClassName('navCall')[0], './views/partials/navbar.html');

function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

function loadAppend(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML += r.responseText;
    };
    r.send();
}
    
  });