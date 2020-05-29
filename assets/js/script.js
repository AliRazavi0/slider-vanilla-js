let currentSlide = 1;


showSlide(currentSlide);

function changeSlide(val) {
    showSlide(currentSlide += val);
}

function showSlide(val) {
   

    let slide = document.getElementsByClassName("slide");



    if (val > slide.length) {
        currentSlide = 1;
    }

    if (val < 1) {
        currentSlide = slide.length;
    }

    for (let index = 0; index < slide.length; index++) {
        slide[index].style.display = 'none';

    }

    slide[currentSlide - 1].style.display = "block";
}