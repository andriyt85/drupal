$( '#vo_nomer' ).change( function selectRoom() {

				var a = document.form.select.selectedIndex;

				if ( a === 0 ) {
					$( '#vo_body' ).css( "background-image", "url('http://durpal-final-andriyt85.c9users.io/sites/default/files/2016-06/eco_0.png')" );
          $( '#price' ).text( '400' );
				} else if ( a === 1 ) {
					$( '#vo_body' ).css( "background-image", "url('http://durpal-final-andriyt85.c9users.io/sites/default/files/2016-06/std_0.png')" );
          $( '#price' ).text( '600' );
				} else if ( a === 2 ) {
					$( '#vo_body' ).css( "background-image", "url(http://durpal-final-andriyt85.c9users.io/sites/default/files/2016-06/lux_0.png)" );
          $( '#price' ).text( '800' );
				}
 
		});

    $( '#vo_checkbox' ).change( function check() {
      
        var a = $( '#price' ).text();
        var price = a - 50;
           
          if ( $( 'input:checked' ).val() == 'on' ) {
            $( '#price' ).text( price );
          } else {
            $( '#price' ).text( '800' );
          }
    
    });
      
      $( '#booking' ).click( function book() {

         var name = $( '#name' ).val();
        var date = $( '#date' ).val();
        var price = $( '#price' ).text();
        var day = $( '#day' ).val();
        var tel = $( '#tel' ).val();
        var email = $( '#email' ).val();

        var nameVal = document.getElementById( 'name' ).value;
        var dateVal = document.getElementById( 'date' ).value;
        var dayVal = document.getElementById( 'day' ).value; 
        var emailVal = document.getElementById( 'email').value;
        var telVal = document.getElementById( 'tel').value; 
        
         var reg =  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
        
        if ( nameVal === "" ) {
          alert( "Введіть ПІБ" );
          return false;
        } else if ( dateVal === "" ) {
                  alert( "Введіть дату заселення" );
                  return false;
                } else if ( dayVal === "" ) {
                          alert( "Введіть к-сть днів перебування" );
                          return false;
                        } else if ( telVal === "" ) {
                                  alert( "Введіть номер телефону" );
                                  return false;
                                } else if ( emailVal === "" ) {
                                          alert( "Введіть Ваш емейл" );
                                          return false;
                                        } else if ( !reg.test( emailVal ) ){
                                                  alert( "Введіть Ваш емейл коректно" );
                                                  return false;
                                                } else {
                                                    document.getElementById( 'form' ).reset();
                                                      }
        var a = $( '#price' ).text();
          
          if ( a == 400 || a == 350) {
            var x = "Економ";
          } else if ( a == 600 || a == 550 ) {
                var x = "Стандарт";
              } else if ( a == 800 || a == 750 ) {
                    var x = "Люкс";
                  }
 
          if ( $( 'input:checked' ).val() == 'on' ) {
            $( '#modalLabel5' ).text( a );
          } else {
            $( '#modalLabel5' ).text( a );
          }

        finalPrice = day * price;

        $( '#modalLabel0' ).text( name );
        $( '#modalLabel1' ).text( date  );
        $( '#modalLabel2' ).text( x  );
        $( '#modalLabel3' ).text( price  );
        $( '#modalLabel4' ).text( day  );
        $( '#modalLabel5' ).text( tel  );
        $( '#modalLabel6' ).text( email  );
        $( '#modalLabel7' ).text( finalPrice );
      });

      $( '#buttonOk' ).click( function () {
        window.location.assign("index2.html");
      } );