import { useState, useEffect } from "react"
import { CInput } from '../../common/CInput/CInput'
import './Register.css'

export const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    //funcion emit que está aqui en el padre... que se la pasamos al custom input
    const inputHandler = (e) => {
        console.log(e.target.value)
    }

    return(
        <div className='registerDesign'>
            <CInput 
                className={"inputDesign"}
                type={"text"}
                placeholder={"name"}
                name={"name"}
                value={user.name || ""}
                onChangeFunction={(e) => inputHandler(e)}
            />
            <CInput 
                className={"inputDesign"}
                type={"email"}
                placeholder={"email"}
                name={"email"}
                value={user.email || ""}
                onChangeFunction={(e) => inputHandler(e)}
            />
            <CInput 
                className={"inputDesign"}
                type={"password"}
                placeholder={"password"}
                name={"password"}
                value={user.password || ""}
                onChangeFunction={(e) => inputHandler(e)}
            />
        </div>
    )
}