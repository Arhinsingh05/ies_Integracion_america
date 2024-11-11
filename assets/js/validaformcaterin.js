function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateForm() {
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos.");
      return false;
  }

  if (!validateEmail(email)) {
      alert("Por favor, ingrese un email válido.");
      return false;
  }

  return true;
}

function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:tu_correo@dominio.com?subject=Nuevo%20mensaje%20de%20${encodeURIComponent(name)}&body=Nombre:%20${encodeURIComponent(name)}%0ACorreo:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;
  
  window.location.href = mailtoLink;
}
