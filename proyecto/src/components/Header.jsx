import React from "react";
import "../App.css"

function Header() {
    return (
        <div className="h-full">
            <div className="flex md:w-full md:h-[62px] md:justify-center bg-[#f1f1f1]"
            >
                <div className="poke-shadow h-[62px] w-[120px] flex justify-center bg-white mr-2">
                    <img className="h-[60px] cursor-pointer" src="https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="Pokemon" />
                </div>
                <div className="h-[62px] w-[120px] flex justify-center items-center mr-2">
                    <img className="h-[50px] cursor-pointer" src="https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/corporate-es.png" alt="Quienes somos" />
                </div>
                <div className="h-[62px] w-[120px] flex justify-center mr-2">
                    <img className="h-[60px] cursor-pointer" src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/global/logos/es-es/swsh12-logo.png" alt="Tempestad" />
                </div>
                <div className="h-[62px] w-[120px] flex justify-center mr-2">
                    <img className="h-[60px] cursor-pointer" src="https://scarletviolet.pokemon.com/_images/global/en/pokemon-scarlet-logo-medium-up.webp" alt="Pokemon Escarlata" />
                </div>
                <div className="h-[62px] w-[120px] flex justify-center mr-2">
                    <img className="h-[60px] cursor-pointer" src="https://unite.pokemon.com/images/common/en-us/unite-logo.png" alt="Pokemon unite" />
                </div>
                <div className="h-[62px] w-[120px] flex justify-center mr-2">
                    <img className="h-[60px] cursor-pointer" src="https://tcg.pokemon.com/assets/img/global/logos/es-es/tcg-logo.png" alt="Pokemon Go" />
                </div>

            </div>

        </div>
    );
}

export default Header;