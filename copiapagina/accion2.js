// Aca se obtiene el elemento botton con 'encabezado-form'
let formButton = document.getElementById('encabezado-form');

// Se añade un event listener al boton en donde al hacer click, la vista se desplaza hasta formulario
formButton.addEventListener('click', function() {
  let formElement = document.getElementById('formulario');
  formElement.scrollIntoView({ behavior: 'smooth' });
});

//Se capturan los valores a traves de nombre, email y telefono. Luego verifica si los campos estan vacios y muestra un mensaje de alerta. Si esta todo bien, muestra la alerta de agradecimiento y registra los valores en la consola. Termina limpiando los campos.
function presionarBoton() {
  // capturar los valores de los inputs
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // mostrar un mensaje de alerta
  alert('Gracias por enviar tu mensaje, revisa la consola por favor');
  console.log({ nombre, email, telefono, mensaje });

  // limpiar los inputs
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('mensaje').value = '';
}