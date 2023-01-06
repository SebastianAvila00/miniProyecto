import React from "react";
import { useState } from "react";
import '../components/Carrousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"


import { Images } from "../data/PokeImages";

function Carrousel() {

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

                            <div className="border-solid border-2 w-[300px] border-black">

                                <div className="card-top">

                                    <img src={pokemon.image} alt="" />
                                </div>

                                <div className="bg-black text-white">

                                    <div className="flex font-semibold items-center justify-between pt-2">
                                        <p className="text-[#f1f1f1] pl-4 text-[1.6em]">{pokemon.title}</p>
                                        <p className="text-[#f4f4f4] pr-4 text-[1.6em]">{pokemon.pokedex}</p>
                                    </div>

                                    <p className="pl-4 ">Tipo  <span className="font-semibold">{pokemon.Type}</span></p>
                                    <p className="pl-4 pb-4 ">Habilidad <span className="font-semibold">{pokemon.ability}</span></p>
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



