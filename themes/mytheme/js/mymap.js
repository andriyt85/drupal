// JavaScript File
(function ($) {
    $(document).ready(function(){
      var map;
      map = new GMaps({
        div: '#map',
        scrollwheel: false,
        //Задаємо координати середини карти				
        lat: 36.886409,
        lng: 30.699376
      });
      
	  //Додаємо маркер
	  var marker = map.addMarker({
		lat: 36.886409,
		lng: 30.699376,
        title: 'Hotel Royal'
       });
    });
    
})(jQuery);