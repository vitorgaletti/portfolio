var btnContact = document.querySelector('.vg-btn-contact');

btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.vg-contact-info');
    boxContact.classList.toggle('vg-is-open');
    this.classList.toggle('vg-change-icon');
});