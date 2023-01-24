import React from "react";

// IMPORTACION DE IMAGENES
import Facebook from "../img/face.png"
import Youtube from "../img/youtube.png"
import Twitter from "../img/twitter.png"
import Publi from "../img/publi.png"



function Footer() {
    return (
        <div className="">

            <div className="w-full flex flex-col justify-center items-center
            bg-[#1f1f1f] md:flex md:flex-row md:justify-evenly md:h-[300px]">
                <div>
                    <p className="mt-5 text-white font-semibold text-[1.2em] mb-2">The Pokémon Company</p>
                    <p className="text-[#616161] hover:text-[#f1f1f1] cursor-pointer">Guía para padres/tutores</p>
                    <p className="text-[#616161] hover:text-[#f1f1f1] cursor-pointer">Servicio de atención al cliente</p>
                    <p className="text-[#616161] hover:text-[#f1f1f1] cursor-pointer">Sobre nuestra compañía</p>
                    <p className="text-[#616161] hover:text-[#f1f1f1] cursor-pointer">Seleccionar país o región</p>
                    <p className="text-[#616161] hover:text-[#f1f1f1] cursor-pointer">Pokémon Sitio de Prensa</p>
                </div>

                <hr class="w-[80%] h-1 md:w-1 md:h-64 my-8 bg-black border-0 rounded"></hr>

                <div className="flex">
                    <img className="h-[35px] cursor-pointer hover:bg-[rgba(0,0,0.9)] mt-5" src={Facebook} alt="" />

                    <img className="h-[35px] cursor-pointer ml-2 mr-2 mt-5" src={Youtube} alt="" />
                    
                    <img className="h-[35px] cursor-pointer mt-5" src={Twitter} alt="" />
                </div>

                <hr class="w-[80%] h-1  md:w-1 md:h-64 my-8 bg-black border-0 rounded"></hr>

                <div className="text-white">
                    <img className="h-[250px] pt-[80px]" src={Publi} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer;