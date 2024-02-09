let slideCount = 0;
showSlides(slideCount);

let prev = document.querySelector(".prev");
prev.addEventListener("click", function() {
    showSlides((slideCount -= 1));
});

let next = document.querySelector(".next");
next.addEventListener("click", function() {
    showSlides((slideCount += 1));
});

function showSlides(n){
    let slides = document.querySelectorAll(".slides");

    if(n >= slides.length){
        slideCount = 0;
    }else if(n < 0){
        slideCount = slides.length -1 
    }

    for(let i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    console.log(slideCount)
    slides[slideCount].style.display = "block";
}

let dotEle = document.querySelector(".dots-container");
let slides = document.querySelectorAll(".slides");
console.log(slides);

for(let i=0; i<slides.length; i++){
    let spanEle = document.createElement("span");
    spanEle.setAttribute("class", "dot");
    spanEle.setAttribute("data-slide-count", i+1);
    dotEle.append(spanEle);
}

let dots = document.querySelectorAll(".dot");
console.log(dots);

dots.forEach(function(ele){
    ele.addEventListener("click",function(e){
        let value = e.target.getAttribute("data-slide-count");
        dotSlide(value);
    })
})

function dotSlide(n){
    let slides = document.querySelectorAll(".slides");

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    console.log(n);
    slides[n-1].style.display = "block";
}

let counter = 0;
setInterval(function(){

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    if(counter>=slides.length){
        counter = 0
    }
    counter++;

    slides[counter-1].style.display = "block";
    console.log(counter);

},3000); 

