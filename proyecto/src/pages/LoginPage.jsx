import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";
// import Formulario from "../components/Form";
import { Formik } from "formik";


import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";



function LoginPage() {


    const { login } = useAuth()
    const navigate = useNavigate();




    return (
        <div className="h-screen">

            <div>

                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px]
                        flex justify-center items-center bg-[#fff] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] text-[#464646] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[15px] font-semibold ">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Pokédex</p>
                        </Link>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Aplicaciones</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold ">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> TV Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Noticias</p>
                        </div>
                    </div>


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />


                        <div className="mt-[30px] bg-[#fff]">

                            <div className="flex flex-col">



                                <p className="text-[1.6em] text-gray-400">¡TE DAMOS LA BIENVENIDA AL CLUB DE ENTRENADORES POKÉMON!</p>


                                <div className="mt-[50px] flex flex-col md:flex-row md:justify-center">

                                    <div>
                                        <p className="text-center md:text-[1.6em] text-[#919191]">Iniciar sesión</p>
                                        <div>
                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    password: ''

                                                }}
                                                validate={(valores) => {
                                                    let errores = {};

                                                    if (!valores.name) {
                                                        errores.name = 'Escribe un nombre de usuario.'
                                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                                        errores.name = 'El nombre solo puede contener letras y espacios.'

                                                    }


                                                    if (!valores.password) {
                                                        errores.password = 'Escribe una Contraseña.'
                                                    }

                                                    return errores;


                                                }}
                                                onSubmit={(valores) => {
                                                    console.log(valores);
                                                    console.log("Enviar");
                                                }}
                                                
                                            >
                                                {({ handleSubmit, values, errors, handleChange, handleBlur }) => (

                                                    <form
                                                        action=""
                                                        onSubmit={handleSubmit}
                                                        className="h-[400px] md:w-[400px] bg-[#F2F2F2]"
                                                    >

                                                        {errors.name && <div className="border-solid rounded-lg border-2 border-red-600 text-red-500 text-center ">{errors.name}</div>}
                                                        {errors.password && <div className="mt-5 rounded-lg border-red-600 border-solid border-2  text-red-500 text-center">{errors.password}</div>}

                                                        <div className='pt-5'>

                                                            <div className='flex flex-col justify-center md:justify-around items-center lg:flex-row lg:items-start'>

                                                                <div>
                                                                    <label htmlFor="nombre" className='text-[#212121] md:text-[17px] lg:text-[18px]'>Nombre de <br className='hidden lg:block' /> usuario</label>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <input
                                                                        className='lg:mt-3 w-[250px] bg-[#313131] text-[#f1f1f1]  rounded-md md:h-[40px] md:w-[237px]'
                                                                        type="text"
                                                                        name="name"
                                                                        id="name"
                                                                        value={values.name}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    />
                                                                    <a className='text-[#1b53ba] hover:text-[#77a6fe] underline' href="#" rel="noopener noreferrer">¿Has olvidado tu nombre de <br className='hidden md:block' /> usuario?</a>

                                                                </div>
                                                            </div>




                                                            <div className='flex flex-col justify-center md:justify-around items-center lg:items-start lg:flex-row'>

                                                                <div>
                                                                    <label htmlFor="nombre" className='text-[#212121] md:text-[17px] lg:text-[18px]'>Contraseña</label>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <input
                                                                        className=' bg-[#313131] text-[#f1f1f1]  rounded-md md:h-[40px] w-[250px] md:w-[237px]'
                                                                        type="password"
                                                                        name="password"
                                                                        id="password"
                                                                        value={values.password}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    />
                                                                    <a className='text-[#1b53ba] hover:text-[#77a6fe] underline' href="#" rel="noopener noreferrer">¿Has olvidado tu contraseña?</a>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='flex justify-center lg:justify-end lg:pr-5'>
                                                            <button className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#329e42] font-semibold  bg-[#4dad5b]' type="submit">Iniciar Sesión</button>
                                                        </div>
                                                    </form>

                                                )}
                                            </Formik>
                                        </div>
                                    </div>


                                    <div className="ml-5">
                                        <p className="text-[1.6em]  text-[#919191]">¡Únete al Club de Entrenadores <br /> Pokémon!</p>

                                        <div className=" md:h-[230px] md:w-[350px] bg-[#F2F2F2]">

                                            <p className="">¡Crea una cuenta del Club de Entrenadores Pokémon hoy mismo! Con ella podrás encargarte de tu perfil en Pokemon.com/LATAM, jugar al Juego de Cartas Coleccionables Online... ¡<span className="text-[#1b53ba] cursor-pointer hover:text-[#092355]">y mucho más</span>!</p>


                                            <div className='flex justify-center lg:justify-end lg:pr-5'>
                                                <Link to="/register1" className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#0c6a8f] font-semibold lg:text-[1.2em] bg-[#30a7d7]' type="submit"><p className="text-center pt-[6px]">¡Regístrate!</p></Link>
                                            </div>

                                        </div>



                                        <img className="h-[200px]" src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png" alt="" />
                                    </div>
                                </div>

                            </div>


                        </div>
                        <Sidebar />
                    </div>
                    <Footer />


                </div>

            </div>




        </div >
    )
}

export default LoginPage;

