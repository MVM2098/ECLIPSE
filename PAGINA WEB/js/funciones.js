links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const mensajeInput = document.querySelector('#mensaje');
  
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();
  
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }
  

});



function mostrarMensaje() {
  alert("No hay productos disponibles en la tienda actualmente.");
}

function mostrarMensajeNoticias() {
  alert("No hay más noticias disponibles.");
}
