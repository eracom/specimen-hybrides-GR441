// How to create a jQuery accordion menu

$('.inside').hide(); // initially hide the inside content
 
//set event listener to trigger on menu click
$('.menu-title').click(function() {
    
    $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    
});