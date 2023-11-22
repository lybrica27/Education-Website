$(document).ready(function(){
    $(".owl-theme").owlCarousel({
        items : 1,
        loop : true,
        nav : true,
        dots : true,
        autoplay : true,
        autoplayHoverPause : true,
        smartSpeed : 1500,
        autoplaySpeed : 1000,
    });
    
    $(".owl-subject").owlCarousel({
        margin : 20,
        loop : true,
        autoplay : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : true,
        responsive : {
            0 : {
                items : 1,
                nav : false,
            },
            576 : {
                items : 2,
                nav : false,
            },
            768 : {
                items : 3,
                nav : false,
            },
            991 : {
                items : 4,
                nav : false,
            },        
            1100 : {
                items : 5,
                nav : false,
            }
        }
    });

    $(".owl-teachers").owlCarousel({
        margin : 20,
        loop : true,
        autoplay : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : true,
        responsive : {
            0 : {
                items : 1,
                nav : false,
            },
            768 : {
                items : 2,
                nav : false,
            },
            1100 : {
                items : 3,
                nav : false,
            }
        }
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky", window.scrollY > 100);
    //console.log(window.scrollY)
});

let menu_icon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu_icon.onclick = () => {
    menu_icon.classList.toggle("fa-times");
    navlist.classList.toggle("open");
}
