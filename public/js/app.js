

function init(){

    shadow();
    navSlide();
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
}

// slider navbar
    const navSlide = () => {
    const burger = document.querySelector('.myBurger');
    const nav = document.querySelector('.my_nav-links');
    const navLinks = document.querySelectorAll('.my_nav-links li')
    //toggle nav
    burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
        //animate links
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = ""
            
            console.log(index / 7 + 0.5)
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
        }
    });
    //Burger animation
    burger.classList.toggle('toggle');

})
    
}


const shadow = () => {
    var cards = document.getElementsByClassName('card');
    console.log(cards.length)
    for (let index = 0; index < cards.length; index++) {
        cards[index].onmouseenter = function(){
            this.classList.add("shadow")
        }
        cards[index].onmouseleave = function(){
            this.classList.remove("shadow")
        }
    }
        
}

$(window).scroll(function(){
    $(this).scrollTop() !== 0 ? ($('.myScrollOnTop').removeClass("d-none")) : ($('.myScrollOnTop').addClass("d-none"))
});
$(".myScrollOnTop").on("click", function() {
    $("html").animate({ scrollTop: 0 }, "slow");
});



$(document).ready(init)
