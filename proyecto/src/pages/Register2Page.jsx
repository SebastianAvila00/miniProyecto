import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";
import Formulario from "../components/Form";
import Register2 from "../img/register2.png"

import { Formik } from "formik";

import Input from "../components/Input";

function RegisterPage2() {
    return (
        <div className="h-screen">

            <div>

                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px]
                    flex justify-center items-center bg-[#fff] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[12px] font-semibold text-black">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold "> Pokédex</p>
                        </Link>

                        <div className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Aplicaciones</p>
                        </div>

                        <div className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> TV Pokémon</p>
                        </div>

                        <div className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px]
                    flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] hover:text-[#fff] cursor-pointer">
                            <p className="text-[12px] font-semibold"> Noticias</p>
                        </div>
                    </div>


                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />


                        <div className="mt-[30px]  bg-[#fff]">

                            <div className="lg:flex lg:flex-col lg:mb-[200px] lg:items-center">

                                <div>
                                    <p className="text-[1.6em] text-[#999999]">Crea tu cuenta Club de Entrenadores Pokémon
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-5">
                                        <img className="hidden md:block md:h-[60px]" src={Register2} alt="" />
                                    </div>


                                    <div className="md:flex">
                                        <div className="">

                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    email: '',
                                                    password: ''

                                                }}
                                                validate={(valores) => {
                                                    let errores = {};
                                                    if (!valores.name) {
                                                        errores.name = 'Porfavor ingrese un nombre'
                                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                                        errores.name = 'El nombre solo puede contener letras y espacios'

                                                    }
                                                    return errores;

                                                }}
                                                onSubmit={(valores) => {
                                                    console.log(valores);
                                                    console.log("Enviar");
                                                }}
                                            >
                                                {({ handleSubmit, values, errors, handleChange, handleBlur }) => (
                                                    <form onSubmit={handleSubmit}>

                                                        <div className=" w-full h-[1200px] md:h-[1150px] bg-[#F2F2F2] mt-5 md:w-[600px] md:rounded-tl-lg lg:h-[900px] ">

                                                            <p className="text-[20px] text-[#616161]">Todos los campos son obligatorios.</p>


                                                            <div className="flex flex-col items-center md:flex-row md:justify-between mt-5">

                                                                <p
                                                                    className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">
                                                                    Nombre de usuario
                                                                </p>

                                                                <Input
                                                                    type="text"
                                                                    placeholder="hola"
                                                                    name="name"
                                                                    value={values.name}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur} />

                                                            </div>

                                                            <div className="md:flex md:mr-5 md:flex-col md:items-end">

                                                                <div className='flex justify-center lg:justify-end '>
                                                                    <button className='h-[44px] mt-2  rounded-md text-white w-[290px] hover:bg-[#0c6a8f] font-semibold lg:text-[1.2em] bg-[#30a7d7]' type="submit">
                                                                        Comprobar disponibilidad
                                                                    </button>
                                                                </div>

                                                                <div className="m-auto md:m-0 w-[290px]">
                                                                    <p className="text-[#616161] text-[13px]"> Tu nombre de usuario es el nombre que usarás para iniciar sesión en tu cuenta. Sólo tú verás este nombre.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {errors.name && <div>{errors.name}</div>}

                                                            <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                                <p
                                                                    className="text-[20px] md:ml-5 text-[#212121] lg:text-[1.5em]">Contraseña</p>

                                                                <Input
                                                                    type="password"
                                                                />

                                                            </div>

                                                            <div className="m-auto md:flex md:justify-end md:w-full  md:m-0 w-[290px]">
                                                                <p className="md:mr-10 text-[#616161] text-[13px]">
                                                                    Tu contraseña debe tener minimo 8 carácteres
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                                <p
                                                                    className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">Confirmar contraseña
                                                                </p>

                                                                <Input
                                                                    type="password"
                                                                />

                                                            </div>

                                                            <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                                <p className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">Correo electrónico</p>

                                                                <Input
                                                                    type="email"
                                                                />

                                                            </div>

                                                            <div className="m-auto md:flex md:justify-end md:w-full  md:m-0 w-[290px]">
                                                                <p className="md:mr-[67px] text-[#616161] text-[13px]">
                                                                    Tu correo electrónico servirá para verificar <br className="hidden md:block" />
                                                                    tu cuenta.
                                                                </p>
                                                            </div>



                                                            <div className="md:ml-5  md:m-0 m-auto mt-5 md:w-[500px] w-[290px]">

                                                                <p className="font-semibold text-[17px]">
                                                                    Me gustaría recibir actualizaciones por correo electrónico de The Pokémon
                                                                    Company International con respecto a:
                                                                </p>
                                                            </div>

                                                            <div className="md:mt-5 mb-[50px] flex flex-col">

                                                                <div className="md:m-0 md:ml-5  m-auto mt-[20px] flex h-[40px] md:w-[500px] w-[290px]">

                                                                    <input className="h-[30px] w-[30px] bg-[#313131]" type="checkbox" />

                                                                    <p className="pl-[20px] text-[15px] text-[#616161]">Noticias e información sobre Pokémon</p>
                                                                </div>

                                                                <div className="md:m-0 md:ml-5  m-auto mt-[20px] flex h-[40px] md:w-[500px] w-[290px]">

                                                                    <input className="h-[30px] w-[30px] bg-[#313131]" type="checkbox" />

                                                                    <p className="pl-[20px] text-[15px] text-[#616161]">Eventos semanales</p>
                                                                </div>


                                                            </div>


                                                            <div className="md:m-0 md:w-full m-auto w-[290px]">

                                                                <p className="text-[#919191]">¿Deseas que tu perfil del Club de Entrenadores Pokémon sea público? Esto incluye contenido como tu apodo. La información personal (como tu nombre real) siempre se mantendrá en privado.</p>

                                                                <form className="flex justify-around mt-5">

                                                                    <div className="">

                                                                        <input type="radio" name="check" />

                                                                        <label className="ml-3 text-[#919191]" htmlFor="">Si</label>

                                                                    </div>

                                                                    <div className="">

                                                                        <input type="radio" name="check" />

                                                                        <label className="ml-3 text-[#919191]" htmlFor="">No</label>

                                                                    </div>

                                                                </form>


                                                                <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                                    <p className="text-[20px] md:ml-5 text-[#212121] lg:text-[1.5em]">Nombre en pantalla</p>

                                                                    <Input />

                                                                </div>

                                                                <div className="md:flex md:mr-5 md:flex-col md:items-end">

                                                                    <div className='flex justify-center lg:justify-end '>
                                                                        <button className='h-[44px] mt-2  rounded-md text-white w-[290px] hover:bg-[#0c6a8f] font-semibold lg:text-[1.2em] bg-[#30a7d7]' type="submit">
                                                                            Comprobar disponibilidad
                                                                        </button>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>

                                                        <div className="md:w-full md:ml-5 w-[290px] mb-5  m-auto">
                                                            <p>Para obtener más información, consulte nuestro <span className=" cursor-pointer  text-[#0000EE] hover:text-[#282876]">Aviso sobre la privacidad</span> </p>
                                                        </div>



                                                        <div className="md:w-full md:ml-5 md:items-start flex flex-col items-center w-full justify-center">

                                                            <p className=" text-center text-[20px]">Términos de uso del sitio web de Pokémon</p>

                                                            <p className="text-center text-[#616161]">Lee las condiciones de uso y haz clic en "Continuar" para aceptarlas.
                                                            </p>

                                                            <div className="md:w-[550px] rounded-md w-[300px] h-[350px] bg-[#616161]">

                                                            </div>


                                                            <div className="md:m-0 md:mt-5 md:ml-5 md:w-full m-auto mt-[20px] flex h-[40px] mb-7 w-[290px]">

                                                                <input className="md:h-[30px] h-[60px] w-[60px] bg-[#313131]" type="checkbox" />

                                                                <p className="pl-[20px] text-[15px] text-[#616161]">                Acepto las condiciones de uso de la cuenta del Club de Entrenadores Pokémon.
                                                                </p>

                                                            </div>

                                                            <div className="md:-m-0 md:ml-5 md:w-[450px] w-[300px] m-auto">

                                                                <p className="md:ml-5">Si decide continuar usando los Servicios, usted reconoce que ha leído, entendido y aceptado nuestras <span className=" cursor-pointer  text-[#0000EE] hover:text-[#282876]">Términos de uso</span></p>
                                                            </div>
                                                        </div>

                                                        <div className='flex md:justify-end md:mb-5 md:mr-10 justify-center lg:justify-end lg:pr-5'>
                                                            <button className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#329e42] font-semibold  bg-[#4dad5b]' type="submit">
                                                                Continuar
                                                            </button>
                                                        </div>

                                                        <div className='hidden lg:flex  md:mr-10 justify-center lg:justify-end lg:pr-5'>
                                                            <button className='h-[44px] mt-10  rounded-md text-white w-[100px] hover:bg-[#141313] font-semibold  bg-[#313131]' type="submit">
                                                                Imprimir
                                                            </button>
                                                        </div>

                                                    </form>

                                                )}
                                            </Formik>


                                        </div>

                                        <div className="md:h-[1150px] lg:h-[900px] bg-gradient-to-b from-[#e6bc2f] to-[#ebc855] md:mb-5  lg:w-[200px] mt-5">

                                            <img className="  lg:h-[600px] hidden md:block " src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-signup.png" alt="" />

                                        </div>
                                    </div>


                                </div>
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

export default RegisterPage2;