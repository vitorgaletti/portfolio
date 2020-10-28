//PORTFOLIO SLIDER

//Declarando variáveis do slider

var sliderContainer = document.querySelector('.vg-slider-container');
var sliderList = document.querySelector('.vg-slider-list');
var sliderItem = document.querySelectorAll('.vg-slider-item');
var sliderListWidth = null;
const sliderTotalItems = sliderItem.length;
var prevItem = document.querySelector('.vg-item-prev');
var nextItem = document.querySelector('.vg-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.vg-current-slide');
var totalSlide = document.querySelector('.vg-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.vg-item-navigator a');
var navCounter = document.querySelector('.vg-navigator-counter span');

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

//HANDLERS

//Next Slide Animaçao
var nextSlideAnim = function () {

    var lastItem = sliderListWidth - containerWidth;
    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Prev Slide Animaçao
var prevSlideAnim = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    }

    else {
        return n;
    }
}

//Counter Add

var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
         currentCounter++;
         currentSlide.innerHTML = counterFormatter(currentCounter);
         navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
         currentCounter--;
         currentSlide.innerHTML = counterFormatter(currentCounter);
         navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav
var setActiveNav = function () {
    for(var nv = 0; nv < navItems.length; nv++) {

        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if(myNavNum === currentCounter){
            navItems[nv].classList.add('vg-item-active');

            anime({
                targets: '.vg-item-active',
                width: 90
            });
        }
    }
}

var changeActive = function () {
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('vg-item-active');

        anime({
            targets: navItems[rm],
            width: 20
        });
    }

    setActiveNav();
}

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.vg-item-active',
    width: 90
});


//Fazendo Animaçao do Slider onClick
nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();

});
