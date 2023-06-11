let flag = 2;

function caption(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = (slides.length) -1
        num = (slides.length) -1
    }

    for(let a of slides){
        a.style.display = 'none';
    }
    
    slides[num].style.display = 'block';
}

