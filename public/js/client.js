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
    
    $("#costes_btn").click( function() {
       console.log($("#dest option:selected" ).text());
       console.log($("#org option:selected" ).text());
      $.get("/costes",{
      "origen": $("#org option:selected" ).text(),
      "destino": $("#dest option:selected" ).text()
      });
   });
});