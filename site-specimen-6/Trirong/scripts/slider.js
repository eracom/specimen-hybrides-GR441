var wW;
var slidingThing = function(){
    var min = wW / 20;
    var max = wW / 4;
    var medium = min + (max-min)/2;
    $(".mySlider").slider({
      min: min,
      max: max,
      value: medium,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySlider" ).slider("value");
    $(".clicked").css('font-size',fontSize);

/*
     $(".mySecondSlider").slider({
      min: min,
      max: max,
      value: medium,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySecondSlider" ).slider("value");
    $(".clicked").css('letter-spacing',fontSize);
*/



}
var init = function(){
    $(".mySlider").on( "slide", function() {
      var fontSize = $( ".mySlider" ).slider("value");
      $(".clicked").css('font-size',fontSize);
    });
    /*
    $(".mySecondSlider").on( "slide", function() {
      var fontSize = $( ".mySecondSlider" ).slider("value");
      $(".cliked").css('letter-spacing',fontSize);
  });*/

    $(window).on('resize', resize);
    resize();
}

var resize = function(){
    wW = $('.fontTester').width();
    slidingThing();
}
$(document).ready(function(){
    init();
});
