$(document).ready(function () {
   console.log('готов к манипуляциям');
   var currentFloor = 2;  
   var floorPath = $(".home-image path");
   var counterUp = $('.counter-up'); 
   var counterDown = $('.counter-down'); 

   var modal = $('.modal');
   var modalCloseButton = $('.modal-close-button');

   var buttonPrimary = $('.button-primary');

   
   
    floorPath.on('mouseover', function () { 
      
      floorPath.removeClass('current-floor');
    currentFloor = ($(this).attr('data-floor'));
    $('.counter').text(currentFloor); 
     })

    
     floorPath.on('click', toggleModal);
     modalCloseButton.on('click', toggleModal);
     buttonPrimary.on('click', toggleModal);


     counterUp.on('click', function(){
       if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2, useGrouping: false})
      $('.counter').text(usCurrentFloor);  

       floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
    })

    counterDown.on('click', function(){
       if (currentFloor >2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2, useGrouping: false})
      $('.counter').text(usCurrentFloor);  

       floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
    })

    function toggleModal (){
       modal.toggleClass('is-open');
     }
  
});


/* var currentFlat = 40;


$(".flats path").on('click', function(){
  currentFlat = $(this).attr('data-flat');
 console.log(currentFlat);
})


var currentLink = 40;

$(".flat-list li a").on('mouseover', function(){
  currentLink = $(this).attr('data-link');
 console.log(currentLink);
  $(`[data-flat=${currentFlat}]`).addClass('hidden');
  $(`[data-flat=${currentFlat}]`).removeClass('hidden');
}) */