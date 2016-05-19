$(document).ready( function()  {
   
   
   $("#boton").click( function() {
      console.log($("#busqueda").val())
      $.get("/usuarios",{
         "nombre": $("#busqueda").val()
      }, function (data) {
            for(var i = 0; i < data.length; i++) {
               if(data[i]) {
                  if(data[i].Modelo == undefined) {
                     $(".load").addClass("esconder");
                     $("#err").append("No se encuentra en la BBDD");
                     return 0;
                  }else {
                     if ($("#tt").hasClass('esconder')) {
                        $("#tt").removeClass("esconder");
                        $(".load").addClass("esconder");
                     }
                     console.log(data[i]);
                     var fila = '<tr><td>' + data[i].Conductor + '</td><td>' + data[i].Modelo + '</td><td>' + data[i].Otros_viajeros + '</td><td>' + data[i].Zonas + '</td> </tr>'
                     $('#tabla_p').append(fila);
                     console.log(data[i].Conductor);
                     console.log(data[i].Modelo);
                  }
               }
            }
      });
   });
    
});