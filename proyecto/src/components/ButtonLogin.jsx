import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function ButtonLogin(){
    return (

        <div className="md:fixed h-[100px] md:left-[0px] lg:left-[0px] xl:left-[123px] z-10">

            <Link to="/login" className="

            flex justify-center items-center flex-col md:h-[120px] md:w-[59px] bg-green-500 md:rounded-tr-2xl md:border-r-2 md:border-t-2 border-black 
                hover:bg-green-600 cursor-pointer"
                >

                <img className="h-[30px] w-[30px] rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />

                <p className="text-center text-white font-semibold text-[10px]">Iniciar Sesión</p>

            </Link>


            <div className="flex h-[50px] justify-center items-center md:h-[60px] md:w-[59px] bg-gray-600 hover:bg-sky-500 cursor-pointer border-r-2 border-black">
                <FontAwesomeIcon className="text-[27px] text-white" icon={faMagnifyingGlass} />
            </div>
        </div>
    )

}

export default ButtonLogin;