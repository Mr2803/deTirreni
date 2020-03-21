

function init(){
    
        $(".myBurger").on("click", notScroll)
        shadow();
        navSlide();
        spin();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })
}

var spin = () =>{
    $(".nomeStanza").mouseenter(function(){
        $(".fa-compass").addClass("fa-spin")
    })
    $(".nomeStanza").mouseleave(function(){
        $(".fa-compass").removeClass("fa-spin")
    })
}



//bloccare scroll quando la nav è aperta

function notScroll(){
    $('body').toggleClass('stop-scrolling')
    $('body').hasClass('stop-scrolling') ? $('body').bind('touchmove', function(e){e.preventDefault()}) :  $('body').unbind('touchmove')
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
    $(this).scrollTop() !== 0 ? ($('nav').css("background-color" , "#0000009e")) : ($('nav').css("background-color" , "transparent"))
    $(this).scrollTop() !== 0 ? ($('.globContainer nav').css("background-color" , "#0000009e")) : ($('.globContainer nav').css("background-color" , "white"))
    $(this).scrollTop() !== 0 ? ($('nav a').css("color" , "white")) : ($('nav a').css("color" , "black"))
/*     $(this).scrollTop() !== 0 ? ($('.globContainer-transparent .myBurger .line1,.line2,.line3').css("background-color" , "white")) : ($('.globContainer-transparent .myBurger .line1,.line2,.line3').css("background-color" , "white"))
 */    $(this).scrollTop() !== 0 ? ($('.globContainer .myBurger .line1,.globContainer .myBurger .line2,.globContainer .myBurger .line3').css("background-color" , "white")) : ($('.globContainer .myBurger .line1,.globContainer .myBurger .line2,.globContainer .myBurger .line3').css("background-color" , "#262626"))
    $(this).scrollTop() !== 0 ? ($('.globContainer .logo img').attr("src","img/rosa_venti_colored.png")) : ($('.globContainer .logo img').attr("src","img/rosa_venti_colored_onWhite.png"))
});
$(".myScrollOnTop").on("click", function() {
    $("html").animate({ scrollTop: 0 }, "slow");
});



$(document).ready(init)
