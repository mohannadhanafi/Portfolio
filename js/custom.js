/*global $, alert, console*/



$(document).ready(function () {
    "use strict";
    
    var myLink = $(".navbar ul li");
    
    myLink.click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    $(".navbar ul li a").click(function () {
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1500);
    });
});