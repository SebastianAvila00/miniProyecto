import React, { useState } from "react";

// IMPORTACION DE CSS
import '../components/BisCarrusel.css'

// IMPORTACION DE ICONOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

// IMPORTACION DE REACT-SLICK PARA EL CARRUSEL
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTACION DE DATOS DEL JSON
import { Images } from "../data/PokeImages";

function BisCarrusel() {

    // BOTONES SIGUIENTE Y ANTERIOR DE CARRUSEL

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
        )
    }

    const [imageIndex, setimageIndex] = useState(0);

    // AJUSTES DEL CARRUSEL
    const settings = {
        infinity: true,
        lazyLoad: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        slideToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => { setimageIndex(next) },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (

        <div className="local" >
            <Slider {...settings}>
                {Images.map((pokemon, idx) => {
                    return (

                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>


                            <div className="  border-r-2 border-l-2 border-black">

                                <div className="fondo" key={pokemon.id}>
                                    <div className="centro w-full flex justify-center items-center">
                                        <p className="m-auto numero-fondo absolute z-10 bottom-[220px] text-[100px]">{pokemon.pokedex}</p>
                                    </div>

                                    <img className="left-10 md:left-0" src={pokemon.image} alt="" />

                                </div>



                                <div className=" sur  w-full h-[130px] bg-[#232323] md:w-full text-white">

                                    <div className="flex font-semibold items-center md:justify-between justify-around pt-2">

                                        <p className="text-[1.6em] text-[#f1f1f1] pl-4 
                                     md:text-[1.6em]">{pokemon.title}
                                        </p>

                                        <p className="borrar  text-[#f4f4f4] text-[1.6em]  pr-4 md:text-[1.6em]">{pokemon.pokedex}
                                        </p>

                                    </div>


                                    <p className="borrar text-[1.6em] pl-4  md:text-[1em]">Tipo
                                        <span className="pl-4  font-semibold  md:text-[1em] text-[1em]">
                                            {pokemon.Type}
                                        </span>
                                    </p>


                                    <p className="borrar text-[1.6em]  md:text-[1em] pl-4 pb-4 ">
                                        Habilidad
                                        <span className=" pl-4  md:text-[1em] font-semibold">
                                            {pokemon.ability}
                                        </span>
                                    </p>
                                </div>



                            </div>



                            {/* <div className=" md:w-[300px] ">

                                <div className="bloque  lg:h-[250px] md:border-2 bg-[#616161] border-black h-[200px] w-full md:w-[300px] md:h-[250px] flex justify-center items-center ">
                                    <div key={pokemon.id}>


                                        <p className="lg:text-[163px] numero-fondo hidden md:block text-[#3f3f3f] pb-10 md:text-[8em] z-10 font-bold">N°{pokemon.pokedex}</p>

                                        <img className="md:left-[20px] md:top-11 lg:left-[35px]  top-[0px] md:absolute z-40 h-[200px] w-[50px] md:h-[200px] md:w-[250px]" src={pokemon.image} alt="" />
                                    </div>
                                </div>

                                <div className="bloque  lg:h-[167px] w-full h-[130px] md:h-[150px] bg-[#232323] md:w-full text-white">

                                    <div className="flex font-semibold items-center md:justify-between justify-around pt-2">
                                        <p className="text-[1.6em] text-[#f1f1f1] pl-4 
                                        md:text-[1.6em]">{pokemon.title}</p>
                                        <p className="text-[#f4f4f4] text-[1.6em]  pr-4 md:text-[1.6em]">{pokemon.pokedex}</p>
                                    </div>


                                    <p className="text-[1.6em] pl-4  md:text-[1em]">Tipo
                                        <span className="pl-4  font-semibold  md:text-[1em] text-[1em]">
                                            {pokemon.Type}
                                        </span>
                                    </p>


                                    <p className="text-[1.6em]  md:text-[1em] pl-4 pb-4 ">
                                        Habilidad
                                        <span className=" pl-4  md:text-[1em] font-semibold">
                                            {pokemon.ability}
                                        </span>
                                    </p>
                                </div>


                            </div> */}
                        </div>
                    )
                })}
            </Slider>

        </div>



    );
}

export default BisCarrusel;



