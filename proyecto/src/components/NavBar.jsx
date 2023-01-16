import React from "react";
import { Link } from "react-router-dom";

// IMPORTACION DE ICONOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper} from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"


function NavBar({ ColorInicio, TextColorInicio, ColorPokedex, TextColorPokedex }) {
    return (

        <div className={`md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white`}>


            <Link to="/" className={`h-[70px] 
                        flex justify-center items-center ${TextColorInicio} ${ColorInicio} md:w-[125px] md:h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer`}>

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faGhost} />

                    <p className={`text-[15px] font-semibold`}>Inicio</p>
                </div>
            </Link>

            <Link to="/Pokedex" className={`h-[70px]
                        flex justify-center items-center ${TextColorPokedex} ${ColorPokedex} md:w-[125px] md:h-[89px] border-b-4 border-[#E3350D] hover:bg-[#E3350D] hover:text-[#fff] cursor-pointer`}>

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faCircle} />

                    <p className="text-[15px] font-semibold "> Pokédex</p>
                </div>

            </Link>

            <div className="h-[70px] text-[#8e8d8d]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faMobile} />
                    <p className="text-[15px] font-semibold"> Aplicaciones</p>
                </div>
            </div>

            <div className="h-[70px] text-[#8e8d8d]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faImage} />
                    <p className="text-[13px] text-center font-semibold">Juegos de Cartas Coleccionables</p>
                </div>
            </div>


            <div className="h-[70px] text-[#8e8d8d]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faTv} />
                    <p className="text-[15px] font-semibold"> TV Pokémon</p>
                </div>
            </div>


            <div className="h-[70px] text-[#8e8d8d]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faTrophy} />
                    <p className="text-[15px] font-semibold"> Play! Pokémon</p>
                </div>
            </div>




            <div className="h-[70px] text-[#8e8d8d]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">

                <div className="md:flex md:flex-col md:justify-center md:items-center">
                    <FontAwesomeIcon className="hidden md:block md:h-[25px]" icon={faNewspaper} />
                    <p className="text-[15px] font-semibold"> Noticias</p>
                </div>
            </div>


        </div>
    )
}

export default NavBar