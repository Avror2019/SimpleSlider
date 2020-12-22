const btnRight = document.querySelector('.btnRight');
const btnLeft = document.querySelector('.btnLeft');
const slides = document.querySelectorAll('img');
let i = 0;
    btnRight.addEventListener('click', function () {
        i++;
        if (i == slides.length){
            slides[i-1].classList.remove('block');
            i = 0;
            slides[i].classList.add('block');
       console.log(i);
        }
        else {
            slides[i-1].classList.remove('block');
            slides[i].classList.add('block');
            console.log(i);
        }

    });

    btnLeft.addEventListener('click', function () {
    i--;
        if (i < 0) {
            slides[i+1].classList.remove('block');
            i = slides.length -1;
            console.log(i);
            slides[i].classList.add('block');
        }
        else if (i >= 0){
            slides[i+1].classList.remove('block');
            slides[i].classList.add('block');
            console.log(i);
        }

});

    setInterval(function() {
        i++;
        if (i == slides.length){
            slides[i-1].classList.remove('block');
            i = 0;
            slides[i].classList.add('block');
        }
        else {
            slides[i-1].classList.remove('block');
            slides[i].classList.add('block');
        }
    }, 3000);
