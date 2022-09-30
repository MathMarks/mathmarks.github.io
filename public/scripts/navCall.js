
load(document.getElementsByClassName('navCall')[0], './views/partials/navbar.html');
loadAppend(document.getElementsByTagName('head')[0], './views/partials/headneeds.html');

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
