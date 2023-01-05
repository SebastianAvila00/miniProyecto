import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


function Sidebar() {
    return (
        <div className="flex">
            <div className="w-[8vw] h-full bg-[#303030]">
            </div>

            <div className="sesion h-[100px] z-10">
                <Link to="/login" className="flex justify-center items-center flex-col h-[120px] w-[59px] bg-green-500 rounded-tr-2xl border-r-2 border-t-2 border-black 
                hover:bg-green-600 cursor-pointer">

                    <img className="h-[30px] w-[30px] rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />

                    <p className="text-center text-white font-semibold text-[10px]">Iniciar Sesión</p>

                </Link>


                <div className="flex justify-center items-center h-[60px] w-[59px] bg-gray-600 hover:bg-sky-500 cursor-pointer border-r-2 border-black">
                <FontAwesomeIcon className="text-[27px] text-white" icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;