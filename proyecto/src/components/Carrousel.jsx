import React, { useState } from "react";

// IMPORTACION DE CSS
import '../components/Carrousel.css'

// IMPORTACION DE ICONOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

// IMPORTACION DE REACT-SLICK PARA EL CARRUSEL
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTACION DE DATOS DEL JSON
import { Images } from "../data/PokeImages";

function Carrousel() {

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
        speed: 300,
        slideToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => { setimageIndex(next) }
    }


    return (

        <div className="local" >
            <Slider {...settings}>
                {Images.map((pokemon, idx) => {
                    return (

                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>

                            <div className=" md:w-[300px] ">

                                <div className="md:border-2 border-black h-[150px] w-[150px] md:w-[300px] md:h-[250px] flex justify-center items-center ">
                                    <div>


                                        <p className="hidden md:block text-[#5c5c5c] pb-10 md:text-[8em] z-10 font-bold">N°{pokemon.pokedex}</p>

                                        <img className="md:left-[75px] md:top-11 lg:left-[35px] left-[20px] top-[0px] absolute z-40 h-[150px] w-[50px] md:h-[200px] md:w-[250px]" src={pokemon.image} alt="" />
                                    </div>
                                </div>

                                <div className="w-[150px] md:h-[150px] bg-[#232323] md:w-full text-white">

                                    <div className="flex font-semibold items-center justify-between pt-2">
                                        <p className="text-[#f1f1f1] pl-4 
                                        md:text-[1.6em]">{pokemon.title}</p>
                                        <p className="text-[#f4f4f4]text-[12px]  pr-4 md:text-[1.6em]">{pokemon.pokedex}</p>
                                    </div>

                                    <p className="pl-4 text-[12px]  md:text-[1em]">Tipo
                                        <span className="pl-4  font-semibold  md:text-[1em] text-[12px]">
                                            {pokemon.Type}
                                        </span>
                                    </p>


                                    <p className="text-[12px]  md:text-[1em] pl-4 pb-4 ">
                                        Habilidad

                                        <span className=" pl-4  md:text-[1em] font-semibold">
                                            {pokemon.ability}
                                        </span>
                                    </p>
                                </div>


                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>

    );
}

export default Carrousel;



