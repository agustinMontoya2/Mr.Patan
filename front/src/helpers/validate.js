export default function registerValidation(input) {
  const errors = {};
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/;

  const emailRegex = /\S+@\S+\.\S+/; // Expresión regular para el email
  const dniRegex = /^\d{7,8}$/; // Expresión regular para el DNI
  const usernameRegex = /^[a-zA-Z0-9ñÑ_.:¡!@#$%^&*()\-+=<>¿?'/]{3,15}$/; // Expresión regular para el username

  // Validación del nombre
  if (!input.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!nameRegex.test(input.name)) {
    errors.name = "El nombre no es válido";
  }

  // Validación del email
  if (!input.email) {
    errors.email = "El email es obligatorio";
  } else if (!emailRegex.test(input.email)) {
    errors.email = "El email no es válido";
  }

  // Validación del DNI
  if (!input.Dni) {
    errors.Dni = "El DNI es obligatorio";
  } else if (!dniRegex.test(input.Dni)) {
    errors.Dni = "Debe ser un dni valido escrito sin puntos";
  }

  // Validación del username
  if (!input.username) {
    errors.username = "El username es obligatorio";
  } else if (!usernameRegex.test(input.username)) {
    errors.username = "Debe tener entre 3 y 15 caracteres";
  }

  // Validación de la contraseña
  const passwordRegex =
    /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[A-Za-zñÑ\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/;
  if (!input.password) {
    errors.password = "Debe ingresar una contraseña";
  } else if (!passwordRegex.test(input.password)) {
    errors.password =
      "Debe tener al menos 8 caracteres, 1 mayúscula, 1 número y un simbolo";
  }
  if (
    input.password &&
    input.verificate_password &&
    input.password !== input.verificate_password
  ) {
    errors.verificate_password = "Las contraseñas deben coinciden";
  }

  return errors;
}
