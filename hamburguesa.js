const toggle = document.getElementById('toggle');
const navBar = document.getElementById('nav-items');
const header = document.getElementById('header');

document.onclick = function(e) {
    if(e.target.id !== 'nav-items' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        navBar.classList.remove('active');
        header.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
    header.classList.toggle('active');
}