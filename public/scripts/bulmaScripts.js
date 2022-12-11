
    //Adiciona os eventos ao Burguer menu
document.addEventListener('load', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    console.log($navbarBurgers)
    
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        console.log(el + "1");
        el.addEventListener('click', () => {
    
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        console.log(target);
        const $target = document.getElementById(target);
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    
        });
    });
});

