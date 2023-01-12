import React from "react";
import Carrousel from "../components/Carrousel";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

//IMPORTACION DE HEADER Y SIDEBAR
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import Pokeball from "../img/pokeball.png"

import ButtonLogin from "../components/ButtonLogin";


function HomePage() {

    const { user, logout, loading } = useAuth()

    console.log(user)
    const handleLogout = async () => {
        await logout()
    }

    if (loading) return <div>Cargando...</div>

    return (
        <div className="h-screen">

            {/* <div>{user.email} {user.uid}</div> */}

            <button onClick={handleLogout}>Logout</button>

            <div>
                {/* HEADER */}
                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px]
                        flex justify-center items-center bg-[#919191] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[15px] font-semibold text-white">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Pokédex</p>
                        </Link>

                        <div className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Aplicaciones</p>
                        </div>

                        <div className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> TV Pokémon</p>
                        </div>

                        <div className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px] text-[#464646]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Noticias</p>
                        </div>
                    </div>


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />
                        <ButtonLogin />



                        <div className="mt-[30px] bg-[#f1f1f1]">

                            <div>
                                <div className="lg:flex lg:justify-center">

                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[400px] w-full
                                         cursor-pointer md:h-[512px] md:w-[580px] hover:bg-yellow-500 bg-[#e6bc2f]">

                                            <img className="md:h-[340px]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/_tiles/swsh125/preview-cards/swsh125-preview-cards-1-169-es.jpg" alt="" />


                                            <p className="text-[15px]
                                            md:text-[1.4em] text-white font-semibold pl-[20px] md:pt-5 tracking-tight">Descrubre alguna de las nuevas cartas que te <br /> esperan en <span className="italic">Cenit Supremo</span>
                                            </p>

                                            <p className="md:text-[16px] font-semibold pl-[20px] text-[#2a2a2a] tracking-tight">Echa un vistazo a algunas de las cartas de la siguiente expansión, incluyendo algunas de las más impresionantes del subconjunto Galería de <br /> Galar.</p>

                                        </div>

                                        <div className="md:flex
                                        pt-4 ">

                                            <div className="h-[400px] w-full
                                            mr-3 md:h-[310px] md:w-[285px] hover:bg-[#e42f9cdd] bg-rose-300 cursor-pointer">

                                                <img className="md:h-[150px] w-[100%]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/watch-pokemon-tv/_tiles/2023/new-animated-series-169.png" alt=""
                                                />

                                                <p className="text-white font-semibold text-[1.5em] pl-[20px] tracking-tight">Una nueva serie de dibujos animados Pókemon se entrenará <br /> a partir de 2023</p>

                                            </div>


                                            <div className="mt-[20px] md:mt-[0px] h-[400px] w-full
                                            md:h-[310px] md:w-[285px] hover:bg-violet-600 bg-violet-500 cursor-pointer">


                                                <img className="md:h-[150px] w-[100%]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/_tiles/sv/announce/sv-announce-169-es.jpg" alt=""
                                                />

                                                <p className="text-white font-semibold text-[1.5em] pl-[20px] tracking-tight">La serie Escarlata y Púrpura marca el comienzo de una nueva era en JCC Pókemon</p>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="md:flex lg:flex-col justify-center items-center pt-[20px] md:pt-[0px] md:pl-3">


                                        <div className="h-[400px] w-full
                                        mr-3 mb-4 md:h-[290px] md:w-[285px] hover:bg-red-600 bg-red-500 cursor-pointer">

                                            <img className="md:h-[150px] w-[100%]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/watch-pokemon-tv/_tiles/season13/season13-on-ptv-announce-169-es.png" alt=""
                                            />

                                            <p className="text-white text-[1.5em] tracking-tight pl-[20px] pt-[5px]">Ponemos fin a un viaje <br /> a través de la región <br /> Sinnoh en TV Pókemon</p>

                                        </div>

                                        <div className="h-[400px] w-full md:hidden lg:block
                                        mr-3 mb-4 md:h-[330px] md:w-[285px] hover:bg-[#177aa1] bg-[#30a7d7] cursor-pointer">

                                            <img className="md:h-[150px] md:w-[100%]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/_tiles/strategy/swsh12/lugia-vstar/swsh12-lugia-vstar-169-es.jpg" alt=""
                                            />

                                            <p className="text-white tracking-tight font-semibold text-[1.3em] pl-[20px] pt-[10px]">Lugia V-ASTRO tiene un impacto instantáneo</p>

                                            <p className="pl-[20px]">Descrubre por qué el Pókemon Buceo fue protagonista en el Campeonato Internacional de Latinoamérica.</p>

                                        </div>

                                        <div className="mb-10 md:mb-[0px] h-[150px] w-full
                                        flex mr-3 md:h-[150px] md:w-[285px] hover:bg-[#937c56] bg-[#C7AA79] cursor-pointer">

                                            <img className="h-[150px] w-[100%]" src="https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/video-games/_tiles/pokemon-scarlet-violet/launch/scarlet-violet-34-latam.jpg" alt=""
                                            />

                                            <p className=" text-white font-semibold mb-4 pt-[10px] text-[1.4em] pl-[20px]">¡Comienza tu viaje por Paldea!</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="flex justify-center items-center md:ml-[185px] mt-10 h-[50px] w-[250px] rounded-t-lg bg-[#232323]">

                                    <img className="h-[40px] pr-2" src={Pokeball} alt="" />

                                    <p className="text-[#919191] -semibold text-[20px]">Pokémon destacados</p>

                                </div>

                                <div className="md:h-[420px] h-[220px] bg-[rgba(0,0,0,0.5)] xl:w-[82vw]"
                                >
                                    <Carrousel />
                                </div>


                            </div>

                            <div className="h-[50px] w-[200px] rounded-md cursor-pointer bg-[#232323] mb-[100px] flex justify-center items-center mt-5 m-auto
                            
                            md:mr-[150px]"
                            >

                                <Link to="/pokedex" className=" text-[#f1f1f1] font-semibold text-[17px]">Ver más Pokémon</Link>

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

export default HomePage;