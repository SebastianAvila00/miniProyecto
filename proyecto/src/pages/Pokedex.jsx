
import React, { useState, useEffect } from "react"
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




function Pokedex() {

    let indexImg = 0;

    const [changePokemon, setChangePokemon] = useState();

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





    return (
        <div className="h-screen">



            <div>
                {/* HEADER */}
                <Header />

                <div>
                    <div className="poke-header z-10 flex justify-center w-full h-[87px] bg-white">
                        <Link to="/" className="flex justify-center items-center bg-[#fff] w-[125px] h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="font-semibold">Inicio</p>
                        </Link>
                        <Link to="/pokedex" className="flex justify-center items-center  bg-red-500 w-[125px] h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-white font-semibold"> Pokédex</p>
                        </Link>

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

                        <div className="mt-[30px] ">

                            <p className="text-[#919191] text-[1.6em] font-semibold ml-[200px]">Pokédex</p>


                            <div className="bg-[#313131] h-[200px] flex items-center ">
                                <div className="ml-[200px]">
                                    <p className="text-[#f1f1f1] text-[2em]">Nombre o número</p>

                                    <div className="flex">
                                        <input className=" rounded-md w-[370px] h-[40px]" type="text" />

                                        <div className="ml-[20px] flex justify-center items-center h-[50px] w-[50px]  rounded-md cursor-pointer hover:bg-[#d15922] bg-[#ee6b2f]">
                                            <FontAwesomeIcon className=" text-[20px] text-white" icon={faMagnifyingGlass} />
                                        </div>


                                    </div>
                                    <p className="text-white font-semibold">¡Usa la búsqueda avanzada para encontrar Pokémon por su <br /> tipo, debilidad,habilidad y demas datos!</p>
                                </div>

                                <div className="ml-[50px] h-[100px] w-[400px] rounded-lg bg-[#4dad5b] flex items-center">
                                    <p className=" p-5 text-white text-[1.1em] font-semibold">Busca un Pokémon por su nombre o usando su número de la Pokédez Nacional.</p>
                                </div>
                            </div>




                            <div className="flex justify-evenly">
                                <div className="bg-[#30a7d7] rounded-md h-[40px] w-[300px] flex items-center justify-center cursor-pointer hover:bg-[#178bb8]">

                                    <p className="text-[white] font-semibold">¡Sorprendeme!</p>
                                </div>

                                <div className="flex">
                                    <p className="text-[1.5em] text-[#a4a4a4]">Ordenar por</p>
                                    <div><input type="select" /></div>
                                </div>
                            </div>



                            <div className="flex flex-wrap justify-center">
                                {!changePokemon ? "cargando..." : changePokemon.map((pokemon, index) => {
                                    return (

                                        <div className="h-[300px] w-[250px] m-5">

                                            <div className="bg-slate-100  border-solid border-2 border-slate-100">
                                                <img className="h-[250px] " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
                                            </div>

                                            <div className="">
                                                <p className="text-[1.6em] font-semibold">{pokemon.name}</p>
                                            </div>
                                        </div>

                                    );
                                })
                                }
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



