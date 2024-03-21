
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Profile.css";

const datosUser = JSON.parse(localStorage.getItem("passport"))

export const Profile = () => {
    const navigate = useNavigate()
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)

    useEffect(()=>{
        if(!tokenStorage){
            navigate("/")
        }
    }, [tokenStorage])

    return (
        <div className='profileDesign'>
            soy {datosUser?.decodificado?.name} aka the boss
        </div>
    )
}