//Declarando Variáveis
var btnContact = document.querySelector('.vg-btn-contact');
var toggleMenu = document.querySelectorAll('.vg-toggle-menu');
var menuMobile = document.querySelector('.vg-menu-mob');
var overlay = document.querySelector('.vg-menu-overlay');
var btnMenuMobIcon = document.querySelector('.vg-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.vg-preloader');
    pagePreloader.classList.add('vg-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);

});


//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.vg-contact-info');
    boxContact.classList.toggle('vg-is-open');
    this.classList.toggle('vg-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        overlay.classList.toggle('vg-is-open');
        menuMobile.classList.toggle('vg-menu-is-closed');
        menuMobile.classList.toggle('vg-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu-outline') {
            btnMenuMobIcon.setAttribute('name', 'close-outline');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu-outline');
        }
    });

}


//Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector('.vg-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('vg-fade-out');
    },
    offset: '80%'
});


