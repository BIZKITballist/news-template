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