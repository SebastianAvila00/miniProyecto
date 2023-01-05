import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <div className="h-screen">

            <div>
            
                <Header />

                <div>
                    <div className="poke-header z-10 flex justify-center w-full h-[87px] bg-white">
                        <Link to="/" className="flex justify-center items-center bg-[#fff] w-[125px] h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="font-semibold">Inicio</p>
                        </Link>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold"> Pokédex</p>
                        </div>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold"> Aplicaciones</p>
                        </div>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold"> TV Pokémon</p>
                        </div>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold"> Play! Pokémon</p>
                        </div>

                        <div className="flex justify-center items-center  bg-white w-[125px] h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">
                            <p className="font-semibold"> Noticias</p>
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <Sidebar />


                        <div className="mt-[30px] bg-[#fff]">

                            <div>

                                <p className="text-[1.6em] text-gray-400">¡TE DAMOS LA BIENVENIDA AL CLUB DE ENTRENADORES POKÉMON!</p>




                          

                            </div>


                        </div>
                        <Sidebar />
                    </div>



                </div>

            </div>




        </div>
    )
}

export default LoginPage;

