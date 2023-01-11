import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";
import Formulario from "../components/Form";
import Register1 from "../img/register1.png"







function Register() {

    return (
        <div className="h-screen">

            <div>

                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px]
                        flex justify-center items-center bg-[#fff] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[12px] font-semibold text-black">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold "> Pokédex</p>
                        </Link>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Aplicaciones</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> TV Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Noticias</p>
                        </div>
                    </div>


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />


                        <div className="mt-[30px]  bg-[#fff]">

                            <div className="lg:flex lg:flex-col lg:mb-[200px] lg:items-center">

                                <div>
                                    <p className="text-[1.6em] text-[#999999]">Crea tu cuenta Club de Entrenadores Pokémon
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-5">
                                        <img className="hidden md:block md:h-[53px]" src={Register1} alt="" />
                                    </div>


                                    <div className="md:flex">
                                        <div className="w-full mb-[300px]  h-[250px] bg-[#F2F2F2] mt-5 md:w-[600px] md:rounded-tl-lg lg:h-[318px]">

                                            <p className="text-[20px] text-[#616161]">Todos los campos son obligatorios.</p>


                                            <div className="mt-5">
                                            <div className="flex flex-col items-center md:flex-row mt-5 md:">
                                                    <p className="md:ml-[50px] lg:pr-[130px] text-[#212121] lg:text-[1.5em]">Fecha de <br className="hidden lg:block" />
                                                        nacimiento</p>

                                                    <div>
                                                        <input className="lg:ml-[23px] rounded md:ml-[100px] bg-[#888] lg:w-[200px] lg:h-[40px] text-white w-[160px]" type="date" />
                                                    </div>
                                                </div>


                                                <div className="flex flex-col items-center md:flex-row md: mt-5">
                                                    <p className="md:ml-[50px] lg:pr-[130px] text-[#212121] lg:text-[1.5em]">País o Región</p>

                                                    <select className="md:ml-[150px] lg:ml-[0px] rounded bg-[#313131] lg:w-[200px] lg:h-[40px] text-white w-[160px]">
                                                        <option selected value="Estados Unidos">Estados Unidos</option>
                                                        <option value="Francia">Francia</option>
                                                        <option value="Inglaterra">Inglaterra</option>

                                                        <option value="Argentina">Argentina</option>
                                                    </select>

                                                </div>

                                                <div className='flex justify-center lg:justify-end lg:pr-5'>
                                                    <Link to="/register2" className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#329e42] font-semibold  bg-[#4dad5b]' type="submit">
                                                        <p className="text-center pt-[9px]">Continuar</p>

                                                    </Link>
                                                </div>

                                            </div>

                                            <div className="bg-[#616161] mt-4 md:w-[600px] h-[315px] ">

                                                <p className="pl-10 pt-10 text-[#4dad5b] font-semibold text-[1.2em]">Con una cuenta del Club de Entrenadores Pokémon puedes:</p>

                                                <p className="pl-10 mt-4 text-white text-[18px] font-semibold">Iniciar sesión en las apps de Pokémon, suscribirte a los boletines ¡y mucho más!</p>

                                                <p className="pl-10 mt-4 font-medium text-white">Si ya tienes una cuenta, <Link className="text-[#30a7d7] hover:text-[#187da5] cursor-pointer" to="/login">inicia sesión.</Link></p>

                                            </div>

                                        </div>

                                        <div className="bg-gradient-to-b from-[#e6bc2f] to-[#ebc855] md:mb-5 ">
                                            <img className=" hidden md:block " src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-signup.png" alt="" />
                                        </div>
                                    </div>


                                </div>
                            </div>





                        </div>
                        <Sidebar />
                    </div>

                    <Footer />

                </div>

            </div>




        </div>
    )

}

export default Register;



