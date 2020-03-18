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
