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
