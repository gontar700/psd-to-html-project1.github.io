$(document).ready(function() {

    /* initialize wow plugin*/
    new WOW().init();

    /* animate whole iphone show up*/
    $('.js-wp-2').waypoint(function()
    {
        $('.js-wp-2').addClass('animated slideInUp');

    } , {offset: '70%'});

    /* animate screen - turn on*/
    $('.js-wp-3').waypoint(function()
    {
        $('.js-wp-3').addClass('animated fadeIn');

    } , {offset: '70%'});


    /* animate button - turn on*/
    $(".iphone-btn").delay(2300).animate({top: "+=3"},300);
    $(".iphone-btn").delay(300).animate({top: "+=-3"},300);

    /* animate button - turn off
    $(".iphone-btn").delay(3300).animate({top: "+=3"},300);
    $(".iphone-btn").delay(300).animate({top: "+=-3"},300);
     */

    $(".burger-nav").click(
        function(){
            $("#hero .container ul").toggleClass("open");
            $(".cta-info").css("z-index","-100");
            $(".navbar").css("z-index","100");
            $("#hero h2").css("padding-top","90px");
        })

});
