
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click', () => {
         // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
            link.style.animation = 'navLinkFade 0.5s ease forward ${index/7 + 3.5}s';
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');

    });
    
}

navSlide();
