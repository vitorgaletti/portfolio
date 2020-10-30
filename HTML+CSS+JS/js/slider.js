//PORTFOLIO SLIDER

//Declarando variáveis do slider

var sliderContainer = document.querySelector('.vg-slider-container');
var sliderList = document.querySelector('.vg-slider-list');
var sliderItem = document.querySelectorAll('.vg-portfolio-item');
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
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
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
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
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

var setActiveSlide = function () {
    for(var sld = 0; sld < sliderItem.length; sld++) {

        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));
        
        if(mySlideNum === currentCounter){
            sliderItem[sld].classList.add('vg-slide-active');
            sliderItem[sld].querySelector('.vg-portfolio-item-box').classList.add('vg-scale-right');
            sliderItem[sld].querySelector('.vg-portfolio-item-thumb img').classList.add('vg-scale-up');
            sliderItem[sld].querySelector('.vg-portfolio-item-info').classList.add('vg-fade-from-left');
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

    for(var rms = 0; rms < sliderItem.length; rms++){
        sliderItem[rms].classList.remove('vg-slide-active');
        sliderItem[rms].querySelector('.vg-portfolio-item-box').classList.remove('vg-scale-right');
        sliderItem[rms].querySelector('.vg-portfolio-item-thumb img').classList.remove('vg-scale-up');
        sliderItem[rms].querySelector('.vg-portfolio-item-info').classList.remove('vg-fade-from-left');

    }

    setActiveNav();
    setActiveSlide();
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
