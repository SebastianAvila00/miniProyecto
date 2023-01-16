import React from "react";

// IMPORTACION DE COMPONENTES 
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Register3 from "../img/register3.png"


function RegisterPage3() {
    return (
        <div className="h-screen">

            <div>

                <Header />

                <div>

                <NavBar
                        TextColorInicio={"text-[#8e8d8d]"}
                        ColorInicio={"bg-[#fff]"}
                        ColorPokedex={"bg-[#fff]"}
                        TextColorPokedex={"text-[#8e8d8d]"}
                    />


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />



                        <div className="mt-[30px] lg:flex lg:flex-col lg:items-center  bg-[#fff]">

                            <div className="mt-5 m-auto ">
                                <img className="hidden md:block md:h-[60px]" src={Register3} alt="" />
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-center">

                                <div className=" w-full h-[300px] md:h-[300px] bg-[#F2F2F2] mt-5 md:w-[350px] md:rounded-tl-lg lg:h-[400px] ">

                                    <p className="p-5 text-[1.6em]">Gracias por crear una cuenta del Club de Entrenadores Pokémon.</p>

                                    <p className="pt-2 p-5">
                                        Te enviamos un correo electrónico de verificación. Verifica tu cuenta antes de iniciar sesión en el Club de Entrenadores Pokémon.
                                    </p>

                                </div>


                                <div className="md:h-[300px] lg:h-[400px] bg-gradient-to-b from-[#ee6b2f] to-[#f18553] md:mb-5  lg:w-[200px] mt-5">

                                    <img className="m-auto" src="https://assets.pokemon.com/static2/_ui/img/account/picachu.png" alt="" />

                                </div>
                            </div>


                        </div>
                        <Sidebar />
                    </div>

                    <Footer />

                </div>

            </div>




        </div >
    )
}

export default RegisterPage3;