export const validame = (type, value) => {
  switch (type) {
    case "name":
    case "nombre":
    case "surname":
    case "cognom":
      if (value.length < 3) {
        return "Por favor, el nombre debe de tener mínimo tres caracteres.";
      }

      return "";

    case "email":
    case "e-mail":
    case "correo":
    case "mail":
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!emailRegex.test(value)) {
        return "Por favor, el formato del email debe de ser correcto.";
      }

      return "";

    case "password":
    case "contraseña":
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
      if (!passwordRegex.test(value)) {
        return "El password debe tener 8 caracteres, simbolo y mayúscula";
      }

      return "";
    default:
      console.log("whattttttttttt???");
  }
};
