import React from "react";

// IMPORTACION DE ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

// IMPORTACION DE NAVEGACION Y LOGOUT
import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext";

function ButtonLogin() {

    const { user, logout, loading } = useAuth()
    console.log(user)

    // FUNCION DE LOGOUT
    const handleLogout = async () => {
        await logout()
    }

    if (loading) return <div>Cargando...</div>

    return (

        // BOTON FLOTANTE DE LOGEO
        <div className="md:fixed h-[100px] md:left-[0px] lg:left-[0px] xl:left-[123px] z-10">

            <Link to="/login" className="

            flex justify-center items-center flex-col md:h-[120px] md:w-[59px] bg-[#4dad5b] md:rounded-tr-2xl md:border-r-2 md:border-t-2 border-black 
                hover:bg-green-600 cursor-pointer"
            >

                <img className="h-[30px] w-[30px] rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />

                <p className="text-center text-white font-semibold text-[10px]">Iniciar Sesión</p>

            </Link>


            <div onClick={handleLogout} className="flex h-[50px] justify-center items-center md:h-[60px] md:w-[59px] bg-[#616161] hover:bg-sky-500 cursor-pointer border-r-2 border-black">
                <FontAwesomeIcon className="text-[27px] text-white" icon={faArrowRightFromBracket} />
            </div>
        </div>
    )

}

export default ButtonLogin;