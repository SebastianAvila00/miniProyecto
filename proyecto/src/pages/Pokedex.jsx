import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"

//IMPORTACIONES DE COMPONENTES
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ButtonLogin from "../components/ButtonLogin";

//IMPORTACIONES DE AXIOS
import axios from "axios";

//IMPORTACIONES DE ICONOS E IMAGENES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Pokeball from "../img/pokeball.png"




function Pokedex() {

    const [search, setSearch] = useState("");
    const [changePokemon, setChangePokemon] = useState();


    const [visible, setVisible] = useState(12);
      const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 12);
    };


    //LLAMADO A POKEAPI
    const peticionGet = async () => {
        await axios.get("https://pokeapi.co/api/v2/pokemon/")
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
                    <NavBar
                        TextColorInicio={"text-[#8e8d8d]"}
                        ColorInicio={"bg-[#fff]"}
                        ColorPokedex={"bg-[#E3350D]"}
                        TextColorPokedex={"text-white"}
                    />


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />
                        <ButtonLogin />


                        <div className="mt-[25px] ">

                            <p className="ml-[30px] lg:mb-5 text-[#919191] text-[1.9em] md:ml-[100px] lg:ml-[200px]">Pokédex</p>


                            <div className=" lg:h-[194px] lg:flex-row md:h-[300px] md:w-full flex flex-col justify-center items-center bg-[#313131] md:flex lg:justify-center md:items-center xl:w-full">

                                <div className="md:w-full lg:w-[400px]">
                                    <p className="lg:text-left lg:ml-1 text-center mt-2 text-[#fff] mb-3 text-[27px]">Nombre o número</p>

                                    <div className="justify-center md:items-center md:justify-center flex lg:flex">

                                        <input
                                            className="rounded-sm w-[250px] md:w-[312px] h-[40px]"
                                            type="text"
                                            value={search}
                                            onChange={Searcher}
                                        />

                                        <div className=" md:ml-[20px] flex justify-center items-center md:h-[50px] w-[55px]  rounded-md cursor-pointer hover:bg-[#d15922] bg-[#ee6b2f]">

                                            <FontAwesomeIcon className=" text-[20px] text-white" icon={faMagnifyingGlass} />
                                        </div>

                                    </div>

                                    <p className="text-center lg:ml-1 lg:text-left m-auto md:text-center md:w-[400px] lg:w-[450px] text-[12px] md:text-[16px] text-white font-semibold">¡Usa la búsqueda avanzada para encontrar  Pokémon por su tipo, debilidad,habilidad y demas datos!</p>
                
                                </div>

                                <div>

                                    <div className="lg:ml-[49px] w-full md:w-screen md:mt-5 mb-3 mt-3 h-[90px] lg:h-[88px] lg:w-[430px] lg:mb-[54px] rounded-[5px] bg-[#4dad5b] flex items-end">

                                        <p className="lg:font-medium lg:text-left md:text-center md:text-[25px] text-[15px] p-3 md:p-5 text-white lg:text-[20px] ">Busca un Pokémon por su nombre o <br className="md:hidden" /> usando su número de la Pokédex Nacional.</p>
                                    </div>

                                </div>


                            </div>

                            <div className="bg-[#616161] lg:w-full lg:h-[50px]"></div>



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
                                            <option defaultValue="Número Inferior">Número Inferior</option>
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

                                        {!results ? "cargando..." : results.slice(0, visible).map((pokemon, index) => {
                                            return (

                                                // PARA MATCHEAR LA IMG CON EL NOMBRE DEL INPUT LE SUMO UN +1 AL URL DE LAS IMAGENES PARA QUE MIENTRAS TRAIGA LOS ID TAMBIEN TRAIGA LA IMAGEN DEL RESPECTIVO NUMERO

                                                <tr key={pokemon.id} className="flex flex-col h-[300px] w-[250px] m-5">

                                                    <td className="bg-slate-100  border-solid border-2 border-slate-100">
                                                        <img className="h-[250px] " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
                                                    </td>

                                                    <td className="">
                                                        <p className="text-[1.6em] font-semibold">{pokemon.name}</p>
                                                    </td>

                                                </tr>

                                            );
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-center mt-[20px] mb-[30px]">

                                <div onClick={showMoreItems} className="bg-[#30a7d7] rounded-md h-[40px] w-[200px] flex items-center justify-center cursor-pointer hover:bg-[#178bb8]">

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



