  const const1 = document.getElementById("id1");
  const1.addEventListener("click", function(){
    alert("Formulario enviado correctamente")
  }); 

  $('#contact-form').submit(function(event) {
    // Detener el envío del formulario
    event.preventDefault();
    
    // Obtener los datos del formulario
    var formData = $(this).serialize();
    
    // Enviar los datos del formulario utilizando AJAX
    $.ajax({
      type: 'POST',
      data: formData,
      success: function(response) {
        // Mostrar una alerta al usuario
        alert('¡Gracias por completar el formulario!');
        
        // Limpiar el formulario
        $('#contact-form')[0].reset();
        
        // Actualizar el contenido en la página
        $('#result').html(response);
      }
    });
  });