//@prepros-append social_share.js
//@prepros-append contactForm.js
//@prepros-append modal.js


$(document).ready(function(){
    $(".openokno").click(function(){
    $(".blockcentr").slideToggle("2000");
    if($("div").hasClass("blockall"))   //если div с классом blockall существует
    $(".blockall").remove(); //удаляем этот класс
    else
    $(".tytoknoall").append('<div class="blockall"></div>'); //иначе создаем div с заливкой внутри класса tytoknoall
    });
    //если кликаем на появившуюся заливку на весь экран, то скрываем ее и прячем форму
    $(".tytoknoall").click(function(){
    $(".blockcentr").slideToggle("2000");
    $(".blockall").remove(); //удаляем этот класс
    });    });

    
$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }
        
    });
    
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
});
