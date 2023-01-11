
import React, { useState, useEffect } from "react"

//IMPORTACIONES DE COMPONENTES
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
//IMPORTACIONES DE AXIOS
import axios from "axios";

//IMPORTACIONES DE NAVEGADOR
import { Link } from "react-router-dom";

//IMPORTACIONES DE ICONOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import Pokeball from "../img/pokeball.png"
import Reload from "../img/reload.png"
import ButtonLogin from "../components/ButtonLogin";



function Pokedex() {

    const [search, setSearch] = useState("");
    const [changePokemon, setChangePokemon] = useState();

    //LLAMADO A POKEAPI
    const peticionGet = async () => {
        await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12")
            .then(response => {
                setChangePokemon(response.data.results);
                console.log(response.data.results);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        peticionGet();
    }, [])


    //GUARDO EL VALOR DEL INPUT 
    const Searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }


    //FILTRO LA BUSQUEDA DEL INPUT
    let results = []
    if (!search) {
        results = changePokemon
    } else {
        results = changePokemon.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }


    return (
        <div className="h-screen">

            <div>
                {/* HEADER */}
                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50  md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px] text-[#464646]
                        flex justify-center items-center bg-[#fff] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[15px] font-semibold ">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px] 
                    flex justify-center items-center  bg-red-500 md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold text-white"> Pokédex</p>
                        </Link>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Aplicaciones</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> TV Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Noticias</p>
                        </div>
                    </div>




                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />
                        <ButtonLogin />


                        <div className="mt-[30px] ">

                            <p className="ml-[30px] text-[#919191] text-[1.6em] font-semibold md:ml-[100px] lg:ml-[200px]">Pokédex</p>


                            <div className="bg-[#313131] md:h-[200px] md:flex md:items-center xl:w-[84vw]">

                                <div className="mb-[20px] md:mb-[0px] ml-[30px] md:ml-[100px] xl:ml-[200px]">
                                    <p className="text-[#f1f1f1] text-[2em]">Nombre o número</p>

                                    <div className="flex">
                                        <input
                                            className="rounded-md w-[250px] lg:w-[370px] h-[40px]"
                                            type="text"
                                            value={search}
                                            onChange={Searcher}

                                        />

                                        <div className=" md:ml-[20px] flex justify-center items-center md:h-[50px] w-[50px]  rounded-md cursor-pointer hover:bg-[#d15922] bg-[#ee6b2f]">

                                            <FontAwesomeIcon className=" text-[20px] text-white" icon={faMagnifyingGlass} />
                                        </div>


                                    </div>
                                    <p className="text-[12px] md:text-[16px] text-white font-semibold">¡Usa la búsqueda avanzada para encontrar <br /> Pokémon por su <br className="hidden md:block" /> tipo, debilidad,habilidad y demas datos!</p>
                                </div>

                                <div className="ml-[30px] md:ml-[50px] w-[250px] h-[90px] md:w-[200px] lg:w-[400px] rounded-lg bg-[#4dad5b] flex items-center">
                                    <p className="p-3 md:p-5 text-[12px] text-white lg:text-[17px] font-semibold ">Busca un Pokémon por su nombre o <br /> usando su número de la Pokédex Nacional.</p>
                                </div>
                            </div>




                            <div className="flex flex-col justify-center items-center
                            md:flex-row md:justify-evenly mt-[30px]">

                                <div className="bg-[#30a7d7] rounded-md h-[45px] md:w-[330px] w-[180px] flex items-center justify-center cursor-pointer hover:bg-[#178bb8]">

                                    <FontAwesomeIcon className="text-white pr-2 md:h-[20px]" icon={faArrowsRotate} />
                                    <p className="text-[white] text-[12px] font-semibold md:text-[18px]">¡Sorpréndeme!</p>
                                </div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <p className="text-[1.5em] md:ml-5 text-[#a4a4a4]">Ordenar por
                                    </p>


                                    <div className="ml-5 flex bg-[#313131] items-center">
                                        <img className="h-[40px] pr-2" src={Pokeball} alt="" />

                                        <select className=" bg-[#313131] h-[50px] text-white md:w-[260px]">
                                            <option selected value="Número Inferior">Número Inferior</option>
                                            <option value="Número Superior">Número Superior</option>
                                            <option value="A-Z">A-Z</option>

                                            <option value="Z-A">Z-A</option>
                                        </select>
                                    </div>

                                </div>
                            </div>



                            <div>
                                <table className="">

                                    <tbody className="flex flex-wrap justify-center">

                                        {!results ? "cargando..." : results.map((pokemon, index) => {
                                            return (

                                                <tr className="h-[300px] w-[250px] m-5">
                                                    <div className="flex flex-col">

                                                        <td className="bg-slate-100  border-solid border-2 border-slate-100">
                                                            <img className="h-[250px] " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
                                                        </td>

                                                        <td className="">
                                                            <p className="text-[1.6em] font-semibold">{pokemon.name}</p>
                                                        </td>
                                                    </div>
                                                </tr>

                                            );
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-center mt-[20px] mb-[30px]">

                                <div className="bg-[#30a7d7] rounded-md h-[40px] w-[200px] flex items-center justify-center cursor-pointer hover:bg-[#178bb8]">

                                    <p className="text-[white] font-semibold">Cargar más Pokémon</p>
                                </div>
                            </div>


                        </div>

                        <Sidebar />


                    </div>
                    <Footer />

                </div>

            </div>

        </div>


    );
}

export default Pokedex;



