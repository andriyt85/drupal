// JavaScript File
/*var marker;

function initMap() {
    
  var mapOptions = {
  zoom: 14,
  center: new google.maps.LatLng(36.886409, 30.699376),
  mapTypeId: google.maps.MapTypeId.ROARMAP
};
 var map = new google.maps.Map(document.getElementById('map'),  mapOptions);
    
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 36.886409, lng: 30.699376}
  });
  marker.addListener('click', toggleBounce);
};
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};*/


$(window).scroll(function() {
if ($(this).scrollTop() > 63){  
    $('.i4_top_nav').addClass("i4_sticky");
    $('.i4_top_nav').css("transition", "all 0.9s easy");
  }
  else{
    $('.i4_top_nav').removeClass("i4_sticky");
    $('.i4_top_nav').css("transition", "all 0.9s easy");
  }
});

$('#i4_headingOne a').mouseover(function(){
    $( this ).click();
});
/*$('#i4_headingOne a').mouseout(function(){
    $( this ).click();
});*/

$('#i4_headingTwo a').mouseover(function(){
    $( this ).click();
});
/*$('#i4_headingTwo a').mouseout(function(){
    $( this ).click();
});*/

$('#i4_headingThree a').mouseover(function(){
    $( this ).click();
});
/*$('#i4_headingThree a').mouseout(function(){
    $( this ).click();
});*/