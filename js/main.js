$(document).ready(function(){

    //places
    $('#archway').on("click",function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $($(this).data('place')).offset().top - 100
        },1000)

    })

    //NAv add class active
    $('.nav li a').on('click',function(){
       
        $('.nav li a').removeClass('active');
        $(this).addClass('active');
    })
//home slider  owlCarousel js

$(window).on('scroll load',function(){
    if($(window).scrollTop() > 60){
        $('.header-two').addClass('active')
    }else $('.header-two').removeClass('active')

    if($('.header-two').hasClass('active')){
        $(' header .header-two .nav ul li a.active').addClass('active-2');
        $(' header .header-two .icons a').addClass('active-2');


    }else  {      $(' header .header-two .nav ul li a.active').removeClass('active-2');
          $(' header .header-two .icons a.active-2').removeClass('active-2');

            } ;

})


//home slide
$('.home-slider').owlCarousel({
    items:1,
    autoplay:true,
    dots:false,
    //autoplayHoverPause:true,
    autoPlaySpeed: 1000,
    loop:true,
    autoplayTimeout:3000,

});





//element pour show login form
let formBtn = document.getElementById('icon-user');
let loginForm = document.querySelector('.login-form');
let formClose = document.querySelector('#close')

formBtn.addEventListener('click',(e)=>{
        e.preventDefault();
    loginForm.classList.add('active');
  //  loginForm.style = 'display:flex';

})

formClose.addEventListener('click',()=>{
  //  loginForm.style = 'display:none';
  loginForm.classList.remove('active');

})



/*fa heart places */
$('.packages .box-container .box .content i.fa-heart').each(function(){
    $(this).on('click',function(){
        $(this).toggleClass('active');
    })
})



})





















//tabs start
let tabs = document.querySelectorAll('.tabs li');
//let arrayTabs =  Array.from(tabs);
let divs  = document.querySelectorAll('.content div')
//console.log(tabs)
//console.log(arrayTabs)


tabs.forEach((el)=>{
    console.log(el)
    el.addEventListener('click',(e)=>{
        tabs.forEach((el)=>{
            el.classList.remove('active')
        })

        e.target.classList.add('active')//or currentTarget
        divs.forEach((div)=>{
            div.style.display ="none";
        })
        document.querySelector(e.target.dataset.content).style='display:block';
    })
})

//tabs end













  //ScrollReveal
ScrollReveal().reveal('section', {
    delay: 200,
    duration: 500,
    reset: true,
    
});


ScrollReveal().reveal('.heading ',{
    delay: 300,
    distance: '150%',
    origin: 'bottom',
    opacity: false,
  
    reset: true
  
  });
  
  













/*
//show about us
$(window).on('scroll',function(){
    
    if($(window).scrollTop() >= $('.about').offset().top  - 100 )  {
        $('.about .row').fadeIn(500)
    }
    else {
        $('.about .row').fadeOut(1000)
    }
})*/
