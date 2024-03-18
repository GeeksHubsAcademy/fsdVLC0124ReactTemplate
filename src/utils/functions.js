
export const validame = (type, value) => {

    switch(type) {

        case "name":
        case "nombre":
        case "surname":
        case "cognom":

            if(value.length < 3){
                return "Por favor, el nombre debe de tener mínimo tres caracteres."
            }

        break;

        case "email":

        break;

        case "password":

        break;

        default:
            console.log("whattttttttttt???")
    }

}