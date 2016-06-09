$(document).ready( function()  {
   
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
   
   $('.slider').slider();

   $('.parallax').parallax();
   
   $("#boton").click( function() {
      console.log($("#busqueda").val());
      $.get("/usuarios",{
         "nombre": $("#busqueda").val()
      }, function (data) {
            for(var i = 0; i < data.length; i++) {
               if(data[i]) {
                  if(data[i].Modelo === undefined) {
                     $(".load").addClass("esconder");
                     $('#tabla_p').empty();
                     $('#err').empty();
                     $("#err").append("No se encuentra en la BBDD");
                     return 0;
                  }else {
                     if ($("#tt").hasClass('esconder')) {
                        $("#tt").removeClass("esconder");
                        $(".load").addClass("esconder");
                     }
                     console.log(data[i]);
                     var fila = '<tr><td>' + data[i].Conductor + '</td><td>' + data[i].Modelo + '</td><td>' + data[i].Otros_viajeros + '</td><td>' + data[i].Zonas + '</td> </tr>';
                     $('#err').empty();
                     $('#tabla_p').empty();
                     $('#tabla_p').append(fila);
                     console.log(data[i].Conductor);
                     console.log(data[i].Modelo);
                  }
               }
            }
      });
   });
   
   $("#env_contacto").click( function() {
      $.get("/enviar",{
      "correo": $("#correo").val(),
      "asunto": $("#asunto").val(),
      "texto": $("#texto").val()
      });
   });
   
   $("#r_boton").click( function() {
      $.get("/registro",{
      "r_nombre": $("#r_nombre").val(),
      "r_apellidos": $("#r_apellidos").val(),
      "r_correo": $("#r_correo").val(),
      "r_contra": $("#r_contra").val()
      });
   });
    
   $("#costes_btn").click( function() {
       console.log($("#dest option:selected" ).text());
       console.log($("#org option:selected" ).text());
      $.get("/calculadora",{
      "org": $("#org option:selected" ).text(),
      "dest": $("#dest option:selected" ).text()
      }, function (data){
         console.log(data[0]);
         var parrafo = "Trayecto: " + data[0].Trayecto + " Coste: " + data[0].Coste;
         $('#resultado_c').empty();
         $('#resultado_c').append(parrafo);
      });
   });
});