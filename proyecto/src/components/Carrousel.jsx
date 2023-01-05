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

                            <div className="border-solid border-2 border-black">

                                <div className="card-top">

                                    <img src={pokemon.image} alt="" />
                                </div>

                                <div className="bg-black text-white">
                                    <p>{pokemon.title}</p>
                                    <p>{pokemon.pokedex}</p>
                                    <p>{pokemon.Type}</p>
                                    <p>{pokemon.habilidad}</p>
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



