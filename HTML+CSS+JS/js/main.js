//Declarando Variáveis
var btnContact = document.querySelector('.vg-btn-contact');
var toggleMenu = document.querySelectorAll('.vg-toggle-menu');
var menuMobile = document.querySelector('.vg-menu-mob');
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
        var overlay = document.querySelector('.vg-menu-overlay');
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

//Animando Elementos da TopBar
var triggerTopbar = document.querySelector('.vg-trigger-topbar');
var topBar = document.querySelector('.vg-topbar');
var logo = document.querySelector('.vg-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
       topBar.classList.toggle('vg-topbar-bg');
       logo.classList.toggle('vg-logo-shorten');
       logo.classList.toggle('vg-logo-big');
    },
    offset: '50px'
});



