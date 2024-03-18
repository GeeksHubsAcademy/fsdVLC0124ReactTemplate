
import "./CInput.css";

export const CInput = ({className, type, placeholder, name, value, onChangeFunction}) => {
    
    return (
        <input 
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            // emit, recibimos la funcion por props que está en el padre!
            onChange={onChangeFunction}
        />
    )
}