$(document).ready(function() { 
    
    var overlay = $('.overlay'); 
    var popup_open = $('.popup_open');
    var close = $('.popup_close, .overlay'); 
    var popup = $('.popup'); 

     popup_open.click( function(event){ 
         event.preventDefault(); 
         var div = $(this).attr('href'); 
         overlay.fadeIn(300, 
             function(){ 
                 $(div) 
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
         });
     });

     close.click( function(){ 
            popup 
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(300); 
                 }
             );
     });
})