//Declarando Variáveis
var btnContact = document.querySelector('.vg-btn-contact');


//Page Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.vg-preloader');
    pagePreloader.classList.add('vg-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);


});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.vg-contact-info');
    boxContact.classList.toggle('vg-is-open');
    this.classList.toggle('vg-change-icon');
});